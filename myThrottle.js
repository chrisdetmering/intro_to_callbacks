
class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();

Function.prototype.myThrottle = function (interval) {
  let tooSoon = false;

  return () => {
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(() => { tooSoon = false }, interval)
      this()
    }
  }
}


neuron.fire = neuron.fire.myThrottle(2000);

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// interval
// // This time, if our Function#myThrottle worked correctly,
// // the Neuron#fire function should only be able to execute
// // every 500ms, even though we're still trying to invoke it
// // every 10ms!

// // If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire() {
//     console.log("Firing!");
//   }