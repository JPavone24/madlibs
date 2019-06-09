// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyBnHGGAUMWJhkstP7yEHFlqFVi4VI_QCiE",
    databaseURL: "https://my-project-jessica-ccfa2.firebaseio.com",
  };
  
  firebase.initializeApp(config);
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-employee-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input

var array2 = ["#employee-name-input", "#employee-place-input", "#employee-color-input",
"#Adj2-input", "#Adj3-input", "#male-person-input", "#Occ1-input","#Occ2-input","#body-input",
"#verb-input"];



    var empName = $(array2[0]).val().trim();
    var empPlace = $(array2[1]).val().trim();
    var empColor = $(array2[2]).val().trim();
    var empAdj2 = $(array2[3]).val().trim();
    var empAdj3 = $(array2[4]).val().trim();
    var empMale = $(array2[5]).val().trim();
    var empOcc1 = $(array2[6]).val().trim();
    var empOcc2 = $(array2[7]).val().trim();
    var empBody = $(array2[8]).val().trim();
    var empVerb = $(array2[9]).val().trim();

   
    // Creates local "temporary" object for holding employee data
    var newEmp = {
      name: empName,
      place: empPlace,
      color: empColor,
      adj2: empAdj2,
      adj3: empAdj3,
      male: empMale,
      occ1: empOcc1,
      occ2: empOcc2,
      bod: empBody,
      verb: empVerb
 };
  
    // Uploads employee data to the database
    database.ref().push(newEmp);
  
    // Logs everything to console
    console.log(newEmp.name);

    // alert("Employee successfully added");
  
    // Clears all of the text-boxes

  

    function cleanUP (A){
        $(A).val(""); 
    }
    cleanUP(array2[0]);
    cleanUP(array2[1]);
    cleanUP(array2[2]);
    cleanUP(array2[3]);
    cleanUP(array2[4]);
    cleanUP(array2[5]);
    cleanUP(array2[6]);
    cleanUP(array2[7]);
    cleanUP(array2[8]);
    cleanUP(array2[9]);

  
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Store everything into a variable.
var empName = childSnapshot.val().name;
var empPlace = childSnapshot.val().place;
var empColor = childSnapshot.val().color;
var empAdj2  = childSnapshot.val().adj2;
var empAdj3 = childSnapshot.val().adj3;
var empMale = childSnapshot.val().male;
var empOcc1 = childSnapshot.val().occ1;
var empOcc2 = childSnapshot.val().occ2;
var empBody = childSnapshot.val().bod;
var empVerb = childSnapshot.val().verb;
 
  
    // Employee Info
    console.log(empName);

function wordMaker(x,y) {
    var newWord = $(x).append(
        $(x).text(y),);
        $(x).append(newWord);
    }

wordMaker("#my-name",empName);
wordMaker("#my-place",empPlace);
wordMaker("#my-color",empColor);
wordMaker("#my-adj2",empAdj2);
wordMaker("#my-adj3",empAdj3);
wordMaker("#my-male",empMale);
wordMaker("#my-occ1",empOcc1);
wordMaker("#my-occ2",empOcc2);
wordMaker("#my-body",empBody);
wordMaker("#my-verb",empVerb);


});

//=============================================


    
    

 
    

