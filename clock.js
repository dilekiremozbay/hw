let fullName = prompt("Adınızı ve Soyadınızı Giriniz: ");
let myName = document.querySelector("#myName")
myName.innerHTML = `${fullName.toUpperCase()}`




function clock() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    var d = new Date();
    var days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
    document.querySelector("#myDay").innerHTML = days[d.getDay()];




    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(clock, 1000);

}

clock();
