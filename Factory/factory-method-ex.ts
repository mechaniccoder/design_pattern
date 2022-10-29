class Dough {}
class Sauce {}
class ThinCrustDough extends Dough {}
class MarinaraSauce extends Sauce {}

interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
}

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }
}

abstract class Pizza {
  prepare(): void {
    console.log("Preparing");
  }

  bake(): void {
    console.log("Baking");
  }
}

class ClaimPizza extends Pizza {
  constructor(private pizzaIngredientFactory: PizzaIngredientFactory) {
    super();
  }

  prepare() {
    const dough = this.pizzaIngredientFactory.createDough();
    const sauce = this.pizzaIngredientFactory.createSauce();
  }
}

abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    return pizza;
  }

  protected abstract createPizza(type: string): Pizza;
}

class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    let pizza: Pizza | null = null;
    const ingredientFactory: PizzaIngredientFactory =
      new NYPizzaIngredientFactory();

    if (type === "claim") {
      pizza = new ClaimPizza(ingredientFactory);
    } else throw new Error("Unknown pizza type");

    return pizza;
  }
}

function client(pizzaType: string) {
  const pizzaStore: PizzaStore = new NYPizzaStore();
  pizzaStore.orderPizza(pizzaType);
}

export {};
