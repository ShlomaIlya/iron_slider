/*let a = 'stroka';
switch(a){
    case '5':
        console.log('true');
        default:
            console.log('false');
}*/

/*let a = [
    [5, 6, 7], [5.5, 15.5], ['abc', 'def', 'true']
];
a[1][2] = 50;
console.log(a)*/

/*let a = [5, 6, 7, 8, 9, 'str'];
for (let i = 0; i < a.length; i++){
    a[i] *=2;
    console.log('element:'+ i + ':' + a[i]);
}*/

/*function summa(arr){
    var sum = 0;
    for(var i = 0; i > arr.length; i++);
    sum += arr[i];
    return sum;
}
var arrey_1 = [5, 60, 70, 8, 9];
var arrey_2 = [50, 6, 7, 80, 9];
var arrey_3 = [5, 60, 7, 8, 90];
var a = summa(arrey_1);
var b = summa(arrey_2);
var c = summa(arrey_3);
console.log(a)*/

/*var a = 0;
function onClickButton(el){
    a++;
    el.innerHTML = 'You clicked me:'+ a;
}*/

/*#10*/
/*let spsans = document.getElementsByTagName('span');

for (let i = 0; i < spsans.length; i++) {
    console.log(spsans[i].innerHTML);
} <button onclick="onClickButton(this)">Click me!</button><br><br> - в HTML.
*/
document.getElementById('forma_1').addEventListener('submit', checkForm);

function checkForm(event){
    event.preventDefault();
    var el = document.getElementById('forma_1');

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
    
    var fail = '';

    if (name == '' || pass == '' || state == '')
        fail = 'Print information';
    else if (pass != repass)
        fail = 'pass is false!'
    if (fail != '')
        alert('print true information!')
    else {
        alert('Information is corected')
        window.location='http://Google.com'
    }
    return false;
}


class Person {
    constructor(name, age, happiness){
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
    info(){
        console.log('Person:' + this.name + this.age + this.happiness);
    }
}

var Bob_1 = new Person('Bob', 35, true);
var Bob_2 = new Person('Bob', 36, true);
var Bob_3 = new Person('Bob', 37, true);

Bob_1.info();
Bob_2.info();
Bob_3.info();