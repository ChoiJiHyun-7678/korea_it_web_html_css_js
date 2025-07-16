// 자바스크립트의 함수

// 일반 함수 정의
function 함수명(매게변수1, 매개변수2) {
    console.log("함수 호출됨");
    let 리턴데이터 = null;
    console.log(매개변수1);
    console.log(매개변수2);
    return 리턴데이터;
}
const 리턴값 = 함수명();
console.log(리턴값);
const 함수명2 = 함수명 //함수 잧ㅔ를 다른 변수에 할당
const 리턴값2 = 함수명2(10, 20);
console.log(리턴값)

// 화살표 함수
/** 
 * 1. 매개변수가 1개면 괄호() 생략가능
 * 2. 실행문이 한줄이라면 중괄호{} 생략가능
 * 3. 중괄호{} 생략시 값만 입력하면 리턴값이 됨
 * 즉, 중괄호{}를 생략안하고 리턴을 하려면 리턴값을 명시해야함
 */

const 함수명4 = (매개변수1, 매개변수2) => {
    //코드
    return "리턴값"
}

const fx1 = () => console.log("fx1 호출")
const fx2 = (n) => console.log(n, "풀력");
const fx3 = (n) => n +1;
const fx4 = (n) => {
    console.log(n, "출력");
    return n + 1;
}

const 리턴값4 = 함수명();

const aaa = (fxx, fxx2) => {
    console.log("aaa함수 호출")

    ㅎr.. 울고싷ㅍ다 ㅜㅜ
}