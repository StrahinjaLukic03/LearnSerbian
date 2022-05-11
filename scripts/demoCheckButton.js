function demoCheckButton() {
    var i = 0;
    var j = 0;

    // 1st

    var id = document.getElementById("11").value;

    j++;
    if(id == "м") {
        document.getElementById("11").style.borderColor = "green";
        i++;
    }
    else {
        document.getElementById("11").style.borderColor = "red";
    }

    // 2nd

    var id = document.getElementById("12").value;

    j++;
    if(id == "ш") {
        document.getElementById("12").style.borderColor = "green";
        i++;
    }
    else {
    document.getElementById("12").style.borderColor = "red";
    }

    // 3rd

    var id = document.getElementById("13").value;

    j++;
    if(id == "мо") {
        document.getElementById("13").style.borderColor = "green";
        i++;
    }
    else {
        document.getElementById("13").style.borderColor = "red";
    }

    // 4th

    var id = document.getElementById("14").value;

    j++;
    if(id == "ју") {
        document.getElementById("14").style.borderColor = "green";
        i++;
    }
    else {
        document.getElementById("14").style.borderColor = "red";
    }

    // 5th

    var id = document.getElementById("15").value;

    j++;
    if(id == "ју") {
        document.getElementById("15").style.borderColor = "green";
        i++;
    }
    else {
        document.getElementById("15").style.borderColor = "red";
    }

    // 6th

    var id = document.getElementById("21").value;

    j++;
    if(id == "прича") {
        document.getElementById("21").style.borderColor = "green";
        i++;
    }
    else {
        document.getElementById("21").style.borderColor = "red";
    }

    document.getElementById("panelMessage").innerText = "You answered " + i + "/" + j + " correctly.";
}