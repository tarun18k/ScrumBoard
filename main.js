//Divisions Selection

var reqe = document.querySelector('#Requirements');
var teste = document.querySelector('#testing');
var deve = document.querySelector('#development');
var dese = document.querySelector('#design');
var did = -1;
// 
//top Container 
var heading = document.querySelector('h1');
var form = document.querySelector('.profileform');
var x = document.querySelector('.profbtn');
var n;

//Project Name Div Events


x.addEventListener('click', function (E) {
    E.preventDefault();
    var projectname = document.querySelector('input').value;
    localStorage.setItem("ProjectName", projectname);
    forminvisible(localStorage.getItem("ProjectName"));
});

function forminvisible(value) {
    if (value != null) {
        form.classList.add("profileforma");
        heading.innerHTML = "Project :  " + value;
    }
}
forminvisible(localStorage.getItem("ProjectName"));
// project nameevents









//EditFormButton & Events


var editform = document.querySelector('#editform');

function editformv() {
    editform.style.display = "block";
}

function editformmin() {
    editform.style.disply = "none";
}



//Create Task Form & Events
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





//Create Task Button Functions


var ckt = document.querySelector('#ckt');
var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
var data = JSON.parse(localStorage.getItem('items'));

var del;
var e;
var edv;
var inpute, desce, statuse, prioritye, typee;
var ekt = document.querySelector('#ekt');
ekt.addEventListener('click', function (event) {
    inpute = document.querySelector('#etitle').value;
    desce = document.querySelector('#edesc').value;
    if (document.getElementById('es0').checked == true) {
        statuse = document.getElementById('es0').value;
    } else if (document.getElementById('es1').checked == true) {
        statuse = document.getElementById('es1').value;
    } else {
        statuse = document.getElementById('es2').value;
    }
    prioritye = document.querySelector('#epriority').value;
    if (document.getElementById('er1').checked == true) {
        typee = document.getElementById('er1').value;
    } else if (document.getElementById('er2').checked == true) {
        typee = document.getElementById('er2').value;
    } else if (document.getElementById('er3').checked == true) {
        typee = document.getElementById('er3').value;
    } else {
        typee = document.getElementById('er4').value;
    }

    editformmin();
    for (var j = 0; j < itemsArray.length; j++) {
        if (itemsArray[j].id == edv) {
            itemsArray[j].title = inpute;
            itemsArray[j].desc = desce;
            itemsArray[j].status = statuse;
            itemsArray[j].priority = prioritye;
            itemsArray[j].type = typee;
            break;

        }
    }
    localStorage.setItem('items', JSON.stringify(itemsArray));
});

function creatediv(input, desc, status, type, id) {
    var div = document.createElement('div');
    div.setAttribute('ide', id);
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
    div.innerHTML = "<p>Title: <strong>" + input + "</strong></p> <p>Description: <strong>" + desc + "</strong></p><p>Status: <strong>" + status + "</strong></p><p>Created At: <strong> " + new Date() + "</strong></p><button class='deletenote'><i class='fas fa-trash'></i><span class='caption'>DeleteNote</span></button><button class='edit'><i class='fas fa-pencil-alt'></i><span class='caption'>Edit</span></button>";
    del = document.querySelectorAll('.deletenote');
    for (var i = 0; i < del.length; i++) {
        del[i].addEventListener('click', function () {
            for (var j = 0; j < itemsArray.length; j++) {
                if (itemsArray[j].id == this.parentNode.getAttribute('ide')) {
                    itemsArray.splice(j, 1);
                    localStorage.setItem('items', JSON.stringify(itemsArray));
                    break;
                }
            }
            window.location.reload();

        });

    }
    e = document.querySelectorAll('.edit');
    for (var i = 0; i < e.length; i++) {
        e[i].addEventListener('click', function () {

            editformv();
            edv = this.parentNode.getAttribute('ide');


        });
    }
}






//Create Task ButtonEvent listner
ckt.addEventListener('click', function (e) {
    e.preventDefault();
    var input = document.querySelector('#title').value;
    while(input=="")
        {
            input=prompt("enter title");
        }
    var desc = document.querySelector('#desc').value;
    var status;
    if (document.getElementById('s0').checked == true) {
        status = document.getElementById('s0').value;
    } else if (document.getElementById('s1').checked == true) {
        status = document.getElementById('s1').value;
    } else {
        status = document.getElementById('s2').value;
    }
    var priority = document.querySelector('#priority').value;
    while(priority=="")
        {
            priority=prompt("enter Priority Number");
        }
    var type;
    if (document.getElementById('r1').checked == true) {
        type = document.getElementById('r1').value;
    } else if (document.getElementById('r2').checked == true) {
        type = document.getElementById('r2').value;
    } else if (document.getElementById('r3').checked == true) {
        type = document.getElementById('r3').value;
    } else {
        type = document.getElementById('r4').value;
    }
    did = did + 1;
    var div1 = new Adddiv(input, desc, status, priority, type, did);

    itemsArray.push(div1);
    itemsArray.sort(function (a, b) {
        return a.priority - b.priority
    });

    localStorage.setItem('items', JSON.stringify(itemsArray));
    localStorage.setItem('did', JSON.stringify(did));
    creatediv(input, desc, status, type, did);

    forminvisiblemain();

    input.value = " ";
    desc.value = " ";
    status.value = " ";
    priority.value = " ";
    type.value = " ";
    window.location.reload();

});
var d = JSON.parse(localStorage.getItem('did'));

function id() {

    did = d;
}
id();

function Adddiv(input, desc, status, priority, type, id) {
    this.title = input;
    this.id = id;
    this.desc = desc;
    this.status = status;
    this.priority = priority;
    this.type = type;
}

data.forEach(lse);

function lse(item) {
    creatediv(item.title, item.desc, item.status, item.type, item.id);
}
var dela = document.querySelector('.delete');
dela.addEventListener('click', function () {
    localStorage.clear();
    did = -1;
    localStorage.setItem('did', JSON.stringify(did));
    window.location.reload();

});
