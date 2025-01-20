//변수 선언언
let form = document.cal
let input = form.getElementsByTagName('input')
let clear_btn=document.querySelector(".cls_btn")
// document.getElementsByClassName('cls_btn')[0]
let result_btn = document.querySelector('.result_btn')

//입력 처리
function calc(value){
    if(form['result'].value == '0'){
        form['result'].value = "";
    }
   
    form['result'].value += value;
}

//clear 함수
function clear(){
    form['result'].value ='0'
}

//result 함수
function result(){
    let result = eval(form['result'].value) //eval 계산해 주는 걸 html에 전달해 줌
    form['result'].value = result
}

//이벤트 처리 clear랑 값 없는 거 빼 줌
for (let i=0; i<input.length; i++){
    if(input[i].value != "clear" && input[i].value != ""){
        input[i].onclick = function(){
            calc(input[i].value)
        }
    } 
}

//clear 이벤트 처리
clear_btn.onclick= function(){
    clear();
}

//결과 이벤트 처리
result_btn.onclick  = function(){
   try {
    result();
   } catch (er){
    form['result'].value = '입력 오류';
   }
}

