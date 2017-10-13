inquirer = require("inquirer");
Weatheradmin = require("./admin");



function startApp(){
   inquirer.prompt([{
   	name:"useroption",
   	type:"list",
   	choices:["newsearch","searchlog"],
   	message:"Select option"
   }]).then(function(answers){
   	   Weatheradmin = new Weatheradmin();
       if(answers.useroption === "newsearch"){
       	 // console.log("newusersearch");
       	  Weatheradmin.newUsersearch();
      
       }
       else if(answers.useroption === "searchlog"){
       	  //console.log("getweatherlog");
       	  Weatheradmin.getWeatherlog();

       }
       
   });

}



startApp();
