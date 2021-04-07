// make a rocket

// old js
function Rocket() {
  this.payload = {
    name: "cargo ship",
  };

  this.stages = [
    {
      engines: [],
    },
  ];
}

const rocket = new Rocket();

// second old js
function buildRocket() {
  const rocket: any = {};
  rocket.payload = {
    name: "cargo ship",
  };

  rocket.stages = [
    {
      thrusters: [],
    },
  ];
}

const rocket = buildRocket();

export default {};
