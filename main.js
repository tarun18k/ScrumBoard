var heading = document.querySelector('h1');
var form = document.querySelector('.profileform');
var x = document.querySelector('.profbtn');
let name = localStorage.getItem('proj') ? JSON.parse(localStorage.getItem('proj')) : [];
localStorage.setItem('proj', JSON.stringify(name));
const n = JSON.parse(localStorage.getItem('proj'));

x.addEventListener('click', function (E) {
    E.preventDefault();
    var projectname = document.querySelector('input').value;
    name.push(projectname);

    localStorage.setItem('proj', JSON.stringify(name));

    forminvisible(projectname);
});


function forminvisible(value) {
    form.classList.add("profileforma");
    heading.innerHTML = "Project :  " + value;
}
n.forEach(item => {
    forminvisible(item);
});





var addtsk = document.querySelector('.addtask');
var mainform = document.querySelector('#mainform');

function forminvisiblemain() {
    mainform.style.display = "none";

}

function visibleform() {
    mainform.style.display = "block";
}
addtsk.addEventListener('click', function () {
    visibleform();
});


var ckt = document.querySelector('#ckt');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

function creatediv(input, desc, status, createdat, type) {
    var div = document.createElement('div');
    div.className = "sticky";
    switch (type) {
        case "requirements":
            reqe.append(div);
            break;
        case "testing":
            teste.append(div);
            break;
        case "development":
            deve.append(div);
            break;
        case "design":
            dese.append(div);
            break;

    }
    div.innerHTML="<p>Title: <strong>"+input+"</strong></p> <p>Description: <strong>"+desc+"</strong></p><p>Status: <strong>"+status+"</strong></p><p>Created At: <strong> "+createdat+"</strong></p><p>Time Created: <strong> "+new Date()+"</strong></p>";}
ckt.addEventListener('click', function (e) {
    e.preventDefault();
    var input = document.querySelector('#title').value;
    var desc = document.querySelector('#desc').value;

    if (document.getElementById('s0').checked == true) {
        var status = document.getElementById('s0').value;
    } else if (document.getElementById('s1').checked == true) {
        var status = document.getElementById('s1').value;
    } else {
        var status = document.getElementById('s2').value;
    }

    var createdat = document.querySelector('#createdat').value;
    var priority = document.querySelector('#priority').value;
    var type;
    if (document.getElementById('r1').checked == true) {
        var type = document.getElementById('r1').value;
    } else if (document.getElementById('r2').checked == true) {
        var type = document.getElementById('r2').value;
    } else if (document.getElementById('r3').checked == true) {
        var type = document.getElementById('r3').value;
    } else {
        var type = document.getElementById('r4').value;
    }
    var div1 = new Adddiv(input, desc, status, createdat, priority, type);
    itemsArray.push(div1);

    localStorage.setItem('items', JSON.stringify(itemsArray));

    creatediv(input, desc, status, createdat, type);

    forminvisiblemain();

    input.value = " ";
    desc.value = " ";
    status.value = " ";
    createdat.value = " ";
    priority.value = " ";
    type.value = " ";
     window.location.reload();
        

});

function Adddiv(input, desc, status, createdat, priority, type) {
    this.title = input;
    this.desc = desc;
    this.status = status;
    this.createdat = createdat;
    this.priority = priority;
    this.type = type;
}

var reqe = document.querySelector('#Requirements');
var teste = document.querySelector('#testing');
var deve = document.querySelector('#development');
var dese = document.querySelector('#design');



data.forEach(item => {
    creatediv(item.title, item.desc, item.status, item.createdat, item.type);
});


var del = document.querySelector('.delete');
del.addEventListener('click', function () {
    localStorage.clear();
    window.location.reload();
});
