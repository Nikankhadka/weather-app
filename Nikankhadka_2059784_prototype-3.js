window.addEventListener("load", () => { //simple load events as soon as page loads 


    //get data cached in local storage(browser api)
    var localdata = JSON.parse(localStorage.getItem("localstrg"))




    //check local data not null and if it is fresh(2 min) just display this data
    if ((localdata != null) && parseInt((localdata.stored_when) + 120000) > Date.now()) {
        console.log(localdata, "displaying  data within 120s from local storage");


        //display localdata cached in local storage onto html page
        document.getElementById("city").innerHTML = localdata.city + ",GB";
        document.getElementById("date").innerHTML = localdata.date;
        document.getElementById("temperature").innerHTML = "T:" + localdata.temperature + "°c";
        document.getElementById("high").innerHTML = "H:" + localdata.maxtemp + "°c";
        document.getElementById("low").innerHTML = "L:" + localdata.mintemp + "°c";
        document.getElementById("win").innerHTML = "Windegree:" + localdata.winddegree + "°";
        document.getElementById("speed").innerHTML = "speed:" + localdata.windspeed + "m/s";
        document.getElementById("ticon").src = i_con = `https://openweathermap.org/img/wn/${localdata.icon}@2x.png`
        document.getElementById("desc").innerHTML = localdata.weatherdesc;
        document.getElementById("sunset").innerHTML = "sunset:" + localdata.sunset;
        document.getElementById("sunrise").innerHTML = ("sunrise:" + localdata.sunrise);
        document.getElementById("humidity").innerHTML = "Hdt:" + localdata.humidity;
        document.getElementById("pressure").innerHTML = "Pr:" + localdata.pressure;
        document.getElementById("feel").innerHTML = "Feels_like:" + localdata.feels_like;
    } else {
        //fetch fresh new data from api display and cache data in local storage



        //fetch data from phppage(local api) use promise to resolve and retrun response after converting into json, call back to pass into data
        fetch(
            "https://20.248.171.112/pro3/my-api3.php",
        ).then(function(response) { return response.json() })

        .then(function(data)

            { //all of the code exected below are inside function


                console.log(data, "fetching fresh data from local api")
                    //display jsondata in paramter(data(also object)) in console
                document.getElementById("city").innerHTML = data.city + ",GB"; //json data (object.key ) is printed in html page

                newdate = new Date((parseInt(data.date) + parseInt(data.time_zone)) * 1000).toDateString(); //variable to convert date into actual date 
                document.getElementById("date").innerHTML = newdate;
                document.getElementById("temperature").innerHTML = "T:" + data.weather_temperature + "°c";
                document.getElementById("high").innerHTML = "H:" + data.max_temp + "°c";
                document.getElementById("low").innerHTML = "L:" + data.min_temp + "°c";
                document.getElementById("win").innerHTML = "Windegree:" + data.wind_degree + "°";
                document.getElementById("speed").innerHTML = "speed:" + data.weather_wind + "m/s";
                document.getElementById("ticon").src = i_con = `https://openweathermap.org/img/wn/${data.icon}@2x.png` //get icon from the api 
                document.getElementById("desc").innerHTML = data.weather_description;


                //Get time for sunset  converting the timezone into normal time 

                sunset = new Date((parseInt(data.sunset) + parseInt(data.time_zone)) * 1000).toUTCString() //here a variable is assigned to convert into sunset 
                sunset_time = sunset.slice(17, 25); // slice is used to slice the data that is presented in the html

                document.getElementById("sunset").innerHTML = "sunset:" + sunset_time;



                //get time for sunrise by converting the timezone provided in the weather api

                sunrise_time = new Date((parseInt(data.sunrise) + parseInt(data.time_zone)) * 1000).toUTCString(); //same things as the above sunset time 
                sunrise_time = sunrise_time.slice(17, 25);
                document.getElementById("sunrise").innerHTML = ("sunrise:" + sunrise_time);

                document.getElementById("humidity").innerHTML = "Hdt:" + data.humidity;
                document.getElementById("pressure").innerHTML = "Pr:" + data.pressure;
                document.getElementById("feel").innerHTML = "Feels_like:" + data.feels_like;






                //object to store data fetched from php(local api)

                var apidata = {
                    "city": data.city,
                    "temperature": data.weather_temperature,
                    "icon": data.icon,
                    "feels_like": data.feels_like,
                    "mintemp": data.min_temp, //these value are fetched from local api
                    "maxtemp": data.max_temp,
                    "pressure": data.pressure,
                    "humidity": data.humidity,
                    "weatherdesc": data.weather_description,
                    "windspeed": data.weather_wind,
                    "winddegree": data.wind_degree,
                    "date": newdate, //while value which needs conversion are accesed from varible which stores these converted time
                    "sunrise": sunrise_time,
                    "sunset": sunset_time,
                    "stored_when": Date.now(),
                    "Timezone": data.time_zone,

                }

                //caching the object(key:value) into local storage 
                localStorage.setItem("localstrg", JSON.stringify(apidata));
                //key(name)                   //value(which is above object)


            })

        // catch reject(eror) while fetching from api
        .catch(err => {
            // Display errors in console
            console.log(err);
        });
    }
});







///nikankhadka nikan khadka nikan khadka nikan khadka nikan khadka nikan khadka nikan khadka nikan khadka nikan khadka nikan khadka nikan khadka nikan khadka nikan khadka