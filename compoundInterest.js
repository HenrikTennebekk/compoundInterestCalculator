document.getElementById("calculate").onclick = function () {
    var p = document.getElementById("principal").value;
    var a = document.getElementById("addition").value;
    var y = document.getElementById("years").value;
    var i = document.getElementById("interest").value;
    var t = p * (i / 100 + 1) ^ y;

    document.getElementById("total").innerHTML = "The total would be: " + t + " after " + y + " years";
}
