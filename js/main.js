var outCtn = document.getElementById('outCtn');
var addBtn = document.getElementById('incrBtn');
var numIpt = document.getElementById('numIpt');
var addBtn = document.getElementById('decrBtn');

outPut = 0;
numIpt.value = 1;

var black = function() {
    if (outPut >= 0) {
        outCtn.classList.add('normal');
    }
}


function addNum() {
    outPut += parseInt(numIpt.value);
    outCtn.textContent = outPut;
    
    if (outPut >= 0) {
        outCtn.classList.remove('danger');
    }
}

function decNum() {
    outPut -= parseInt(numIpt.value);
    outCtn.textContent = outPut;
    if (outPut < 0) {
        outCtn.classList.add('danger');
    } 
}

// function danger() {
    
// }

// danger();

// else if (outPut >= 0) {
//     outCtn.classList.remove('danger');
// }




