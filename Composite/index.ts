/**
 * Composite pattern is used where we need to treat a group of objects in similar way as a single object.
 */
interface MenuComponent {
  print(): void;
}

class Menu implements MenuComponent {
  constructor(private menuComponents: MenuComponent[]) {}

  print(): void {
    this.menuComponents.forEach((menuComponent) => {
      menuComponent.print();
    });
  }
}

class MenuItem implements MenuComponent {
  print() {}
}

export {};
