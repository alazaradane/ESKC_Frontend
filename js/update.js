var form = document.getElementById('new');
var display=0;

function hideShow(){
    if(display==1){
        form.style.display ='block';
        display =0;
    }
    else{
        form.style.display ='none';
        display=1;
    }
}