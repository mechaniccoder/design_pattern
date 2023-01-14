class DrawingMachine {
  static SOLD_OUT = 0;
  static NO_QUARTER = 1;
  static HAS_QUARTER = 2;
  static SOLD = 3;

  state: number = DrawingMachine.SOLD_OUT;
  count = 0;

  constructor(count: number) {
    this.count = count;
    if (count > 0) {
      this.state = DrawingMachine.NO_QUARTER;
    }
  }

  public insertQuarter() {
    if (this.state === DrawingMachine.HAS_QUARTER) {
      console.log("You can't insert another quarter");
    } else if (this.state === DrawingMachine.NO_QUARTER) {
      this.state = DrawingMachine.HAS_QUARTER;
      console.log("You inserted a quarter");
    } else if (this.state === DrawingMachine.SOLD_OUT) {
      console.log("You can't insert a quarter, the machine is sold out");
    } else if (this.state === DrawingMachine.SOLD) {
      console.log("Please wait, we're already giving you a drawing");
    }
  }

  public ejectQuarter() {
    if (this.state === DrawingMachine.HAS_QUARTER) {
      console.log("Quarter returned");
      this.state = DrawingMachine.NO_QUARTER;
    } else if (this.state === DrawingMachine.NO_QUARTER) {
      console.log("You haven't inserted a quarter");
    } else if (this.state === DrawingMachine.SOLD) {
      console.log("Sorry, you already turned the crank");
    } else if (this.state === DrawingMachine.SOLD_OUT) {
      console.log("You can't eject, you haven't inserted a quarter yet");
    }
  }

  public turnCrank() {
    if (this.state === DrawingMachine.SOLD) {
      console.log("Turning twice doesn't get you another drawing!");
    } else if (this.state === DrawingMachine.NO_QUARTER) {
      console.log("You turned but there's no quarter");
    } else if (this.state === DrawingMachine.SOLD_OUT) {
      console.log("You turned, but there are no drawings");
    } else if (this.state === DrawingMachine.HAS_QUARTER) {
      console.log("You turned...");
      this.state = DrawingMachine.SOLD;
      this.dispense();
    }
  }

  public dispense() {
    if (this.state === DrawingMachine.SOLD) {
      console.log("A drawing comes rolling out the slot");
      this.count = this.count - 1;
      if (this.count === 0) {
        console.log("Oops, out of drawings!");
        this.state = DrawingMachine.SOLD_OUT;
      } else {
        this.state = DrawingMachine.NO_QUARTER;
      }
    } else if (this.state === DrawingMachine.NO_QUARTER) {
      console.log("You need to pay first");
    } else if (this.state === DrawingMachine.SOLD_OUT) {
      console.log("No drawing dispensed");
    } else if (this.state === DrawingMachine.HAS_QUARTER) {
      console.log("No drawing dispensed");
    }
  }
}

export {};
