let serchbar = document.querySelector(".searchbar"),
dropper = document.querySelector(".dropper"),
searchlist = document.querySelector(".searchlist");
serchbar.addEventListener("keyup",(e)=>{
    if(e.keyCode === 13) {
        if (!(localStorage.getItem("searchitems"))) {
            localStorage.setItem("searchitems", '[]');
        }

        let searchitems = JSON.parse(localStorage.getItem("searchitems")),
        newitem = serchbar.value;
        searchitems.push(newitem);
        localStorage.setItem("searchitems",JSON.stringify(searchitems));
    }

})

let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
getsearchitems.forEach(i=>{
    searchlist.innerHTML += `<option><input type="checkbox">${i}</option>`
})

// dropper.addEventListener("click",()=>{
    
// })















