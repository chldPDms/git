let indicator = document.querySelectorAll(".indicator button"); //여러 개가 배열에 담겨서 옴 인디케이터 클래스에 잇는 버튼 가져오기
let lightbox = document.querySelector("#lightbox");
let block = document.querySelector("#block");

function lightbox_open(num){ //indicator안에 있는 숫자 1 2 3
    lightbox.setAttribute("class", "active") //이미지를 클릭했을 떄 class를 active 시켜 줌
    block.setAttribute("class", "active")
}

function lightbox_close(){
    lightbox.removeAttribute("class"); //없애
    block.removeAttribute("class");
}

function change_img(num){
    let imgs = document.querySelectorAll("figure > img")
    for(let i=0; i< imgs.length; i++){
        imgs[i].removeAttribute("class")
    }
    imgs[num-1].setAttribute("class", "active")
}