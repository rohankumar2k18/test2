document.getElementById("inc").onclick = function(){
    let number = document.getElementById("counter").innerText;
    number = Number(number);
    number+=1;
    document.getElementById("counter").innerText = number;
}

document.getElementById("dec").onclick = function(){
    let number = document.getElementById("counter").innerText;
    number = Number(number);
    number-=1;
    document.getElementById("counter").innerText = number;
}

document.getElementById("res").onclick = function(){
    document.getElementById("counter").innerText = 0;
}