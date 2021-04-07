// factory
export class RocketFactory {
  public buildRocket(): Rocket {
    const rocket = new Rocket();
    const payload = this.createPayload();
    const stage = this.createStages();
    rocket.payload = payload;
    rocket.stage = stage;
    return rocket;
  }

  createPayload(): Payload {
    return new Payload(0);
  }

  createStages(): Stage[] {
    const engine = new Engine(1000);
    const stage = new Stage([engine]);
    return [stage];
  }
}

export class Rocket {
  payload: Payload;
  stage: Stage[];
}

export class Payload {
  weight: number;
  constructor(weight: number) {
    this.weight = weight;
  }
}

export class Stage {
  engines: Engine[];
  constructor(engines: Engine[]) {
    this.engines = engines;
  }
}

export class Engine {
  power: number;
  constructor(power: number) {
    this.power = power;
  }
}

const rocketFactory = new RocketFactory();
const rocket = rocketFactory.buildRocket();
