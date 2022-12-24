/**
 * Adapter pattern은 클라이언트가 사용하는 인터페이스로 변환해주는 역할을 한다.
 */

interface Duck {
  quack();
  fly();
}

class MallarDuck implements Duck {
  quack() {
    console.log("quack");
  }
  fly() {
    console.log("flying");
  }
}

interface Turkey {
  gobble();
  fly();
}

class WildTurkey implements Turkey {
  gobble() {
    console.log("gobble");
  }
  fly() {
    console.log("flying a short distance");
  }
}

/**
 * Turkey adapter
 */
class TurkeyAdapter implements Duck {
  constructor(private turkey: Turkey) {}

  quack() {
    this.turkey.gobble();
  }

  fly() {
    this.turkey.fly();
  }
}

function DuckTestDrive() {
  const turkey: Turkey = new WildTurkey();
  const turkeyAdapter = new TurkeyAdapter(turkey);

  turkeyAdapter.quack();
  turkeyAdapter.fly();
}

DuckTestDrive();

class DuckAdapter implements Turkey {
  constructor(private duck: Duck) {}

  gobble() {
    this.duck.quack();
  }

  fly() {
    this.duck.fly();
  }
}

export {};
