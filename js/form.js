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



button_m.addEventListener("click",()=>{
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
