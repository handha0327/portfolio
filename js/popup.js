$(function(){
    //모달팝업 시작
    $('#pop_up .close').click(function(){ //사용할때 #pop_up에 display:block로 바꿔주기.
      $('#pop_up').fadeOut(600); //fadeOut/In (시간)
    }) //팝업의 클로즈 버튼을 사용했을 때 팝업이 사라진다.
    $('.modal').click(function(){
      $('#pop_up').fadeIn(600);
    }) //모달팝업을 클릭하면 팝업이 나타난다.
)