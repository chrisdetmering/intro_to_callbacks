
Function.prototype.myBind = function (context) {

  return () => this.apply(context);
}

Function.prototype.myBind = function(ctx, ...bindArgs) { 
  return (...callArgs) => { 
    return this.apply(ctx, bindArgs.concat(callArgs));
  }; 
}; 



class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"