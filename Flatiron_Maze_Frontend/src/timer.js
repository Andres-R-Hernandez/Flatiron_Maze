let t =-1;
let c = 0;
let interval = setInterval(timer, 1000);
function timer(){
    t++;
    document.querySelector('h3#counter').textContent = t;
    c = 0;
}
timer();

// Connect/activated to 'Play Game' btn