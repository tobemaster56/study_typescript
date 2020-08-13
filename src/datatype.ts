// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

// 元祖
let tuple: [number, string] = [0, '1']
tuple.push(2)
console.log(tuple[1])

// 函数
let add = (x:number, y:number) => x + y
let compute: (x: number, y: number) => number

compute = (a, b) => a + b


// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2: symbol = Symbol()

console.log(s1 === s2)

// undefined, null
let un: undefined = undefined
let nu: null = null
num = undefined

// void
let noRetun = () => {}

// any
let x
x = 1
x= []


// never
let error = () => {
  throw "3333"
}


/**
 * JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
 * 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。
 */

let isMale: boolean = true
// 注意，使用构造函数 Boolean 创造的对象不是布尔值：
let isFemale: boolean = new Boolean(true)

let isAnimal: Boolean = new Boolean(false)
let isHuman: Boolean = true

let age: number = 29
let count: number = 0b1010

let myName: string = 'test'
let myAge: number = 29

let words: string = `hello, ${myName}`

// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert('1111')
}

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined
let unusable2: void = 2222

// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：

let test: null = null
test = 3333


// 任意值（Any）用来表示允许赋值为任意类型。
let myLoveNum: number = 7
myLoveNum = '7'

let myHateNum: any = 9
myHateNum = '9'


// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let something
something = 'abc'
something = 7777

// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型
let age2 = 3333
age2 = 4444
age2 = '333333'


// 联合类型（Union Types）表示取值可以为多种类型中的一种。
let testNumStr: number | string
testNumStr = 33333
testNumStr = '33333'

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
console.log(testNumStr.length)
testNumStr = 33333
console.log(testNumStr.length)

// 访问联合类型的属性或方法
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：

function getLength(something: string | number) {
    console.log(something.toString())
    return something.length
}

//对象接口类型
interface IPerson {
    name: string;
    age: number;
}


let john: IPerson = {
    name: 'John',
    age: 333
}

// 定义的变量比接口少了一些属性是不允许的：
let tom: IPerson = {
    name: 'Tom',
}

// 多一些属性也是不允许的：
let smith: IPerson = {
    name: 'Smith',
    age: 3333,
    job: 'php'
}

//有时我们希望不要完全匹配一个形状，那么可以用可选属性：

interface ICoder {
    name: string;
    age?: number;
    lang: string;
}

let yiran: ICoder = {
    name: 'yiran',
    lang: 'js'
}

// 这时仍然不允许添加未定义的属性：
let yiran2: ICoder = {
    name: 'yiran',
    lang: 'js',
    job: 'frontend'
}

// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

interface IUI {
    name: string;
    age?: number;
    [propName: string]: any;
}


// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface IPerson1 {
    name: string;
    age?: number;
    [propName: string]: string;
}

let tom2: IPerson1 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// 上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。


// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：

interface IPerson2 {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom3: IPerson2 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// 只读属性

interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any
}

let tom4: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom4.id = 333
// 上例中，使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了。


let tom5: Person = {
    name: 'tom5',
    age: 333
}

tom5.id = 4444

// 上例中，报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值。
// 第二处是在给 tom.id 赋值的时候，由于它是只读属性，所以报错了。


//数组泛型

//「类型 + 方括号」表示法
let arr11: number[] = [2,333,444]
let arr12: number[] = [2, '3333']


// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
arr11.push('3333')

// 泛型表示数组  Array<elemType>
let arr13: Array<number> = [1, 2, 3, 4]

let arr14: any[] = [1,2, '3333']


// 内置对象, 它们的定义文件在 TypeScript 核心库的定义文件中。
let b: Boolean = new Boolean(1)
let err: Error = new Error('bad')
let d: Date = new Date()
let r: RegExp = /abc/

let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function (e: MouseEvent) {
    // do something
})

Math.pow(10, '2');


// 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

function sum(x: number, y: number): number {
    return x + y
}

sum(1, 2)
// 注意，输入多余的（或者少于要求的）参数，是不被允许的：
sum(1, 2, 3)
sum(2)

let mySum: (x: number, y: number)=> number = function (x:number, y: number): number {
    return  x + y
}


interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc = function (source: string, subString: string) {
    return source.search(subString) > -1
}

// 可选参数
// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：
function buildName(firstName: string, lastName?: string) {
    if (firstName) {
        return firstName + ' ' + lastName
    } else {
        return  lastName
    }
}

function buildName2(firstName: string = 'cat', lastName: string) {
    if (firstName) {
        return firstName + ' ' + lastName
    } else {
        return  lastName
    }
}

// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
function push(array, ...items) {
    items.forEach(item=>array.push(item))
}

function push2(array: any[], ...items: any[]) {
    items.forEach(item=>array.push(item))

}

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string |undefined {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法：
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    return animal.name
}

function isFish(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}

function isFish2(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

(window as any).abcde = 1

// 将 any 断言为一个具体的类型
// https://ts.xcatliu.com/basics/type-assertion.html#%E5%B0%86-any-%E6%96%AD%E8%A8%80%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%85%B7%E4%BD%93%E7%9A%84%E7%B1%BB%E5%9E%8B:~:text=%E5%9C%A8%E6%97%A5%E5%B8%B8%E7%9A%84%E5%BC%80%E5%8F%91%E4%B8%AD%EF%BC%8C%E6%88%91%E4%BB%AC%E4%B8%8D%E5%8F%AF%E9%81%BF%E5%85%8D%E7%9A%84%E9%9C%80%E8%A6%81%E5%A4%84%E7%90%86%20any%20%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8F%98%E9%87%8F%EF%BC%8C%E5%AE%83%E4%BB%AC%E5%8F%AF%E8%83%BD%E6%98%AF%E7%94%B1%E4%BA%8E%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%93%E6%9C%AA%E8%83%BD%E5%AE%9A%E4%B9%89%E5%A5%BD%E8%87%AA%E5%B7%B1%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E4%B9%9F%E6%9C%89%E5%8F%AF%E8%83%BD%E6%98%AF%E5%8E%86%E5%8F%B2%E9%81%97%E7%95%99%E7%9A%84%E6%88%96%E5%85%B6%E4%BB%96%E4%BA%BA%E7%BC%96%E5%86%99%E7%9A%84%E7%83%82%E4%BB%A3%E7%A0%81%EF%BC%8C%E8%BF%98%E5%8F%AF%E8%83%BD%E6%98%AF%E5%8F%97%E5%88%B0%20TypeScript,%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F%E7%9A%84%E9%99%90%E5%88%B6%E8%80%8C%E6%97%A0%E6%B3%95%E7%B2%BE%E7%A1%AE%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%9C%BA%E6%99%AF%E3%80%82
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom123 = getCacheData('tom') as Cat;
tom123.run();

// 双重断言§
// 既然：
//
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
// 那么我们是不是可以使用双重断言 as any as Foo 来将任何一个类型断言为任何另一个类型呢？

interface Cat {
    run(): void;
}
interface Fish {
    swim(): void;
}

function testCat(cat: Cat) {
    return (cat as any as Fish);
}


// 进阶
// 类型别名

type Name = string
type NameResolver = ()=>string
type NameOrResolver = Name | NameResolver
function getName33(n: NameOrResolver):Name {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

// 字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.body, 'click')
handleEvent(document.body, 'hover')

// 元祖
let bom: [string, number] = ['abc', 2223]
bom[0] = 3333


// 枚举
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days.Sun)

//常数项和计算所得项
// https://ts.xcatliu.com/advanced/enum.html#%E5%B8%B8%E6%95%B0%E9%A1%B9%E5%92%8C%E8%AE%A1%E7%AE%97%E6%89%80%E5%BE%97%E9%A1%B9:~:text=%E5%B8%B8%E6%95%B0%E9%A1%B9%E5%92%8C%E8%AE%A1%E7%AE%97%E6%89%80%E5%BE%97%E9%A1%B9%C2%A7


// 类

class Animal {
    public name: string
    constructor(name: string) {
        this.name = name
    }
    sayHi():string {
        return `My name is ${this.name}`;
    }
}
