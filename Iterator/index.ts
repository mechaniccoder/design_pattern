/**
 * Iterator pattern does not expose the underlying implementation
 */

interface Iterator {
  hasNext(): boolean;
  next(): any;
}

class DinerMenuIterator implements Iterator {
  private position = 0;

  constructor(private items: any[]) {}

  public next() {
    const menuItem = this.items[this.position];
    this.position += 1;
    return menuItem;
  }

  public hasNext() {
    if (this.position >= this.items.length || !this.items[this.position]) {
      return false;
    } else {
      return true;
    }
  }
}

export {};
