document.getElementById("calculate").onclick = function () {
    var p = document.getElementById("principal").value;
    var a = document.getElementById("addition").value;
    var y = document.getElementById("years").value;
    var i = document.getElementById("interest").value;
    var g = Math.pow((i / 100 + 1), y) * p;
    var gt = g - ((g - p) * (0.22 * 1.44));
    var tax = document.getElementById("tax");

    if (tax.checked = true) {
        document.getElementById("total").innerHTML = "The total would be: " + gt.toFixed(2) + " after " + y + " years";
    }
    else if (tax.checked = false) {
        document.getElementById("total").innerHTML = "The total would be: " + g.toFixed(2) + " after " + y + " years";
    }
}
