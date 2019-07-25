/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: when you "console.log (this)" in the global scope the value of "this" will be the window/console object.
* 2. Implicit Binding: whatever is left of the dot "." is what "this" will be the context of.
* 3. New Binding: returns a new bound function.
* 4. Explicit Binding: this overrides what the "this" keyword points to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function saySound(sound) {
    console.log(this.sound);
    return sound;
  }
  saySound("Skkrrrt Skkrrrt!");


// Principle 2

// code example for Implicit Binding

  const wassup = {
    greeting: 'Wassup',
    sayWassup: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  wassup.sayWassup('Hector');

//This is another example for an implicit Binding

  const teachingSoftwareEngineer = obj => {
    obj.convo = function() {
      console.log(`Can i really be a Software Engineer? ${this.talk}`);
      console.log(this);
    };
  };
  const me = { talk: 'Hector' };
  const you = { talk: '' };
  teachingSoftwareEngineer(me);
  teachingSoftwareEngineer(you);
  
  // Invoke Methods on our objects
  me.convo();
  you.convo();


// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      // console.log(this);
    };
  }
  
  const winner = new CordialPerson('Winner');
  const Loser = new CordialPerson('Loser');
  
  Loser.speak();
  winner.speak();

// Principle 4

// code example for Explicit Binding

const firstPlace = new CordialPerson('Winner');
const secondPlace = new CordialPerson('Loser');

firstPlace.speak.call(winner);
secondPlace.speak.apply(Loser);

firstPlace.speak();
secondPlace.speak();
