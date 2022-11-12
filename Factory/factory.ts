function orderPizza(type: string) {
  const pizza = createPizza(type);
  pizza.prepare();
  pizza.bake();
}

function orderPizza(type: string) {
  let pizza = null;

  if (type === "치즈") {
    pizza = new CheesePizza();
  } else if ("페퍼로니") {
    pizze = new PepperoniPizza();
  }

  pizza.prepare();
  pizza.bake();
}

interface Pizza {
  prepare(): void;
  bake(): void;
}

class CheesePizza implements Pizza {
  prepare() {
    console.log("Preparing cheese pizza");
  }
  bake() {
    console.log("Baking cheese pizza");
  }
}

class PepperoniPizza implements Pizza {
  prepare() {
    console.log("Preparing pepperoni pizza");
  }
  bake() {
    console.log("Baking pepperoni pizza");
  }
}

function createPizza(type: string) {
  if (type === "cheese") {
    return new CheesePizza();
  } else if (type === "pepperoni") {
    return new PepperoniPizza();
  } else {
    throw new Error("Unknown pizza type");
  }
}

export {};
