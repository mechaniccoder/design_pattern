/**
 * If other menu is added, we should create class
 */
abstract class Beverage {
  protected description: string = "No description";

  getDescription() {
    return this.description;
  }

  abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;
  public abstract getDescription(): string;
}

class Espresso extends Beverage {
  protected description: string = "espresso";

  cost(): number {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  description: string = "houseblend";

  cost(): number {
    return 0.89;
  }
}

class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + "mocha";
  }

  public cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ",soy";
  }

  public cost() {
    return this.beverage.cost() + 0.25;
  }
}

class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ",whip";
  }

  public cost() {
    return this.beverage.cost() + 0.3;
  }
}

class StarbuckCoffee {
  public static main() {
    let beverage: Beverage = new Espresso();
    beverage = new Mocha(beverage);
    beverage = new Mocha(beverage);
    beverage = new Whip(beverage);
    console.log(beverage.cost(), beverage.getDescription());

    let beverage2: Beverage = new HouseBlend();
    beverage2 = new Soy(beverage2);
    beverage2 = new Whip(beverage2);
    beverage2 = new Mocha(beverage2);
    console.log(beverage2.cost(), beverage.getDescription());
  }
}
