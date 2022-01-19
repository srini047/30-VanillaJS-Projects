function black() {
    document.getElementById('defaultImage').src = "/11-Buy Smartwatch/assets/black.png";
}

function red() {
    document.getElementById('defaultImage').src = "/11-Buy Smartwatch/assets/red.png";
}

function blue() {
    document.getElementById('defaultImage').src = "/11-Buy Smartwatch/assets/blue.png";
}

function brown() {
    document.getElementById('defaultImage').src = "/11-Buy Smartwatch/assets/brown.png";
}

function peach() {
    document.getElementById('defaultImage').src = "/11-Buy Smartwatch/assets/peach.png";
}

function timer() {
    document.getElementById('heart').style.visibility = 'hidden';
    document.getElementById('heart-rate').style.visibility = 'hidden';
    document.getElementById('time').style.visibility = 'visible';

    setInterval(() => {
        function addZero(e) {
            if (e < 10) {
                e += '0';
            }

            return e;
        }

        var date = new Date();
        var h = addZero(date.getHours());
        var m = addZero(date.getMinutes());
        var s = addZero(date.getSeconds());
        document.getElementById('time').innerHTML = h + " : " + m + " : " + s;
    }, 0);
}

function heartbeat() {

    document.getElementById('time').style.visibility = 'hidden';
    document.getElementById('heart').style.visibility = 'visible';
    document.getElementById('heart-rate').style.visibility = 'visible';
}

