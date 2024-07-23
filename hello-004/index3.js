const friend_1 = { 이름: "홍길동", 나이: 33, 주소: "서울특별시" };
console.log(friend_1);

let name1 = friend_1.이름;
let age = friend_1.나이;
let addr = friend_1.주소;
console.log(`${name1}, ${age}, ${addr}`);
// friend_1 객체의 각 요소를 구조분해하여 개별 변수로 생성
const { 이름, 나이, 주소 } = friend_1;
console.log(`${이름}, ${나이}, ${주소}`);

// 객체(JSON)의 깊은 복사와 일부 요소의 값 변경
// friend_1 객체를 분해하고, 객체 요소를 사용하여 friend_2 객체를 생성, 생성한 객체의 이름 요소를 변경
const friend_2 = { ...friend_1, 이름: "성춘항" };
console.log(friend_2);

const nums = [];
// 1 ~ 100 까지 범위의 임의 수를 20개 생성하여 nums 배열에 추가
for (let i = 0; i < 20; i++) {
  const rndNum = Math.floor(Math.random() * 100) + 1;
  nums.push(rndNum);
}

// nums 배열에 저장된 랜덤수 중에서 3의 배수만 찾아서
// num3rd 배열에 복사하기

// const num3rd = [];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 3 === 0) num3rd.push(nums[i]);
// }
// console.log(num3rd);

const num3rd1 = [];
nums.forEach((num) => {
  if (num % 3 === 0) num3rd1.push(num);
});

const num3rd2 = nums.filter((num) => num % 3 === 0);

console.log(num3rd2);
