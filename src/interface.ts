interface List {
  readonly id: number;
  name: string;
  // [x: string]: any;
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value)
    // value.id++
  });
}

let result = {
  data: [
    {id: 1, name: 'A', age: 30},
    {id: 2, name: 'B'}
  ]
}

render(result)

// 结尾一点点没看懂

interface StringArray {
  [index: number]: string
}

let chars: StringArray = ['A', 'B']


// 函数的接口

let add1: (x:number, y: number) => number

interface Add {
  (x:number, y:number): number
}