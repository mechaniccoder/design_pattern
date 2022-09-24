class Payload {
  weight: number;
}

class Engine {
  fuel: number;
}

class Stage {
  engines: Engine[];
}

interface Rocket {
  payload: Payload;
}

class Probe implements Payload {
  weight: number;
}

class SolidRocketEngine extends Engine {}

class SoundingRocket implements Rocket {
  payload: Probe;
  engine: SolidRocketEngine;
}

class LiquidRocketEngine extends Engine {
  fuel = 0;
  refuel(level: number): void {
    this.fuel = level;
  }
}

abstract class LiquidRocketStage implements Stage {
  engines: LiquidRocketEngine[] = [];
  refuel(level = 100): void {
    this.engines.forEach((engine) => engine.refuel(level));
  }
}

export default {};
