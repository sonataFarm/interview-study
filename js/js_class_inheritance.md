# JavaScript class inheritance

JavaScript uses "prototypal" inheritance, where each "class" is in reality an object (a constructor function) with a `prototype` property.

```JavaScript
function Equine(name) {
    this.name = name;
}

Equine.prototype = {
    eat: function() {
        console.log(`${this.name} says "Mmmm...hay..."`)
    }
};

const jack = new Equine('Jack');

jack.eat();
// => Jack says "Mmm...hay..."
```

Class inheritance is represented via a "prototype chain", where an object's prototype itself has a prototype. A child prototype's parent prototype is referenced in the child prototype's `__proto__` property. The final prototype in the chain is `Object`'s prototype.

```JavaScript
function Horse(name) {
    this.name = name;
}

Horse.prototype = {
    speak: function() {
        console.log(`${this.name} says "Neigggghhh!"`)
    }
};

Horse.prototype.__proto__ = Equine.prototype;

const bonny = new Horse('Bonny');

bonny.speak();
// => Bonny says "Neigggghhh!"

bonny.eat();
// => Bonny eats hay...

bonny.gallop();
// => Uncaught TypeError: jack.gallop is not a function
```

Each time a property (like `speak`, `eat` and `gallop`) is accessed on `bonny`, JavaScript initiates a lookup process that traverses up the prototype chain, terminating the lookup when it either finds the first property that matches, or reaches the end of the chain.

When Bonny speaks, JavaScript finds the `speak` property on `Horse.prototype`, and invokes it.

When Bonny eats, JavaScript fails to find an `eat` property on `Horse.prototype`. It traverses up the prototype chain via `Horse.prototype.__proto__`, which happens to be `Equine.prototype`. JavaScript finds the `eat` property there, and invokes it.

When bonny gallops, JavaScript fails to find a `gallop` property on either `Horse.prototype` or `Equine.prototype`. It traverses up the prototype chain via `Equine.prototype.__proto__`, which happens to be `Object.prototype`. JavaScript fails to a `gallop` property defined there, and since `Object.prototype` is the last object in the prototype chain, the lookup process ends. `bonny.gallop` evaluates to `undefined`, and invoking `undefined()` throws an error.  

### Object.create

Creates a new object whose prototype is the first argument supplied:

```JavaScript
  const person = {
    celebrateBirthday: function() {
      console.log(`I'm ${this.age} years old today!`);
    }
  }

  const nate = Object.create(person);

  nate.age = 33;

  nate.celebrateBirthday();
  // => I'm 33 years old today!
```
