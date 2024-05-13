let bgdesktop = "md:bg-[url('./assets/home/background-home-desktop.jpg')]"
let bgmobile  =  "bg-[url('./assets/home/background-home-mobile.jpg')]"

const main = document.querySelector("#main");
const componentes = document.querySelector("#componentes");
main.classList.add(bgdesktop);
main.classList.add(bgmobile);

componentes.onclick = function(){
    console.log("Estoy haciendo click");
    let bgdesktop = "md:bg-[url('./assets/crew/background-crew-desktop.jpg')]"
    main.classList.add(bgdesktop)
}
