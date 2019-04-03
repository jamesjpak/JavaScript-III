/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding is the principle of when 'this' is utilized in the global scope, 
    'this' refers to the window Object (in the browser this is the directory for HTML).

* 2. Implicit binding is the principle that in the situation a function is called using dot notation, 'this' 
     refers to the object before the dot.  

* 3. When utilizing new binding, the 'new' keyword creates a new object, and '
     this' is assigned to the newly created object.

* 4. The principle of explicit binding is specifying 'this' to an object through the call or apply methods.  
     Any previous assignment to 'this' will be overridden and reassigned to the specified object.  


*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function theProof() {
    console.log(this);
}


// Principle 2
// code example for Implicit Binding

const theAnnouncement = function(obj) {
    obj.theAnnouncement = function() {
        console.log(`Off with the head of ${this.name}!`);
        console.log(this);
    };
};

const me = { name: 'James' };
theAnnouncement(me);

me.theAnnouncement();



// Principle 3
// code example for New Binding

function securityRoster(guard) {
    this.greeting = 'Salute';
    this.guard = guard;
    this.shout = function () {
        console.log(this.greeting + " " + this.guard + "!");
        
    };
}

 const Sergeant = new securityRoster('Pochenko');
 const Pochenko = new securityRoster('Sergeant');

// Sergeant.shout();
// Pochenko.shout();



// Principle 4
// code example for Explicit Binding

function securityRoster(guard) {
    this.greeting = 'Salute';
    this.guard = guard;
    this.shout = function () {
        console.log(this.greeting + " " + this.guard + "!");
        
    };
}

Sergeant.shout.call(Pochenko);
Pochenko.shout.apply(Sergeant);


