export class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstancee(): Singleton {
    // It may occur problem in multi-threaded environment
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const s1 = new Singleton(); // Constructor of class 'Singleton' is private and only accessible within the class declaration
const s2 = Singleton.getInstancee();
const s3 = Singleton.getInstancee();
console.log(s2 === s3); // true

/**
 * Implement redux simply
 */
function createStore<T, A>(
  initialState: T,
  reducer: (store: T, action: A) => T
) {
  let _store: T = initialState;

  function dispatch(action: A) {
    return reducer(getState(), action);
  }

  function getState() {
    return _store;
  }

  return {
    dispatch,
    getState,
  };
}

const store = createStore({}, () => ({}));
