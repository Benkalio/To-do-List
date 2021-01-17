const express = require("express");

const bodyParser = require("body-parser");

const app = express(); //app is generated using express

const date = require(__dirname + "/date.js"); //this requires our newly created module in the directory name date.js

const items = [];

const workItems = [];

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

// Tells app to use ejs - Embedded JavaScript Template
app.set("view engine", "ejs");

// HOME ROUTE
app.get("/", function(req, res) {

  const day = date.getDate();

  //res looks inside of the folder for a file called list.ejs inside the folder view and renders it if its a weekend
  // this is a JavaScript object rendered with a variable called kindOfDay with a value called day
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});
app.post("/", function(req, res) {
  //App.post checks to see if the items comes from the list redirects to the work route and if it doesn't then it redirects to the home route
  const item = req.body.newItem;

  //Creating a if loop that pushes a new item if it is work to the work list and others to the home route
  if (req.body.list === "Work") {

    workItems.push(item);

    res.redirect("/work");

  } else {

    items.push(item);

    res.redirect("/");      // THIS REDIRECTS TO THE HOME ROUTE ABOUT AND ADDS A NEW LIST ITEM IN THE RES.RENDER

  }

});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});



app.listen(3000, function() {
  console.log("App is running on 3000");
});




// Using Arrays to select the day of the week
// var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
// var day = weekday[currentDay];


//switch statement to print the day of the week
// switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     console.log("Error: Current day is equal to: " + currentDay);
// }


// if (toDate === 6 || toDate === 0) {
//   day = "Weekend";
// } else {
//   day = "Weekday";
// }
