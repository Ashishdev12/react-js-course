function greet(){
  return "hello";
}

const msg = greet();
console.log(msg);

function* generatorGreet(){
  yield "G-Good Morning!";
  return "G-hello";
}

const itr = generatorGreet();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());