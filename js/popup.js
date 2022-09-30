$(function(){

    //검정파랑 시작  /배경 색이 원래부터 색이 다르게 하고 싶으면 css에서 미리 주기.
    $('.graphic_img .modal').each(function(){
      $(this).click(function(){
        var href = $(this).attr('href');
        $('.pop').hide(); //다 닫혀지고, 내가 클릭한 것만 나타남.
        $(href) .show(); //$ 표시 없이 해보고 안 되면 $넣어주면 됨. 이름을 그대로 가지고 오면 $해줘야하고, 변수는 $를 적으면 안됨.

      })
    })

    $('.pop .close').click(function(){
      $('.pop').fadeOut(300); //fadeOut을 줘서 스르르 사라지게 만든다.
    })

  })//end

  //윈도우창 시작
  function winOpen(img_name){ //()안에 ''없이 적으면 변수로 이해. => html에 준 이름을 들어가는 느낌. ()에 아무것도 없으면 html ()안에 아무리 적어도 안 들어감.
    window.open(img_name,'chi','toolbar=no,location=no,status=no,menubar=no,resizable=no,scrollbars=no,width=500,height=300')//스페이스바 누르지 말기. location - 주소창 / img_name에 한 가지 이미지만 넣고 싶다면 '이미지 링크? 어디있는지'적어주면 됨. / ()에 넣은 것이 ''안에 들어가있으면 그 부분만 다시 ''를 사용해 밖으로 빼주는 느낌으로 사용. ex. html에 winOpen(500) script에 winOpen(num) -> width를 500으로 바꾸고싶다 -> width='+num+',height=...
  } //사용자함수 ($ 안에 넣으면 메소드 처럼 사용 가능(여기서 이것저것 지정해주면 바로 사용 가능. 제이쿼리 파일에 쓰는 것 처럼.)) / html에 쓴 onClick="winOpen();"에 적용됨.