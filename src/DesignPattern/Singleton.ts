let instance: any;
let increment = 0;

class IncrementClass {
  constructor() {
    // if (instance) {
    //   throw new Error("Single ton can't duplicated");
    // } else {
    // }
    instance = this;
  }

  increase() {
    return ++increment;
  }

  decrease() {
    return --increment;
  }
}

const SingleIncrementClass = Object.freeze(new IncrementClass());
const SingleIncrementClass1 = Object.freeze(new IncrementClass());
export default SingleIncrementClass;
