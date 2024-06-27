function convertToUSD() {
    var nis = document.getElementById("amount").value;
    var usd = nis / 3.5;
    document.getElementById("result").innerText = nis + " NIS is equal to " + usd.toFixed(2) + " USD.";
}

function convertToJOD() {
    var nis = document.getElementById("amount").value;
    var jod = nis / 5;
    document.getElementById("result").innerText = nis + " NIS is equal to " + jod.toFixed(2) + " JOD.";
}
