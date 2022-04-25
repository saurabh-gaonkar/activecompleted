let serchbar = document.querySelector(".searchbar"),
dropper = document.querySelector(".dropper"),
searchlist = document.querySelector(".searchlist"),
checkall = document.querySelector(".check-all"),
all = document.querySelector(".all"),
active = document.querySelector(".active"),
completed = document.querySelector(".completed"),
clearcompleted = document.querySelector(".clearcompleted");


const createlist = () =>{
    searchlist.innerHTML = "";
    let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
getsearchitems.forEach(i=>{
    if(i.checked === true){
    searchlist.innerHTML += `<li><input type="checkbox" checked="true" class="checkedbox">${i.name}</li>`
    }else {
        searchlist.innerHTML += `<li><input type="checkbox" class="checkedbox">${i.name}</li>`
    }
})

}


const showlist = () => {
    createlist();
    let checkboxes = document.querySelectorAll(".checkedbox");
  searchlist.classList.add("active");
  checkall.classList.add("show");
  checkboxes.forEach((i,index)=>{
      i.addEventListener("click",()=>{
        let searchitems = JSON.parse(localStorage.getItem("searchitems"));
        searchitems[index].checked=true;
        localStorage.setItem("searchitems",JSON.stringify(searchitems));
      })
  })
}


serchbar.addEventListener("keyup",(e)=>{
    if(e.keyCode === 13) {
        if (!(localStorage.getItem("searchitems"))) {
            localStorage.setItem("searchitems", '[]');
        }

        let searchitems = JSON.parse(localStorage.getItem("searchitems")),
        newitem = serchbar.value;
        falsevalue = false;
        searchitems.forEach(i=>{
            if(i.name === newitem || newitem === "") {
                falsevalue = true;
            }
        })
        if(falsevalue === false) {
        newobject = {name:newitem,checked:false};
        searchitems.push(newobject);
        localStorage.setItem("searchitems",JSON.stringify(searchitems));
        }
        showlist();
    }
})

dropper.addEventListener("click",showlist);

all.addEventListener("click",showlist);

active.addEventListener("click",()=>{
    searchlist.innerHTML = "";
    let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
getsearchitems.forEach(i=>{
    if(i.checked === false){
    searchlist.innerHTML += `<li><input type="checkbox" class="checkedbox">${i.name}</li>`
    }
})
searchlist.classList.add("active");
})

completed.addEventListener("click",()=>{
    searchlist.innerHTML = "";
    let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
getsearchitems.forEach(i=>{
    if(i.checked === true){
    searchlist.innerHTML += `<li><input type="checkbox" checked="true" class="checkedbox">${i.name}</li>`
    }
})
searchlist.classList.add("active");
})

clearcompleted.addEventListener("click",()=>{
    searchlist.innerHTML = "";
    let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
getsearchitems.forEach((i,index)=>{
    if(i.checked === true){
        getsearchitems.splice(index,1);
    }
})
localStorage.setItem("searchitems",JSON.stringify(getsearchitems));
searchlist.classList.add("active");
})

checkall.addEventListener("click",()=>{
    searchlist.innerHTML = "";
    let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
    getsearchitems.forEach(i=>{
        i.checked = true;
    });
    localStorage.setItem("searchitems",JSON.stringify(getsearchitems));
    getsearchitems.forEach(i=>{
        if(i.checked === true){
        searchlist.innerHTML += `<li><input type="checkbox" checked="true" class="checkedbox">${i.name}</li>`
        }else {
            searchlist.innerHTML += `<li><input type="checkbox" class="checkedbox">${i.name}</li>`
        }
    })
})













