class Key {
  private signature = Math.random()

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

class House {
  tenants: Person[] = [];

  constructor(public door: boolean, public key: Key) {
    this.door = door;
  }
  
  comeIn(person: Person) {
    if (this.door === true) {
      this.tenants.push(person);
      console.log('Welcome!');
    } else {
      console.log('You can not come in!');
    }
  }

  openDoor(key: Key) {
  this.key = key;
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door is open!');
    } else {
      console.log('You can not open the door!');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};