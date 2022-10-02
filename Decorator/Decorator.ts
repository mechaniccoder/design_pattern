/**
 * If other menu is added, we should create class
 */
abstract class Beverage {
  constructor(private description: string) {}

  getDescription() {
    return this.description;
  }

  abstract cost(): number;
}

class HouseBlend extends Beverage {
  constructor(description: string) {
    super(description);
  }

  cost(): number {
    return 10;
  }
}

class DarkRost extends Beverage {
  constructor(description: string) {
    super(description);
  }

  cost(): number {
    return 20;
  }
}
