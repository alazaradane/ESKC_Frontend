$('#menu-btn').click(function(){
    $('#menu').toggleClass("active");
})

const divCourse= document.querySelector('.course');
let isClicked =true;

let showCourse = function(){
    if(isClicked){
        divCourse.style.display='block';
        isClicked=false;
    }else{
        divCourse.style.display='none';
        isClicked=true;
    }
}