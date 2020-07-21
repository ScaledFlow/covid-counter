console.log("server.js")

// Import MySQL connection.
var connection = require("./config/connection.js");


// NPM 
const finnhub = require("finnhub");
const request = require("request");
const price = require('crypto-price')



// Initialize Finnhub
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "brvkn6nrh5rd378r3l5g"; // Replace this
const finnhubClient = new finnhub.DefaultApi();

function intervalFunc(arg) {
    console.log(`arg was => ${arg}`);
// Covid Status
request(
    "https://finnhub.io/api/v1/covid19/us?token=brvkn6nrh5rd378r3l5g",
    { json: true },
    (err, res, body) => {
      if (err) {
        console.log("covid error");
        return console.log(err);
      }
      // console.log(body.length);
  
      // Add up total deaths for the day
      let deaths = 0;
      for (i = 0; i < body.length; i++) {
        deaths = deaths + body[i].death;
      }
      // console.log("total deaths inner = " + deaths);
      createCovidCase(deaths);
      // console.log(body[0]);
    }
  );
}


  function createCovidCase(count) {

    console.log("Insert covid death count...\n");
   
    var datetime = new Date();
    console.log("date time value = " + datetime);

    var query = connection.query(
      "INSERT INTO covid_deaths_us_ter SET ?",
      {
        created_at: datetime,
        covide_death_us_ter: count
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " covid data inserted!\n");
      }
    );
      // logs the actual query being run
  console.log(query.sql);
}
// Log total covid death by the hour
   setInterval(intervalFunc, 3600000, "test");
// setInterval(intervalFunc, 6000, "test");
// createCovidCase(500000);


// var datetime = new Date();
// console.log(datetime.toISOString().slice(0,10));