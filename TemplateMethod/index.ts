/**
 * template method pattern
 * defines the skeleton of an algorithm in a method
 */
abstract class CaffeineBeverage {
  prepareRecipe() {
    this.boilwater();
    this.brew();
    this.pourInCup();
    if (this.doesCutsomerWantCondiments()) {
      this.addCondiments();
    }
  }

  abstract brew(): void;

  abstract addCondiments(): void;

  boilwater() {
    console.log("Boiling water");
  }

  pourInCup() {
    console.log("Pouring into cup");
  }

  doesCutsomerWantCondiments(): boolean {
    return true;
  }
}

class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log("Dripping Coffee through filter");
  }

  addCondiments(): void {
    console.log("Adding Sugar and Milk");
  }
}

class Tea extends CaffeineBeverage {
  brew(): void {
    console.log("Steeping the tea");
  }

  addCondiments(): void {
    console.log("Adding Lemon");
  }

  doesCutsomerWantCondiments(): boolean {
    return confirm("Do you want lemon?");
  }
}
