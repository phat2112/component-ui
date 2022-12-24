import React from "react";
import SingleIncrementClass from "DesignPattern/Singleton";
import ObserverClass from "DesignPattern/Observer";

const observer = new ObserverClass();
function logger() {
  console.log("logger");
}

function clickTrack(data: string) {
  console.log(`click ${data}`);
}

observer.subscribe(logger);
observer.subscribe(clickTrack);

const DesignPattern = () => {
  // Proxy pattern
  const person = {
    name: "PhatNguyen",
    age: 24,
    nationality: "Viet Nam",
  };

  console.log("SingleIncrementClass", SingleIncrementClass);

  const personProxy = new Proxy(person, {
    get: (obj, prop: string) => {
      console.log({ obj, prop });
      Reflect.get(obj, prop);

      return obj[prop as keyof typeof obj];
    },
    set: (obj, prop, value) => {
      console.log({ obj, prop, value });
      return Reflect.set(obj, prop, value);
    },
  });

  console.log(personProxy.age);

  const handleClick = () => {
    observer.unsubscribe(logger);
    observer.notify("abcdefghi jkl");
  };
  return (
    <div>
      <h1>DesignPattern</h1>

      <div>
        <h1>Observer pattern</h1>
        <button onClick={handleClick}>click me</button>
        <div></div>
      </div>
    </div>
  );
};

export default DesignPattern;
