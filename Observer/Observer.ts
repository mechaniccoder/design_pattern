interface Observer {
  update(): void;
}

function Observable() {
  let observers: Observer[] = [];

  const subscribe = (targetObserver: Observer) => {
    observers.push(targetObserver);
    return () => {
      observers = observers.filter((observer) => observer !== targetObserver);
    };
  };

  const publish = () => {
    observers.forEach((observer) => observer.update());
  };

  return {
    subscribe,
    publish,
  };
}

const observable = Observable();

const unsubscribe1 = observable.subscribe({
  update: () => console.log("observer 1"),
});

const unsubscribe2 = observable.subscribe({
  update: () => console.log("observer 2"),
});

console.log("First publish");

observable.publish();

unsubscribe1();

console.log("\nSecond publish");
observable.publish();

unsubscribe2();

console.log("\nThird publish");
observable.publish();
