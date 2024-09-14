function add() {
    let newdiv = document.createElement('p');
    let name = number.value + '번 ' + namek.value + " 세금: ";
    let num = 55 + parseInt(estate.value) + parseInt(salary.value)/5;
    let tax = name + num + '경 월급: ' + parseInt(salary.value) + '경 차액: ' + (parseInt(salary.value) * 1.5 - num) + '경';
    newdiv.innerHTML = tax;
    document.getElementById("list").appendChild(newdiv);
}
  
