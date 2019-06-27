class Vehicule {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicule {
  constructor(public wheel: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('vroom');
  }
}

const vehicule = new Vehicule('orange');
console.log(vehicule.color);

const car = new Car(4, 'red');
console.log(car.wheel, car.color);
