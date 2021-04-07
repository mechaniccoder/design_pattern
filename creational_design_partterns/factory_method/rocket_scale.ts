import { Engine, Payload, Rocket, RocketFactory, Stage } from "./rocket";

export class Satellite extends Payload {
  constructor(public id: number) {
    super(200);
  }
}

export class FirstStage extends Stage {
  constructor() {
    super([new Engine(1000), new Engine(1000), new Engine(1000), new Engine(1000)]);
  }
}

export class SecondStage extends Stage {
  constructor() {
    super([new Engine(1000)]);
  }
}

type FreightRocketStages = [FirstStage, SecondStage];

class FreightRocketFactory implements RocketFactory {
  private satelliteId: number = 0;

  buildRocket(): Rocket {
    const rocket = new Rocket();
    const payload = this.createPayload();
    const stage = this.createStages();
    rocket.payload = payload;
    rocket.stage = stage;
    return rocket;
  }

  createPayload(): Satellite {
    return new Satellite(this.satelliteId++);
  }

  createStages(): FreightRocketStages {
    return [new FirstStage(), new SecondStage()];
  }
}

const freightRocketFactory = new FreightRocketFactory();
const freightRocket = freightRocketFactory.buildRocket();
