const multiply = (a,b,c) => a*b*c;
const add = (a,b,c,d,e) => a+b+c+d+e;

const curry = (f) => {
  return function curr(...args) {
    console.log(f, args)
    if (args.length >= f.length) {
      return f(...args);
    }
      return (...nextArgs) => curr(...args, ...nextArgs);
  }
}

console.log(curry(add)(1)(2)(3)(4)(5) == add(1, 2, 3, 4, 5)); //should be true
console.log(curry(multiply)(1)(2)(3) == multiply(1, 2, 3)); // should be true