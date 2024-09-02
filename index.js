
const search_btn=document.querySelector(".search_btn");
const current_location_btn=document.querySelector(".current_location_btn");
console.log(search_btn);
console.log(current_location_btn);
async function getweather(city){ 
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=636c2583cd189bfd05ef259fa65bba19&units=metric`;
    const fetched= await fetch(url);
    const result= await fetched.json();
    console.log(result);
    if(result.cod=="404"){
        alert(result.message);
        return;
    }

    const temp=document.querySelector(".temp");
    const wind=document.querySelector(".wind");
    const humidity=document.querySelector(".humidity");
    const datetime=document.querySelector(".date");
    const img=document.querySelector(".img");

    const temprature=result.list[0].main.temp;
    const windSpeed=result.list[0].wind.speed;
    const Humidity=result.list[0].main.humidity;
    const dateTime=result.list[0].dt_txt;
    const date=dateTime.split(' ');
    const weatherimg=result.list[0].weather[0].main;

    temp.innerHTML=`Temprature: ${temprature}° C`;
    wind.innerHTML=`Wind Speed: ${windSpeed}km/h `;
    humidity.innerHTML=`Humidity: ${Humidity}%`;
    datetime.innerHTML=`${date[0]}`;
    if(weatherimg=="Clouds"){
        img.src="./images/clouds.png";
    }
    else if(weatherimg=="Rain"){
        img.src="./images/rain.png";
    }
    else if(weatherimg=="Clear"){
        img.src="./images/clear.png";
    }
    else if(weatherimg=="Mist"){
        img.src="./images/mist.png";
    }
    else if(weatherimg=="Drizzle"){
        img.src="./images/drizzle.png";
    }

}
search_btn.addEventListener("click",(e)=>{
    const city =document.querySelector(".search_input");
    getweather(city.value);
    e.preventDefault();
});


