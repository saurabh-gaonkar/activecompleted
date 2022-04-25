let serchbar = document.querySelector(".searchbar"),
dropper = document.querySelector(".dropper"),
searchlist = documen
serchbar.addEventListener("keyup",(e)=>{
    if(e.keyCode === 13) {
        if (!(localStorage.getItem("searchitems"))) {
            localStorage.setItem("searchitems", '[]');
        }

        let searchitems = JSON.parse(localStorage.getItem("searchitems")),
        newitem = serchbar.value;
        searchitems.push(newitem);
    }
})

.dropper.addEventListener("click",()=>{

})















