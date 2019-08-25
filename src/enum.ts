// 数字枚举
enum Role {
  Reporter = 2,
  Developer,
  Maintainer,
  Owner,
  Guest
}

console.log(Role)

// 字符串枚举

enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉， 失败了'
}

console.log(Message.Success);
// Message.Success = 3333

// 异构枚举
enum Answer {
  N,
  Y = 'yes'
}

console.log(Answer)

// 枚举成员
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = '123'.length
}


// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]
console.log(month)

// 枚举类型
enum E {a, b}
enum F { a=0, b=1 }
enum G { a = 'apple', b = 'banana'}

let e: E = 3

// todo  