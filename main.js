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


document.querySelectorAll(".close")[0].addEventListener('click',function()
{
    forminvisiblemain();

});





//EditFormButton & Events


var editform = document.querySelector('#editform');

function editformv() {
    editform.style.display = "block";
}

function editformmin() {
    editform.style.display = "none";
}
document.querySelectorAll(".close")[1].addEventListener('click',function()
{
    editform.style.display = "none";

});


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
var input, desc, status, priority, type;
var ekt = document.querySelector('#ekt');
ekt.addEventListener('click', function (event) {


    
    input = document.querySelector('#etitle').value;
    desc = document.querySelector('#edesc').value;
    if (document.getElementById('es0').checked == true) {
        status = document.getElementById('es0').value;
    } else if (document.getElementById('es1').checked == true) {
        status = document.getElementById('es1').value;
    } else {
        status = document.getElementById('es2').value;
    }
    prioritye = document.querySelector('#epriority').value;
    if (document.getElementById('er1').checked == true) {
        type = document.getElementById('er1').value;
    } else if (document.getElementById('er2').checked == true) {
        type = document.getElementById('er2').value;
    } else if (document.getElementById('er3').checked == true) {
        type = document.getElementById('er3').value;
    } else {
        type = document.getElementById('er4').value;
    }

    editformmin();
    for (var j = 0; j < itemsArray.length; j++) {
        if (itemsArray[j].id == edv) {
            itemsArray[j].title = input;
            itemsArray[j].desc = desc;
            itemsArray[j].status = status;
            itemsArray[j].priority = priority;
            itemsArray[j].type = type;
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
            for (var j = 0; j < itemsArray.length; j++) {
        if (itemsArray[j].id == edv) {
           document.querySelector('#etitle').value= itemsArray[j].title;
           document.querySelector('#edesc').value= itemsArray[j].desc ;
           document.querySelector('#epriority').value=itemsArray[j].priority;
           if (itemsArray[j].status=="Done"){
            document.getElementById('es0').checked = true;
        } 
    else if(itemsArray[j].status==="Inprogress")
     {
        document.getElementById('es1').checked = true;
     }
     else {
         document.getElementById('es2').checked=true;
    }
        
            if(itemsArray[j].type=="requirements") 
                {
                    document.getElementById('er1').checked=true;
     }
     else if(itemsArray[j].type=="testing")
        {
            document.getElementById('er2').checked=true;
     }
    else if(itemsArray[j].type=="development")
        {
            document.getElementById('er3').checked=true;
       }
    else {
        document.getElementById('er4').checked=true;
        
    }
break;
        }
    }


        });
    }
}






//Create Task ButtonEvent listner
ckt.addEventListener('click', function (e) {
    e.preventDefault();
     input = document.querySelector('#title').value;
    while(input=="")
        {
            input=prompt("enter title");
        }
    desc = document.querySelector('#desc').value;
     status;
    if (document.getElementById('s0').checked == true) {
        status = document.getElementById('s0').value;
    } else if (document.getElementById('s1').checked == true) {
        status = document.getElementById('s1').value;
    } else {
        status = document.getElementById('s2').value;
    }
    priority = document.querySelector('#priority').value;
    while(priority=="")
        {
            priority=prompt("enter Priority Number");
        }
     type;
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

input.value = " hello";
    forminvisiblemain();

    
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
