/*******************************************************************
* pet_registry.js
* John Dean
*
* This file implements a Pet class hierarchy.
*******************************************************************/

class Pet {
  constructor() {
    this.name = name;
    this.sound = sound;
  } // end constructor
  
  //****************************************************************
  
  // Return confirmation message data
  
  confirm() {
    return this.name + " has been successfully registered as a " +
      this.constructor.name.toLowerCase() + " - " + this.sound;
  } // end confirm
} // end class Pet

//******************************************************************

class Dog extends Pet {
  constructor(name, trick) {
    super(name, "Woof! Woof!");
    this.trick = trick;
  } // end constructor
  
  //****************************************************************
  
  // Return confirmation message data
  
  confirm () {
    return super.confirm() +
      "<br>Favorite trick: " + this.trick;
  } // end confirm
} // end class Dog

//******************************************************************

class Hedgehog extends Pet {
  constructor(name) {
    super(name, "snuffle, click, purr");
  } // end constructor
} // end class Hedgehog
