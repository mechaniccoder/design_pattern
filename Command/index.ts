/**
 * Command pattern을 활용해 receiver의 implementation을 숨길 수 있다는 것이 장점인 것 같다.
 */

/**
 * command interface
 */
interface Command {
  execute(): void;
  undo(): void;
}

interface Light {
  on(): void;
  off(): void;
}

class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}

/**
 * Using command
 */
class SimpleRemoteControl {
  private slot: Command;

  public setCommand(command: Command): void {
    this.slot = command;
  }

  public buttonWasPressed(): void {
    this.slot.execute();
  }
}

interface IGarageDoor {
  up: () => void;
  down: () => void;
  stop: () => void;
  lightOn: () => void;
  lightOff: () => void;
}

class GarageDoorOpenCommand implements Command {
  constructor(private garageDoor: IGarageDoor) {}

  execute(): void {
    this.garageDoor.up();
  }

  undo(): void {
    this.garageDoor.down();
  }
}

class GarageDoorCloseCommand implements Command {
  constructor(private garageDoor: IGarageDoor) {}

  execute(): void {
    this.garageDoor.down();
  }

  undo(): void {
    this.garageDoor.up();
  }
}

/**
 * Creat remote control
 */

// invoker - call execute method
class RemoteControl {
  onCommands: Command[] = [];
  offCommmands: Command[] = [];
  undoCommand: Command = {
    execute() {},
    undo() {},
  };

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommmands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommmands[slot].execute();
    this.undoCommand = this.offCommmands[slot];
  }

  public toString(): string {
    let stringBuff: string = "";

    stringBuff += `
    ------- Remote Control -------
    `;
    for (let i = 0; i < this.onCommands.length; i++) {
      stringBuff += `[slot ${i}] ${this.onCommands[i].constructor.name} ${this.offCommmands[i].constructor.name}
      `;
    }
    return stringBuff;
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}

class Stereo {
  on(): void {}
  off(): void {}
  setCD(): void {}
  setDVD(): void {}
  setRadio(): void {}
  setVolume(volume: number): void {}
}

class StereoOnWithCDCommand implements Command {
  constructor(private stereo: Stereo) {}

  execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }

  undo(): void {
    this.stereo.off();
    this.stereo.setVolume(0);
  }
}

class Light implements Light {
  constructor(public name: string) {}

  on(): void {
    console.log(`${this.name} is on`);
  }

  off(): void {
    console.log(`${this.name} is off`);
  }
}

class GarageDoor implements IGarageDoor {
  constructor(public name: string) {}
  up(): void {
    console.log(`${this.name} is up`);
  }
  down(): void {
    console.log(`${this.name} is down`);
  }
  stop(): void {}
  lightOn(): void {}
  lightOff(): void {}
}

interface ICellingFan {
  high(): void;
  medium(): void;
  low(): void;
  off(): void;
  getSpeed(): number;
}

class CellingFan implements ICellingFan {
  constructor(public name: string) {}

  high(): void {
    console.log(`${this.name} is high`);
  }

  medium(): void {}

  low(): void {}

  off(): void {
    console.log(`${this.name} is off`);
  }

  getSpeed(): number {
    return 0;
  }
}

class CellingFanOnCommand implements Command {
  constructor(private cellingFan: ICellingFan) {}

  execute(): void {
    this.cellingFan.high();
  }

  undo(): void {
    this.cellingFan.off();
  }
}

class CellingFanOffCommand implements Command {
  constructor(private cellingFan: ICellingFan) {}

  execute(): void {
    this.cellingFan.off();
  }

  undo(): void {
    this.cellingFan.high();
  }
}

function testRemoteLoader() {
  const remote: RemoteControl = new RemoteControl();

  const livingRoomLight: Light = new Light("living room");
  const kitchenLight: Light = new Light("kitchen light");
  const garageDoor: IGarageDoor = new GarageDoor("garage");
  const ceilingFan: ICellingFan = new CellingFan("ceiling fan");

  const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff: LightOffCommand = new LightOffCommand(
    livingRoomLight
  );
  const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
  const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight);

  const garageDoorOpen: GarageDoorOpenCommand = new GarageDoorOpenCommand(
    garageDoor
  );
  const garageDoorClose: GarageDoorCloseCommand = new GarageDoorCloseCommand(
    garageDoor
  );

  const ceilingFanOn: CellingFanOnCommand = new CellingFanOnCommand(ceilingFan);

  const ceilingFanOff: CellingFanOffCommand = new CellingFanOffCommand(
    ceilingFan
  );

  remote.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remote.setCommand(1, kitchenLightOn, kitchenLightOff);
  remote.setCommand(2, garageDoorOpen, garageDoorClose);
  remote.setCommand(3, ceilingFanOn, ceilingFanOff);

  const stringBuffer = remote.toString();
  console.log(stringBuffer);

  remote.onButtonWasPushed(0);
  remote.offButtonWasPushed(0);
  remote.onButtonWasPushed(1);
  remote.offButtonWasPushed(1);
  remote.onButtonWasPushed(2);
  remote.offButtonWasPushed(2);
  remote.onButtonWasPushed(3);
  remote.offButtonWasPushed(3);
}

testRemoteLoader();

class MacroCommand implements Command {
  constructor(private commands: Command[]) {}

  execute(): void {
    this.commands.forEach((command) => {
      command.execute();
    });
  }

  undo(): void {
    this.commands.forEach((command) => {
      command.undo();
    });
  }
}

function testMacroCommand() {
  const lightOn = new LightOnCommand(new Light("living room"));
  const lightOff = new LightOffCommand(new Light("living room"));
  const macroOn = new MacroCommand([lightOn, lightOff]);
}

export {};
