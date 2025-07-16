// 변수선언 => let, post
// let은 값을 제할당 할수있는 변수를 선언할때 사용
let name = "jihyun"
console.log(name)
console.log("hi")

const age = 27;
console.log(age)

// 연산자
// 동등 연산자 => ==, ===
// == : 값만 비교, 필요한 경우 알아서 암시적 타입변환 (타입상관없이)
let data1 = 10;
let data2 = "10";
let result1 = data1 == data2;
console.log(result1)

// === : 값과 타입을 엄격하게 비교
let result2 = data1 === data2;
console.log(result2);

//typeof 연산자 : 변수의 데이터 타입을 확인
console.log(typeof data1,typeof data20);

// 문자열 연결과 숫자 출력의 차이
console.log("1"+"2");
console.log(1, 2);

//not 연산자
console.log(!1)
console.log(!0)
console.log(!"")
console.log(!null)
console.log(!!null)
// !! => 값을 명시적으로 boolean 타입으로 변환하는 일반적인 방법

console.log("".length > 0)
console.log(!!"" === false)
 let data = {
    name:"최지현",
    age : 17,
 };

 if (!data) {
    console.log("사용자 정보가 없습니다.")
 } else if (data.name === "최짖현") {
    console.log("사용자 정보가 일치하지 않습니다.")
 } else if (data.age === 16) {
    console.log("사용자의 이름은 맞지않지만 나이는 일치합니다.")
 } else {
    console.log("사용자가 일치하지않습니다.")
 }