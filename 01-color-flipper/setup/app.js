const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const clr = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    document.body.style.backgroundColor = colors[raNum()];
    clr.textContent = colors[raNum()];
})

function raNum(){
    return Math.floor(Math.random()*colors.length);
}