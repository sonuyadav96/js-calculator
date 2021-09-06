let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue ='button';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            screen.Value += buttonText;
            screen.Value = screenValue;
        }
        else if (buttonText =='='){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText =='='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}
