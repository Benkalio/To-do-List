//created a new module to hold the date in a function and access it through tod.js

// console.log(module); //logs our newly created date module

exports.getDate = function (){
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  //setting day to day of the month
  return today.toLocaleDateString("en-US", options);

}


//this tell the module to get the particular day of the week
exports.getDay = function (){
  const today = new Date();

  const options = {
    weekday: "long"
  };

  //setting day to day of the month
  return today.toLocaleDateString("en-US", options);

}
