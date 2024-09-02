sessionStorage.setItem("city","city");
const search_btn=document.querySelector(".search_btn");
const current_location_btn=document.querySelector(".current_location_btn");
console.log(search_btn);
console.log(current_location_btn);
function getlsdata(){
        
        console.log(localStorage.getItem("city"));
        if(localStorage.getItem("city")===null){
            console.log("local storage is null");
            
        }
        else{
            const dd1=document.querySelector(".dd1");
            const dd2=document.querySelector(".dd2");
            const dd3=document.querySelector(".dd3");
            const dd4=document.querySelector(".dd4");

            console.log("local storage is not null");
            dd1.innerHTML=localStorage.getItem("city");
            const recent=document.querySelector(".recent_search");
            recent.style.visibility="inherit";
            dd2.innerHTML=localStorage.getItem("city1");
            dd3.innerHTML=localStorage.getItem("city11");
            dd4.innerHTML=localStorage.getItem("city111");  }          
}
getlsdata();

function ls(city){
    let  key=sessionStorage.getItem("city");
    if(key=="city1111"){
        sessionStorage.setItem("city","city");
        key="city";
    }
    let value=key+"1";
    sessionStorage.setItem("city",value);
    localStorage.setItem(key,city);
    const dd1=document.querySelector(".dd1");
    const dd2=document.querySelector(".dd2");
    const dd3=document.querySelector(".dd3");
    const dd4=document.querySelector(".dd4");
    if(key=="city"){
        dd1.innerHTML=localStorage.getItem(key);
        const recent=document.querySelector(".recent_search");
        recent.style.visibility="inherit" ;
    }
    if(key=="city1"){
        dd2.innerHTML=localStorage.getItem(key);
    }
    if(key=="city11"){
        dd3.innerHTML=localStorage.getItem(key);
    }
    if(key=="city111"){
        dd4.innerHTML=localStorage.getItem(key);
    }
}

async function getweather(city){ 
    if(city==""){
        alert("Please Enter city name");
        return;
    }
    if(!navigator.onLine){
        alert("Kindly check your Network Connection!...")
    }
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=636c2583cd189bfd05ef259fa65bba19&units=metric`;
    const fetched= await fetch(url);
    const result= await fetched.json();
    console.log(result);
    if(result.cod=="404"){
        alert(result.message);
        return;
    }
    
    ls(city);
    for(let i=0, j=0;i<result.list.length;i=i+8,j++){

        const temprature=result.list[i].main.temp;
        const windSpeed=result.list[i].wind.speed;
        const Humidity=result.list[i].main.humidity;
        const dateTime=result.list[i].dt_txt;
        const date=dateTime.split(' ');
        const weatherimg=result.list[i].weather[0].main;
        

        if(i==0){
            const temp=document.querySelector(".temp");
            const wind=document.querySelector(".wind");
            const humidity=document.querySelector(".humidity");
            const datetime=document.querySelector(".date");
            const img=document.querySelector(".img");

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
        if(i==8){
            const temp=document.querySelector(".temp1");
            const wind=document.querySelector(".wind1");
            const humidity=document.querySelector(".humidity1");
            const datetime=document.querySelector(".date1");
            const img=document.querySelector(".img1");

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
        if(i==16){
            const temp=document.querySelector(".temp2");
            const wind=document.querySelector(".wind2");
            const humidity=document.querySelector(".humidity2");
            const datetime=document.querySelector(".date2");
            const img=document.querySelector(".img2");

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
        if(i==24){
            const temp=document.querySelector(".temp3");
            const wind=document.querySelector(".wind3");
            const humidity=document.querySelector(".humidity3");
            const datetime=document.querySelector(".date3");
            const img=document.querySelector(".img3");

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
        if(i==32){
            const temp=document.querySelector(".temp4");
            const wind=document.querySelector(".wind4");
            const humidity=document.querySelector(".humidity4");
            const datetime=document.querySelector(".date4");
            const img=document.querySelector(".img4");

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
        if(j==4){
            const temp=document.querySelector(".temp5");
            const wind=document.querySelector(".wind5");
            const humidity=document.querySelector(".humidity5");
            const datetime=document.querySelector(".date5");
            const img=document.querySelector(".img5");

            const temprature=result.list[39].main.temp;
            const windSpeed=result.list[39].wind.speed;
            const Humidity=result.list[39].main.humidity;
            const dateTime=result.list[39].dt_txt;
            const date=dateTime.split(' ');
            const weatherimg=result.list[39].weather[0].main;

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
    }
    
}
search_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const city =document.querySelector(".search_input");
    getweather(city.value,e);
    city.innerHTML="";
});


async function getcurrentweather(lat,lon){
    const fetched=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=636c2583cd189bfd05ef259fa65bba19&units=metric`);

    const result= await fetched.json();
    console.log(result);
    if(result.cod=="404"){
        alert(result.message);
        return;
    }
    const city=result.name;
    getweather(city);
}
current_location_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const lat=position.coords.latitude;
            const lon=position.coords.longitude;
            getcurrentweather(lat,lon);
        },(error)=>{
            console.log(error.message);
        })
    }  
}
)