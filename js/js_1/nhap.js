function cal1() {
    let A = 0, B = 0, C = 0;
    const checka = document.getElementById("a");
    if (!checka.checkValidity()) {
        document.getElementById("a").value = "nhập a";
        A = 1;
    }
    const checkb = document.getElementById("b");
    if (!checkb.checkValidity()) {
        document.getElementById("b").value = "nhập b";
        B = 1;
    }
    const checkc = document.getElementById("c");
    if (!checkc.checkValidity()) {
        document.getElementById("c").value = "nhập c";
        C = 1;
    }

    if (A == 0 && B == 0 && C == 0) {
        let a = parseInt(document.getElementById("a").value);
        let b = parseInt(document.getElementById("b").value);
        let c = parseInt(document.getElementById("c").value);

        if (a + b > c && b + c > a && a + c > b) {
            let cv = a + b + c;
            let p = cv / 2;
            let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            document.getElementById("ans1").value = "chu vi = " + cv + ", " + "diện tích = " + s.toFixed(2);
        }
        else
            document.getElementById("ans1").value = a + ", " + b + ", " + c + " không phải 3 cạnh tam giác";
    }
}

function prime(i) {
    for (let j = 2; j * j <= i; j++)
        if (i % j == 0) return 0;
    return 1;
}

function cal2() {
    let n = parseInt(document.getElementById("n").value);
    if (prime(n) == 1) {
        document.getElementById("ans2").value = " ";
        for (let i = 2; i <= n; i++)
            if (prime(i) == 1) {
                document.getElementById("ans2").value += i + " ";
            }
            else continue;
    }
    else document.getElementById("ans2").value = n + " không phải số nguyên tố";
}