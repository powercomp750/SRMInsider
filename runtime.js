var modal1 = document.getElementById("ubCard");
var btn1 = document.getElementById("ubcard");
var span1 = document.getElementsByClassName("close1")[0];
var modal2 = document.getElementById("tpCard");
var btn2 = document.getElementById("tpcard");
var span2 = document.getElementsByClassName("close2")[0];
var topElements = document.querySelectorAll('.top');
var panelElements = document.querySelectorAll('.panel');

function addBlur() {
    topElements.forEach(function(element) {
        element.classList.add('blur');
    });
    panelElements.forEach(function(element) {
        element.classList.add('blur');
    });
}

function removeBlur() {
    topElements.forEach(function(element) {
        element.classList.remove('blur');
    });
    panelElements.forEach(function(element) {
        element.classList.remove('blur');
    });
}

btn1.onclick = function () {
    modal1.style.display = "block";
    setTimeout(function() {
        modal1.classList.add("show");
    }, 50); 
    addBlur(); 
};

span1.onclick = function () {
    modal1.classList.remove("show");
    setTimeout(function() {
        modal1.style.display = "none";
    }, 300); 
    removeBlur();
};


window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.classList.remove("show");
        setTimeout(function() {
            modal1.style.display = "none";
        }, 300); 
        removeBlur(); 
    }
};

btn2.onclick = function () {
    modal2.style.display = "block";
    setTimeout(function() {
        modal2.classList.add("show");
    }, 50); 
    addBlur(); 
};

span2.onclick = function () {
    modal2.classList.remove("show");
    setTimeout(function() {
        modal2.style.display = "none";
    }, 300); 
    removeBlur();
};


window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.classList.remove("show");
        setTimeout(function() {
            modal2.style.display = "none";
        }, 300); 
        removeBlur(); 
    }
};

