// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class which extends the Vehicle class
class Motorbike extends Vehicle {
  
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Motorbike constructor with different specifications for the created motorbike
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number,topSpeed: number, wheels: Wheel[]) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // Create 2 wheels for the motorbike
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
  
  // Wheelie class that console logs that the vehicle is doing a wheelie
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // overrides the printDetails method of the Vehicle class and creates its own
  override printDetails() {
    // gets printDetails from the Vehicle class
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch tire with a brand of ${this.wheels[0].getTireBrand}`); 
    console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch tire with a brand of ${this.wheels[1].getTireBrand}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
