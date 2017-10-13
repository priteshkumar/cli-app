inquirer = require("inquirer");
weather = require("weather-js");
fsob = require("fs");

function Usersearch(){
	this.city = null;
	this.weather = null;

}


Usersearch.prototype.getWeather = function(){
	inquirer.prompt([
	 {
      name:"user",
      message:"what is your name?"
      },
      {
      	name:"location",
      	message:"what is the location?"
      }
	]).then(function(answer){
	//	  console.log(answer);
		  var user = answer.user;
		  var weatherloc = answer.location;
          
		  weather.find({ search: weatherloc, degreeType: "F" }, function(err, result) {

    // If there is insufficient data, notify the user.
    if (err) {
      console.log("Sorry we don't have enough data on that location! Try somewhere else.");
      return;
    }

    // Then print the Weather information and complete Address
    console.log("Current Temperature: " + result[0].current.temperature + " F");
    var timeinMs = Date.now();
    var date = new Date(timeinMs);
    var curdate = date.getDate();
    var curmonth = date.getMonth();
    var curyear = date.getFullYear();
   // console.log(curdate,curmonth+1,curyear);
    var weatherlog = user + ", " + weatherloc + ", " + (curmonth +1) + "-" + curdate + "-" + curyear + "  ";
    fsob.appendFile("data.txt",weatherlog,"UTF-8",(err) => {
    	if(err){
    		console.log("data logging failed");
    		return;
    	}
    	else{
    		console.log("data logging completed");
    	}
    });
    
    });

       
  });

};

//var usersearch = new Usersearch();
//usersearch.getWeather();


module.exports = Usersearch;

