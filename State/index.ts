class GumballMachine {
  private _noQuaterState: State;
  public get noQuaterState(): State {
    return this._noQuaterState;
  }
  public set noQuaterState(value: State) {
    this._noQuaterState = value;
  }
  private _hasQuaterState: State;
  public get hasQuaterState(): State {
    return this._hasQuaterState;
  }
  public set hasQuaterState(value: State) {
    this._hasQuaterState = value;
  }
  private _soldState: State;
  public get soldState(): State {
    return this._soldState;
  }
  public set soldState(value: State) {
    this._soldState = value;
  }
  private _soldOutState: State;
  public get soldOutState(): State {
    return this._soldOutState;
  }
  public set soldOutState(value: State) {
    this._soldOutState = value;
  }

  private _winnerState: State;
  public getWinnerState(): State {
    return this._winnerState;
  }

  private state: State;
  private _count = 0;

  public get count() {
    return this._count;
  }
  public set count(value) {
    this._count = value;
  }

  constructor(count: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuaterState = new NoQuaterState(this);
    this.hasQuaterState = new HasQuaterState(this);
    this.soldState = new SoldState(this);

    this.count = count;
    if (this.count > 0) {
      this.state = this.hasQuaterState;
    } else {
      this.state = this.soldOutState;
    }

    this.state = this.soldOutState;
  }

  public insertQuater(): void {
    this.state.insertQuater();
  }

  public ejectQuater(): void {
    this.state.ejectQuater();
  }

  public turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  public setState(state: State): void {
    this.state = state;
  }

  public releaseBall(): void {
    if (this.count > 0) {
      this.count--;
    }
  }
}

interface State {
  insertQuater(): void;
  ejectQuater(): void;
  turnCrank(): void;
  dispense(): void;
}

class NoQuaterState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuater(): void {
    console.log("동전을 넣으셨습니다.");
    this.gumballMachine.setState(this.gumballMachine.hasQuaterState);
  }
  ejectQuater(): void {
    console.log("동전을 넣어주세요.");
  }
  turnCrank(): void {
    console.log("동전을 넣어주세요.");
  }
  dispense(): void {
    console.log("동전을 넣어주세요.");
  }
}

class HasQuaterState implements State {
  private randomWinner = Math.floor(Math.random() * 10);

  constructor(private gumballMachine: GumballMachine) {}

  insertQuater(): void {
    console.log("동전은 한 개만 넣어주세요.");
  }
  ejectQuater(): void {
    console.log("동전이 반환됩니다.");
    this.gumballMachine.setState(this.gumballMachine.noQuaterState);
  }
  turnCrank(): void {
    console.log("손잡이를 돌리셨습니다.");
    if (this.randomWinner === 0 && this.gumballMachine.count > 1) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.soldState);
    }
  }
  dispense(): void {
    console.log("알맹이가 나갑니다.");
  }
}

class SoldState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuater(): void {
    console.log("잠깐만 기다려 주세요. 알맹이가 나가고 있습니다.");
  }
  ejectQuater(): void {
    console.log("이미 알맹이를 뽑으셨습니다.");
  }
  turnCrank(): void {
    console.log("손잡이는 한 번만 돌려주세요.");
  }
  dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.count > 0) {
      this.gumballMachine.setState(this.gumballMachine.noQuaterState);
    } else {
      this.gumballMachine.setState(this.gumballMachine.soldOutState);
    }
    console.log("알맹이가 나갑니다.");
  }
}

class SoldOutState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuater(): void {
    console.log("매진되었습니다. 다음 기회에 이용해주세요.");
  }
  ejectQuater(): void {
    console.log("매진되었습니다. 다음 기회에 이용해주세요.");
  }
  turnCrank(): void {
    console.log("매진되었습니다. 다음 기회에 이용해주세요.");
  }
  dispense(): void {
    console.log("매진되었습니다. 다음 기회에 이용해주세요.");
  }
}

class WinnerState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuater(): void {
    console.log("잠깐만 기다려 주세요. 알맹이가 나가고 있습니다.");
  }
  ejectQuater(): void {
    console.log("이미 알맹이를 뽑으셨습니다.");
  }
  turnCrank(): void {
    console.log("손잡이는 한 번만 돌려주세요.");
  }
  dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.count === 0) {
      this.gumballMachine.setState(this.gumballMachine.soldOutState);
    } else {
      this.gumballMachine.releaseBall();
      console.log("축하합니다! 알맹이를 하나 더 받으실 수 있습니다.");

      if (this.gumballMachine.count > 0) {
        this.gumballMachine.setState(this.gumballMachine.noQuaterState);
      } else {
        this.gumballMachine.setState(this.gumballMachine.soldOutState);
      }
    }
    console.log("알맹이가 나갑니다.");
  }
}

export {};
