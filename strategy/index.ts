class Duck {
  constructor(
    private flyBehavior: FlyBehavior,
    private quackBehavior: QuackBehavior
  ) {}

  fly() {
    this.flyBehavior.fly();
  }

  quack() {
    this.quackBehavior.quack();
  }
}

interface FlyBehavior {
  fly(): void;
}

interface QuackBehavior {
  quack(): void;
}

class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("fly with wings");
  }
}

class NoFly implements FlyBehavior {
  fly(): void {
    console.log("no fly");
  }
}

class Quack implements QuackBehavior {
  quack(): void {
    console.log("quack");
  }
}

class Squack implements QuackBehavior {
  quack(): void {
    console.log("squack");
  }
}

function client() {
  const duck1 = new Duck(new FlyWithWings(), new Squack());
  const duck2 = new Duck(new NoFly(), new Quack());

  duck1.fly();
  duck1.quack();
  duck2.fly();
  duck2.quack();
}

client();
