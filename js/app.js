document.addEventListener("DOMContentLoaded",()=>{
    let button_show = document.querySelector(".form_show_button")
    let show_form_div = document.querySelector(".form_contact")
    let hide_div_list = document.querySelector(".list_date")
    let button_m = document.querySelector(".btbt")
    let menu_sh = document.querySelector(".menu_hide_div")
    let explication_text = document.querySelector(".explication>p")
    let firsta_b = document.querySelector(".first_a")
    let seconda_b = document.querySelector(".second_a")
    let thirda_b = document.querySelector(".third_a")
    let body_change = document.querySelector(".body")
let hideh = document.querySelector(".titlepresent")
var iazaz = 0;
let button_show_menu = document.querySelector("#hovered_menu")
let drop_dow_menu = document.querySelector(".menuu_toggled")
button_show_menu.addEventListener("mouseover",()=>{
    drop_dow_menu.classList.toggle("menuu_toggled_hide")
})

var span_text = '<span class="oussama">';
var span_underline_bw = '<span class="diane_bw">';
var span_close ="</span>"
    function changeee() {


      var docada = document.getElementById("pab");

      var colorrs = ['- 50% '+span_underline_bw+'AVEC LE CODE'+span_close+span_text+' : SOLDES50'+span_close,span_text+'MERCO'+span_close+" (LA MEME QUE CELLE DU COIMPTABLE))",span_text+'UNE GOVA À VENDRE'+span_close+" CETTE SEMAINE"];
      docada.innerHTML = colorrs[iazaz];
      iazaz = (iazaz + 1) % colorrs.length;
    }
    setInterval(changeee, 1700);

/*
    button_show.addEventListener("click",()=>{
        show_form_div.classList.toggle("form_contact_show")
        hide_div_list.classList.toggle("list_date_hide")
        hideh.classList.toggle("hide")
    })*/
button_m.addEventListener("click",()=>{
    body_change.classList.toggle("body_change")

    menu_sh.classList.toggle("menu_show_div")
})

firsta_b.addEventListener("click",()=>{
    explication_text.textContent="Reprogrammation de vos clés de votre véhicule . Toutes marques. Sur RDV avec présentation de votre carte grise. Gestion de votre dossier sans frais"
})
seconda_b.addEventListener("click",()=>{
    explication_text.textContent="Passage à l'outil diagnostic toutes marques. Compte rendu avec devis (*payant).Effacement des défauts"
})
thirda_b.addEventListener("click",()=>{
    explication_text.textContent="Lors de vos achats de pièce auto n'hésitez pas à consulter notre équipe pour le montage de vos pièces"
})
})
