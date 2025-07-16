  // 회원 가입 양식 유효성 검사

function checkJoin() {
      //id
    if(document.joinForm.memberid.value == "" ) { 
        alert("id는 필수 입력사항입니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberid.focus()  // focus() - 해당 input 폼으로 커서 이동
        return false;
    }
    if(document.joinForm.memberid.value.length < 4 ) {  // length 글자 수 확인 - 글자 수가 4글자 미만일 때
        alert("id는 4글자 이상이어야 합니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberid.focus()
    }
     if(document.joinForm.memberid.value.length > 16 ) {  // length 글자 수 확인 - 글자 수가 16글자 초과일 때
        alert("id는 16글자 이하여야 합니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberid.focus()
    }

    /*  정규 표현식 (아이디 영어 입력 정규표현식)
     
        var idcheck = /^[ㄱ-ㅎ|가-힣]+&/;

        if(!idcheck.test(document.joinForm.memberid.value)) {
            alert("아이디는 한글 입력 불가능합니다.");
        } 
    */

      //pw
     if(document.joinForm.memberpw.value == "" ) {  
        alert("비밀번호는 필수 입력사항입니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberpw.focus()
        return false;
    }

      //name
    if(document.joinForm.membername.value == "" ) {  
        alert("이름은 필수 입력사항입니다. 확인 후 다시 입력하세요.");
        document.joinForm.membername.focus()
        return false;
    }

      //email
    if(document.joinForm.memberemail.value == "" ) {  
        alert("이메일은 필수 입력사항입니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberemail.focus()
        return false;
    }
    
    //intro
    if(document.joinForm.memberintro.value.length <= 10 ) {  // 글자 수가 10글자 이하일 때
        alert("자기소개는 11자 이상으로 작성해주세요");
        document.joinForm.memberintro.focus()
    }

    return true;

}
