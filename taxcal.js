function add() {
    let newdiv = document.createElement('p');
    let name = number.value + '번 ' + name.value + " 세금: ";
    let tax = 55 + parseInt(estate.value) + parseInt(salary.value)/5;
    let text = name + ' | 세금' + tax + '경 | 월급: ' + parseInt(salary.value) + '경 | 차액: ' + (parseInt(salary.value) * 1.5 - num) + '경';
    newdiv.innerHTML = text;
    document.getElementById("list").appendChild(newdiv);
}
  
