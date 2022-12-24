export default class Observer {
  observers: any[] = [];

  subscribe(fn: any) {
    this.observers.push(fn);
  }

  unsubscribe(fn: any) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  notify(...arg: any) {
    this.observers.forEach((observer) => observer(...arg));
  }
}
