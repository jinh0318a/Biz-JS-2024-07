const friends = [
  { name: "홍길동", age: 33, tel: "010-1111-1111" },
  { name: "성춘향", age: 16, tel: "010-2222-2222" },
  { name: "이몽룡", age: 20, tel: "010-3333-3333" },
];

// friends 배열의 index 1번 요소의 이름 임꺽정으로 변경하고 싶다
friends[1].name = "임꺽정";

// friends 배열의 장영실, 40, 010-4444-4444 인 데이터 추가
friends.push({ name: "장영실", age: 40, tel: "010-4444-4444" });

// 얕은복사를 하게되면 원본주소를 복사하는것이기 때문에 수정을하면 원본이 수정됨
const friends2 = friends;
friends2[1].name = "성춘향";
console.log(`friends`, friends);
console.log(`friends2`, friends2);

const friends3 = friends.map((f) => f);
friends3[2].name = "바이든";
console.log(`friends`, friends);
console.log(`friends3`, friends3);

const friends4 = [];
for (let i = 0; i < friends.length; i++) {
  friends4.push(friends[i]);
}
friends4[0].name = "트럼프";
console.log(`friends`, friends);
console.log(`friends4`, friends4);

const friends5 = [...friends];
friends5[2].age = 100;
console.log(`friends`, friends);
console.log(`friends5`, friends5);
