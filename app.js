/*
Build all of your functions for displaying and gathering information below (GUI).
*/
 // app is the function called to start the entire application
 function app(people) {
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();

  switch (searchType) {
    case 'yes':
      // TO DO
      let nameFound = searchByName(data);
      mainMenu(nameFound, data);
      break;
    case 'no':
      searchByTraits(people);
      break;
    default:
      alert("Wrong! Please try again, following the instructions dummy. :)");
      app(people); // restart app
      break;
  }
}

function searchByTraits(people) {
  let filteredPeople = [];
  do {

    let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation', 'multiple'.");
    let searchInput;

    switch (userSearchChoice) {
      case "height":
        filteredPeople = searchByHeight(people);
        break;
      case "weight":
        filteredPeople = searchByWeight(people);
        break;
      case "eye color":
        filteredPeople = searchByEyeColor(people);
        break;
      case "gender":
        filteredPeople = searchByGender(people);
        break;
      case "age":
        filteredPeople = searchByAge(people);
        break;
      case "occupation":
        filteredPeople = searchByOccupation(people);
        break;
      case "multiple":

        alert("Answer 'yes' or 'no' for the following questions");
        let height = promptFor("Search by height? ('yes' or 'no')", yesNo);
        let weight = promptFor("Search by weight? ('yes' or 'no')", yesNo);
        let eyeColor = promptFor("Search by eye color? ('yes' or 'no')", yesNo);
        let gender = promptFor("Search by gender? ('yes' or 'no')", yesNo);
        let age = promptFor("Search by age? ('yes' or 'no')", yesNo);
        let occcupation = promptFor("Search by occcupation? ('yes' or 'no')", yesNo);
        let counter = 0;
        if (height === "yes") {
          filteredPeople = searchByHeight(people);
          counter++;
        }
        if (weight === "yes") {
          if (counter > 1) {
            filteredPeople = searchByWeight(filteredPeople);
          }
          else {
            filteredPeople = searchByWeight(people);
          }
          counter++;
        }
        if (eyeColor === "yes") {
          if (counter > 1) {
            filteredPeople = searchByEyeColor(filteredPeople);
          }
          else {
            filteredPeople = searchByEyeColor(people);
          }
          counter++;
        }
        if (gender === "yes") {
          if (counter > 1) {
            filteredPeople = searchByGender(filteredPeople);
          }
          else {
            filteredPeople = searchByGender(people);
          }
          counter++;
        }
        if (age === "yes") {
          if (counter > 1) {
            filteredPeople = searchByAge(filteredPeople);
          }
          else {
            filteredPeople = searchByAge(people);
          }
          counter++;
        }
        if (occcupation === "yes") {
          if (counter > 1) {
            filteredPeople = searchByOccupation(filteredPeople);
          }
          else {
            filteredPeople = searchByOccupation(people);
          }
          counter++;
        }
        if (counter < 1) {
          alert("You did not select any trait to search for! Please try again.");
          searchByTraits(people);
          break;
        }

        break;
      default:
        alert("You entered an invalid search type! Please try again.");
        searchByTraits(people);
        break;
    }

    if (filteredPeople.length > 1) {
      alert("There is more than one person who fits this criteria. Please narrow further");
      people = filteredPeople;
    }

  } while (filteredPeople.length > 1);

  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);

}



function searchByEyeColor(people) {
  let newArray = [];
  do {

    let userInputEyeColor = prompt("What is the person's eye color?");

    newArray = people.filter(function (el) {
      if (el.eyeColor === userInputEyeColor) {
        return true;
      }
      else {
        return false;
      }
    });

    if (newArray.length < 1) {
      alert("No results. Make sure your input is valid! Please try again.");
    }

  } while (newArray.length < 1);

  return newArray;
}

   function searchByGender(people){
    let userInputGender = prompt("what is the Gender of the person?");
     let newArray = people.filter(function (el) {
      if(el.gender == userInputGender) {
        return true && people.filter(searchByName(el))
        if(searchByName==true){
         }
      }
      else{
        return false && people.filter(searchByName(el))
          return true;
      }
      });
    
    return newArray;
  }
  function searchByHeight(people){
    let userInputHeight = prompt("what is the height of the person?");
     let newArray = people.filter(function (el) {
      if(el.height == userInputHeight) {
        return true;
      }
      // return true if el.weight matches userInputHeight
    });
     return newArray;
  }
   function searchByDob(people){
    let userInputDob = prompt("what is the dob of the person?");
    let newArray = people.filter(function (el) {
      if(el.dob == userInputDob) {
        return true ;
      }
      // return true if el.weight matches userInputHeight
    });
     return newArray;
  }
  function searchByOccupation(people) {
    let newArray = [];
    do {
      let userInputOccupation = prompt("What is the person's occupation?");
  
      newArray = people.filter(function (el) {
        if (el.occupation === userInputOccupation) {
          return true;
        }
      });
  
      if (newArray.length < 1) {
        alert("No results. Make sure your input is valid! Please try again.");
      }
  
    } while (newArray.length < 1);
  
    return newArray;
  }
  
  function searchByWeight(people) {
    let newArray = [];
    do {
      let userInputWeight = prompt("How much does the person weigh?");
  
      newArray = people.filter(function (el) {
        if (el.weight == userInputWeight) {
          return true;
        }
      });
  
      if (newArray.length < 1) {
        alert("No results. Make sure your input is valid! Please try again.");
      }
  
    } while (newArray.length < 1);
  
    return newArray;
  }
   // Menu function to call once you find who you are looking for
  function mainMenu(person, people){
     /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
     if(!person){
      alert("Could not find that individual.");
      return app(people); // restart
    }
     var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
     switch(displayOption){
      case "info":
      // TODO: get person's info
      break;
      case "family":
      // TODO: get person's family
      break;
      case "descendants":
      // TODO: get person's descendants
      break;
      case "restart":
      app(people); // restart
      break;
      case "quit":
      return; // stop execution
      default:
      return mainMenu(person, people); // ask again
    }
  }
   function searchByName(people){
    var firstName = promptFor("What is the person's first name?", chars);
    var lastName = promptFor("What is the person's last name?", chars);
     // TODO: find the person using the name they entered
   }
   // alerts a list of people
  function displayPeople(people){
    alert(people.map(function(person){
      return person.firstName + " " + person.lastName;
    }).join("\n"));
  }
   function displayPerson(person){
    // print all of the information about a person:
    // height, weight, age, name, occupation, eye color.
    var personInfo = "First Name: " + person.firstName + "\n";
    personInfo += "Last Name: " + person.lastName + "\n";
    // TODO: finish getting the rest of the information to display
    alert(personInfo);
  }
   // function that prompts and validates user input
  function promptFor(question, callback){
    do{
      var response = prompt(question).trim();
    } while(!response || !callback(response));
    return response;
  }
   // helper function to pass into promptFor to validate yes/no answers
  function yesNo(input){
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
  }
   // helper function to pass in as default promptFor validation
  function chars(input){
    return true; // default validation only
  } 