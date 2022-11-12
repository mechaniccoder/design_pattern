function Singleton() {
  return <T extends { new (...args: any[]): any }>(ctr: T) => {
    let instance: InstanceType<T>;
    return class {
      constructor(...args: any[]) {
        if (!instance) {
          instance = new ctr(...args);
        }
        return instance;
      }
    } as T;
  };
}

@Singleton()
class Todo {
  todos: string[];
  constructor() {
    this.todos = [];
  }
  add(title: string) {
    this.todos.push(title);
  }

  getTodos() {
    return this.todos;
  }
}

const todo1 = new Todo();
todo1.add("todo1");
todo1.add("todo2");

const todo2 = new Todo();
console.log(todo1 === todo2); // true
console.log(todo2.getTodos());
