// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extendd the Vehicle class implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declares the properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  // Initial Constructor for the truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {
    // Initializes the Vehicle Class
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
    this.towingCapacity = towingCapacity;
  }

  // Implements the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Gets the make an model of the vehicle and stores them in variables
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;

    // Checks if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${vehicleMake}, ${vehicleModel} is being towed`);
    } else {
      console.log(`The ${vehicleMake}, ${vehicleModel} is too heavy to be towed`);
    }
  }
  // overrides the printDetails method of the Vehicle Class and creates its own
  override printDetails(): void {
    
    super.printDetails();

    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch tire with a brand of ${this.wheels[0].getTireBrand}`); 
    console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch tire with a brand of ${this.wheels[1].getTireBrand}`);
    console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch tire with a brand of ${this.wheels[2].getTireBrand}`);
    console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch tire with a brand of ${this.wheels[3].getTireBrand}`);
  }
}

// Export the Truck class as the default export
export default Truck;
