const inpValue=document.querySelector('.inpVal');
let apiKey='bddf076508d7b9d42f4e96a63e8ce5d2'
let endpoint='api.openweathermap.org/data/2.5/weather?q=delhi&appid=bddf076508d7b9d42f4e96a63e8ce5d2'
const weatherHtml=document.querySelector('.weather');
const tempHtml=document.querySelector('.temp');
const dateHtml=document.querySelector('.date');
const cityHtml=document.querySelector('.city');

const fetchApiData = () => {
    let city=inpValue.value;
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'')
   .then(response => response.json())
.then(data=>modifyHtml(data)
)
.catch(err=>{
    console.log(err);
})
}
let form=document.querySelector('form');

form.addEventListener('submit',e=>{
    e.preventDefault();
fetchApiData();
inpValue.value="";
})

function modifyHtml(data){
console.log(data);
let weather=data.weather[0].description;

let temp=Math.round(data.main.temp-273);
let now = new Date();
let date=now.getDate();
let month=now.getMonth();
monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
let monthName=monthArray[month];
let city=data.name;
let temperatureHtml=`
${temp}&deg C
`
 weatherHtml.innerHTML=weather;
tempHtml.innerHTML=temperatureHtml;
let dateMonthHtml=`<span>${date}</span>&nbsp;<span>${monthName}</span>`
dateHtml.innerHTML=dateMonthHtml;
cityHtml.innerHTML=city;

}
