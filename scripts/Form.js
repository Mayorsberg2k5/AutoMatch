const  select_button = document.querySelector(".type_button"),
    items = document.querySelectorAll(".item");

select_button.addEventListener("click", () => {
    select_button.classList.toggle("open");

});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked")

        console.log(checked)

        let checked = document.querySelectorAll(".checked"),
            type_text = document.querySelector(".type_text");


            console.log(checked, type_text)

            
            if(checked && checked.length>0) {
                type_text.innerText = `${checked.length} Selected`
            }
            else {
                type_text.innerText =("Language Selected")
            }

    })

});
