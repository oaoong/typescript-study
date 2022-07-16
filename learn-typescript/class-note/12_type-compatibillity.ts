// 인터페이스
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}

var developer: Developer;
var person: Person;
// 타입 호환은 기본적으로 오른쪽의 타입이 더 많은 속성을 갖거나 구조적으로 더 클 때 왼쪽과 호환이 된다.
developer = person; // error
person = developer;

// 함수
var add = function (a: number) {
  // ...
};
var sum = function (a: number, b: number) {
  // ...
};

add = sum; // error
sum = add;

// 제네릭
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2; // error
notempty2 = notempty1; // error
