interface Pizza {
  prepare(): void;
  bake(): void;
}

abstract class PizzaStore {
  public orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    return pizza;
  }

  protected abstract createPizza(type: string): Pizza;
}

class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === "cheese") {
      return new NYStyleCheesePizza();
    } else if (type === "pepperoni") {
      return new NYStylePepperoniPizza();
    } else {
      throw new Error("Unknown pizza type");
    }
  }
}

class NYStyleCheesePizza implements Pizza {
  prepare() {
    console.log("Preparing NY style cheese pizza");
  }
  bake() {
    console.log("Baking NY style cheese pizza");
  }
}

class NYStylePepperoniPizza implements Pizza {
  prepare() {
    console.log("Preparing NY style pepperoni pizza");
  }
  bake() {
    console.log("Baking NY style pepperoni pizza");
  }
}

class GangnamPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === "cheese") {
      return new GangnamStyleCheesePizza();
    } else if (type === "pepperoni") {
      return new GangnamStylePepperoniPizza();
    } else {
      throw new Error("Unknown pizza type");
    }
  }
}

class GangnamStyleCheesePizza implements Pizza {
  prepare() {
    console.log("Preparing Gangnam style cheese pizza");
  }
  bake() {
    console.log("Baking Gangnam style cheese pizza");
  }
}

class GangnamStylePepperoniPizza implements Pizza {
  prepare() {
    console.log("Preparing Gangnam style pepperoni pizza");
  }
  bake() {
    console.log("Baking Gangnam style pepperoni pizza");
  }
}

function client(pizzaType: string) {
  const nyStore = new NYPizzaStore();
  nyStore.orderPizza(pizzaType);

  const gangnamStore = new GangnamPizzaStore();
  gangnamStore.orderPizza(pizzaType);
}

export {};
