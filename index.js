const zone_text = document.getElementById("ville");
const body = document.getElementById("body");

zone_text.addEventListener('change', function () {
    zone_text.classList.add("fait_tout_peter");
})

const img_test = document.getElementsByTagName("body");
const temp = Object.values(img_test);



zone_text.addEventListener('keyup', function () {
    // zone_text.classList.add("fait_tout_peter");
    console.log(zone_text.value)
    if (zone_text.value.toLowerCase() == "brésil" || zone_text.value.toLowerCase() == "bresil") {
        temp.forEach(link => {
            link.animate(
                aliceTumbling,
                aliceTiming
            )
        });


        // document.getElementById("body").animate(
        //     aliceTumbling,
        //     aliceTiming
        // )

        window.setTimeout(change_ppt, 5000);


        function change_ppt() {

            body.style.display = "none";
            console.log(body)
            console.log(document.getElementById("body"))

            let url = "http://127.0.0.1:5500/2.html"
            window.location.href = url;
        }
    }
}

)

var aliceTumbling = [
    { transform: 'rotate(0)', color: '#000', opacity: '1' }, //translate3D(-50%, -50%, 0)
    // { color: '#431236', offset: 0.3},
    { transform: 'rotate(3600deg)', color: '#000', opacity: '0' } //translate3D(-50%, -50%, 0)
];

var aliceTiming = {
    duration: 5000,
    iterations: 1,
    easing: "ease-in",
    fill: "forwards"
}