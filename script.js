let input=document.getElementById('inpu');
let button=document.querySelectorAll('.btn');
let string="";
let array=Array.from(button);
array.forEach(button=>{
    button.addEventListener('click', (e)=>{
    if(e.target.innerHTML=== '='){
            string=eval(string);
            input.value=string;
        }
    else if (e.target.innerHTML=== 'AC'){
        string=''
        input.value=string;
    }
    else if (e.target.innerHTML=== 'DEL'){
        string=string.substring(0,string.length-1);
        input.value=string;
    } else if (e.target.innerHTML === '%') {
        try {
            string = eval(string) / 100;
            input.value = string;
        } catch (error) {
            input.value = "Error";
            string = ""; 
        }
    }
    else{
        string+=e.target.innerHTML;
        input.value=string;
    }
});
    });

