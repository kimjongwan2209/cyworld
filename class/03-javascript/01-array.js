let classmate = ["철수", "영희", "훈이"];

classmate(3)[("철수", "영희", "훈이")]; // classmate 변수에 할당한 배열이 나온다.
classmate[0];
("철수"); // 배열은 항상 0부터 시작, classmate의 0번째를
// 가져온다.

classmate.includes("맹구"); // includes 매써드는 배열에 해당 값이 있는지를
//  확인 후 true or false를 반환한다.
false;

classmate.length; // length는 할당한 배열의 길이를 보여준다.
3;

classmate.push("맹구"); // push는 배열의 마지막 끝에 값을 추가한다.
4;
classmate(4)[("철수", "영희", "훈이", "맹구")];
classmate.pop(); // pop은 배열의 마지막 값을 뺀다.
("맹구");
classmate.length;
3;
classmate(3)[("철수", "영희", "훈이")];
