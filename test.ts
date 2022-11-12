abstract class PizzaStore {
  public orderPizza(type) {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    return pizza;
  }

  protected abstract createPizza(type): Pizza;
}

class CheesePizzaStore extends PizzaStore {
  createPizza(type) {
    if (type === "체다치즈") {
      return new CheddarCheesePizza();
    } else if (type === "모짜렐라치즈") {
      return new MozzarellaCheesePizza();
    } else {
      throw new Error("Unknown pizza type");
    }
  }
}

class PepperoniPizza extends PizzaStore {
  createPizza(type) {
    if (type === "페퍼로니") {
      return new PepperoniPizza();
    } else if (type === "어썸한 페퍼로니피자") {
      return new AssumePepperoniPizza();
    } else {
      throw new Error("Unknown pizza type");
    }
  }
}
