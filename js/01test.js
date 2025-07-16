// css 외부 스타일처럼 적용하기

let heading = document.querySelector('#heading');
heading.onclick = function() {
    heading.style.color = 'red'
    alert("빨강 텍스트로 변경 완료!!"); // alert - 경고창(확인 창만) 대화상자 출력 
};
