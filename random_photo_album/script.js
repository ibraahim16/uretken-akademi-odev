document.addEventListener("DOMContentLoaded", function () {
    const galeri = document.getElementById("galeri");

    function rasgeleResimURL() {
        return `https://source.unsplash.com/random/300x200?sig=${Math.random()}`;
    }

    function galeriyiDoldur() {
        galeri.innerHTML = "";

        for (let satir = 0; satir < 5; satir++) {
            for (let sutun = 0; sutun < 3; sutun++) {
                const resim = document.createElement("img");
                resim.src = rasgeleResimURL();
                resim.alt = "Rastgele Resim";
                galeri.appendChild(resim);
            }
        }
    }

    galeriyiDoldur();
});
