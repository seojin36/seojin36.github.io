function add() {
    let newdiv = document.createElement('p');
    let name = number.value + '번 ' + namek.value + " 세금: ";
    let num = 55 + parseInt(estate.value) + parseInt(salary.value)/5;
    let tax = name + num + '경 월급: ' + parseInt(salary.value) + '경 차액: ' + (parseInt(salary.value) * 1.5 - num) + '경';
    newdiv.textContent = tax;
    document.getElementById("list").appendChild(newdiv);
}

function sethide(data, to, num) {
    if (data[0].checked) {
        to.style = "display:none;";
        to.value = num
    } else {
        to.type = "display:block;";
    }
}

function setting() {
    if (main.style == "display:block;") {
        main.style = "display:none;";
        setblock.style = "display:block";
    } else {
        main.style = "display:block;";
        setblock.style = "display:none";
    }
}

while(true) {
    setting()
    sethide(num, number, undefined)
    sethide(name, namek, undefined)

}
  
