// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T):T{
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// logText('a');
// logText(10); // 오류
// const num = logNumber(10);
// logText(true); // 오류

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a');
// a.split('')
// logText(10);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// const str = logText<string>("hi");
// str.split("");
// const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj:Dropdown = {value: 'abc', selected: false};

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: "abc", selected: false };
obj.value.split("");

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.length;
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

// 정의된 타입을 이용해 제네릭의 타입을 제한 (extends)
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength("a"); // 기본적으로 문자열에서 length가 제공되기 때문에 ok
logTextLength(10); // length가 제공되지 않으므로 오류
logTextLength({ length: 10 }); // 객체라도 length가 있으므로 ok
logTextLength({ leng: 10 }); // length가 없으므로 오류

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// T를 타입으로 가지는 변수에 들어갈 값을 제한
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption<number>(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");
