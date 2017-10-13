fsob = require("fs");
Usersearch = require("./usersearch");


function Weatheradmin(){
	this.newUsersearch = function(){
		var usersearch = new Usersearch();
		usersearch.getWeather();
	};

	this.getWeatherlog = function(){
      fsob.readFile("data.txt","UTF-8",(err,data) =>{
      	if(err){
      		return;
      	}
 //     console.log(data);
      	var newData = data.split("  ");
      	newData.pop();
      	console.log(newData);
      });		
	};
}


//var admin = new Weatheradmin();
//admin.newUsersearch();
//admin.getWeatherlog();

module.exports = Weatheradmin;