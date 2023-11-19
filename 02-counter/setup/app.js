// variable to keep count.
let count = 0;

// grab relevant objects.
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');


//loop through btns nodeList and addEventListener to each button.
btns.forEach(function(btn){
    btn.addEventListener('click', function(clicked){
       const tagged = clicked.currentTarget.classList;
       if(tagged.contains('decrease')){
        count --;
       }else if(tagged.contains('reset')){
        count = 0;
       }else{
        count ++;
       }
       value.textContent = count;
       if(count>0){
        value.style.color = 'green';
       }else if(count<0){
        value.style.color = 'red';
       }else{
        value.style.color = 'blue';
       }
       if(count>=10){
        document.body.style.backgroundColor ="Red";
       }else if(count<10 && count> 0){
        document.body.style.backgroundColor = "Blue";
       }else if(count<0 && count>=-9){
        document.body.style.backgroundColor = "Purple";
       }else if(count == 0){
        document.body.style.backgroundColor = "Grey";
       }else{
        document.body.style.backgroundColor = "Green";
       }
    })
})