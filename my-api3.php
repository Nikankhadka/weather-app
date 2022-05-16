<?php                                                     //nikankhadka_2059784
//query to connect to databse                            
$mysqli=mysqli_connect("localhost","root","","db2059784");  

// query to get data from table which has been stored within time of 1 hr 
$sql = "select * from weather where city='Bristol' and weather_when >=date_sub(now(),interval 1 hour) order by weather_when desc limit 1;";

//here the above both querys are executed and data be null or data is stored in result
$result = mysqli_query($mysqli,$sql);

//check if result if null (it its is then )
if (mysqli_num_rows($result)==0) { 

//php connects to weather api
$url = 'https://api.openweathermap.org/data/2.5/weather?q=    Bristol, GB &units=metric&appid=1dc456c0e1625fb8d3ec4d9a4dd0402e';

//php gets weather data from weather api
$data = file_get_contents($url);

//weather data is simply converted into json 
$json = json_decode($data, true);

//here the converted data is accesed and stored in each variable respectively
$city = $json['name']; 
$date=$json['dt'];
$weather_temperature= $json['main']['temp'];
$max_temp=$json['main']['temp_max'];
$min_temp=$json['main']['temp_min'];
$icon=$json['weather']['0']['icon'];
$weather_description = $json['weather'][0]['description'];
$wind_degree=$json['wind']['deg'];
$weather_wind = $json['wind']['speed'];
$humidity=$json['main']['humidity'];
$pressure=$json['main']['pressure'];
$feels_like=$json['main']['feels_like'];
$sunrise=$json['sys']['sunrise'];
$sunset=$json['sys']['sunset'];
date_default_timezone_set('Asia/KATHMANDU');
$weather_when = date("y-m-d H:i:s");
$time_zone=$json["timezone"];

//query to insert above specific weather data into table(according to index)
$sql = "INSERT INTO weather VALUES('{$city}', '{$date}',{$weather_temperature}, {$max_temp}, {$min_temp} ,'{$icon}', '{$weather_description}' ,{$wind_degree} ,{$weather_wind},
                                         {$humidity}, {$pressure}, {$feels_like}, {$sunrise}, {$sunset} ,'{$weather_when}',{$time_zone});";


//execute query while also  checking for error
    if (!$mysqli -> query($sql)) {
    echo("<h4>SQL error description: " . $mysqli -> error . "</h4>");
}

 
}
//query to select data from table stored within given time interval
$sql = "select * from weather where city='Bristol' and weather_when >=date_sub(now(),interval 1 hour) order by weather_when desc limit 1;";
// Execute query and store data from table into variable 
$result = $mysqli -> query($sql);
// convert data to associative array and store
$row = $result -> fetch_assoc();   
print json_encode($row);  //print row after converting into json string in php page(which is local api) 



// Free result set and close connection
$result -> free_result();
$mysqli -> close();
?>


