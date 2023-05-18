    const express = require('express');
const request = require("request");
const cors = require("cors")

const app = express();

app.use(cors());// put this after defining application

const API_KEY = "cc188eca457cf6bb4c4af04a4bccfff1"


app.get('/weather/:lat/:lon', (req, res) => {
  console.log("welcome to the root!");
  
  var lat = req.params.lat;
  var lon = req.params.lon;
  
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
  
	request(url, (error, response, body)=>{
		
		// Printing the error if occurred
		if(error) console.log(error)
	   
		// Printing status code
		console.log(response.statusCode);
		 
		
		// Printing body
		body = JSON.parse(body)
		let weatherStatus = body.weather[0].main
		res.send({"temperature" : body.main.temp, "weatherStatus" : weatherStatus})
		console.log(body.main.temp);
	});
  
});

app.get('/5day/:lat/:lon', (req, res) => {
	//res.send('Hello World!');
	console.log("welcome to the root!");
	
	var lat = req.params.lat;
	var lon = req.params.lon;
	var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
  
	
	  request(url, (error, response, body)=>{
		  
		  // Printing the error if occurred
		  if(error) console.log(error)
		 
		  // Printing status code
		  console.log(response.statusCode);
		   
		  // Printing body
		  body = JSON.parse(body)
		  const	week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		  let forcast = [];
		  let todaysDate = new Date().getDay(); //returns a number 0-6
		  for (let i = 0; i<5; i++){
			let tempSum = 0;//sm of temps for the day
			let count = 0;//number of datapoints for a day
			for(let dataPoint of body.list){
				let date = new Date( dataPoint.dt * 1000)//converts seconds to miliseconds and reates date
				if (date.getDay() === todaysDate){
					count++;
					tempSum += dataPoint.main.temp;
				}
			}
			const day = {"dayName": week[todaysDate], "temp": Math.round(tempSum / count) } // create our JSON datapoint
			forcast.push(day)
			todaysDate = (todaysDate + 1) % 7

		  }
			res.send(forcast)

	  });
	
  });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});