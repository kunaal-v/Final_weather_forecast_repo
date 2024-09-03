//setting the session storage key and value to city.
sessionStorage.setItem("city","city");
//get the referance of input field and search button.
const search_btn=document.querySelector(".search_btn");
const current_location_btn=document.querySelector(".current_location_btn");
//make a function get the data from local storage when the website opens.
// if the local storage is empty the dropdown will not appear.
function getlsdata(){
        //check for local storage is empty or not
        if(localStorage.getItem("city")===null){
            console.log("local storage is null");
            
        }
        //will run if storage is not empty
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

// make a function when we searched for a city it will store in the local storage and also update the dropdown menu of recent search
function ls(city){
    let  key=sessionStorage.getItem("city");
    if(key=="city1111"){
        sessionStorage.setItem("city","city");
        key="city";
    }
    let value=key+"1";
    sessionStorage.setItem("city",value);
    localStorage.setItem(key,city);
    //get the referance of dropdowns 
    const dd1=document.querySelector(".dd1");
    const dd2=document.querySelector(".dd2");
    const dd3=document.querySelector(".dd3");
    const dd4=document.querySelector(".dd4");
    //update the dropdown accordingly
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
//function to getch data from api and update the 5 days forecast and today's temp
async function getweather(city){ 
    //if input field is empty it will show the alret message and return from the function
    if(city==""){
        alert("Please Enter city name");
        return;
    }
    //it will check the internet connection. 
    if(!navigator.onLine){
        alert("Kindly check your Network Connection!...")
    }
    // it will fetch the data from api
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=636c2583cd189bfd05ef259fa65bba19&units=metric`;
    const fetched= await fetch(url);
    const result= await fetched.json();
    console.log(result);
    //if data is fetched it will return the message.
    if(result.cod=="404"){
        alert(result.message);
        return;
    }
    // calling function to store data in the local storage and update the dropdown menu
    ls(city);
    //using for loop to get all the data(i.e. today's temp and 5-day forecast)
    for(let i=0, j=0;i<result.list.length;i=i+8,j++){
        // assigning fetched data to the variables
        const temprature=result.list[i].main.temp;
        const windSpeed=result.list[i].wind.speed;
        const Humidity=result.list[i].main.humidity;
        const dateTime=result.list[i].dt_txt;
        const date=dateTime.split(' ');
        const weatherimg=result.list[i].weather[0].main;
        
        // it will store the data as today's temp
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
        // next 1st day
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
        //2nd day
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
        //3rd day
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
        //4th day
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
        //5th day
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
// addEventLister to search button
search_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const city =document.querySelector(".search_input");
    //calling the function to fetch the data
    getweather(city.value,e);

});

//make a function to get data of current location
async function getcurrentweather(lat,lon){
    // fetching the data from api
    const fetched=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=636c2583cd189bfd05ef259fa65bba19&units=metric`);

    const result= await fetched.json();
    console.log(result);
    // it faild to fetch the data will show alert message and return
    if(result.cod=="404"){
        alert(result.message);
        return;
    }
    //get the city from fetched data
    const city=result.name;
    // calling the function to get the data by city name.
    getweather(city);
}
//addEventListner to Current location button
current_location_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    //get the longitude and latitude of the current location
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const lat=position.coords.latitude;
            const lon=position.coords.longitude;
            //calling the function with latitude and logitude.
            getcurrentweather(lat,lon);
        },(error)=>{
            console.log(error.message);
        })
    }  
}
)