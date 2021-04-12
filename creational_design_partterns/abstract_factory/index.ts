interface Payload {
  weight: number;
}

interface Stage {
  engines: Engine[];
}

interface Engine {
  power: number;
}

interface Rocket {
  payload: Payload;
  stages: Stage[];
}

/**
 *추상 팩토리 인터페이스로 추상화한다.
 *구체적인 로켓을 만들기 위해 제네릭을 활용하다.
 */

interface RocketFactory<T extends Rocket> {
  createRocket(): T;
  createPayload(): Payload;
  createStages(): Stage[];
}

// 팩토리를 받아서 실제 제품을 생성하는 client를 만든다.
class Client {
  buildRocket<T extends Rocket>(factory: RocketFactory<T>): T {
    const rocket = factory.createRocket();
    rocket.payload = factory.createPayload();
    rocket.stages = factory.createStages();
    return rocket;
  }
}

class ExperimentalRocket implements Rocket {
  payload: Payload;
  stages: Stage[];
}

class ExperimentalRocketFactory implements RocketFactory<ExperimentalRocket> {
  createPayload(): Payload {
    return { weight: 100 };
  }
  createStages(): Stage[] {
    return [
      {
        engines: [
          {
            power: 10,
          },
        ],
      },
    ];
  }
  createRocket(): ExperimentalRocket {
    const rocket = new ExperimentalRocket();
    rocket.payload = this.createPayload();
    rocket.stages = this.createStages();
    return rocket;
  }
}

/**
 * client로 구체적인 제품을 생산하자.
 */

const client = new Client();
const factory = new ExperimentalRocketFactory();
client.buildRocket(factory);

/**
 * 추상팩토리의 특징은 실제 제품을 만드는 client, 그리고 팩토리를 매개변수로 넘기는 점이다.
 */
