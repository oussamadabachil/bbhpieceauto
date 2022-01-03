document.addEventListener("DOMContentLoaded",()=>{
    let button_show = document.querySelector(".form_show_button")
    let show_form_div = document.querySelector(".form_contact")
    let hide_div_list = document.querySelector(".list_date")
    let button_m = document.querySelector(".btbt")
    let menu_sh = document.querySelector(".menu_hide_div")

let hideh = document.querySelector(".titlepresent")

    button_show.addEventListener("click",()=>{
        show_form_div.classList.toggle("form_contact_show")
        hide_div_list.classList.toggle("list_date_hide")
        hideh.classList.toggle("hide")
    })

button_m.addEventListener("click",()=>{
    menu_sh.classList.toggle("menu_show_div")
})
})

