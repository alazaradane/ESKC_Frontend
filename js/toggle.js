const divContainer= document.querySelector('#elementToWorkOn');
let isClicked =true;

let showOrHide = function(){
    if(isClicked){
        divContainer.style.display='block';
        isClicked=false;
    }else{
        divContainer.style.display='none';
        isClicked=true;
    }
}