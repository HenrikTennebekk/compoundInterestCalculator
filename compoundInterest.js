document.getElementById("calculate").onclick = function () {
    var p = document.getElementById("principal").value;
    var a = document.getElementById("addition").value;
    var y = document.getElementById("years").value;
    var i = document.getElementById("interest").value;
    var t = Math.pow((i / 100 + 1), y) * p;

    document.getElementById("total").innerHTML = "The total would be: " + t.toFixed(2) + " after " + y + " years";
}
