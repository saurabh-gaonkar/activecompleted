let serchbar = document.querySelector(".searchbar"),
dropper = document.querySelector(".dropper"),
searchlist = document.querySelector(".searchlist"),
checkall = document.querySelector(".check-all"),
all = document.querySelector(".all"),
active = document.querySelector(".active"),
completed = document.querySelector(".completed"),
clearcompleted = document.querySelector(".clearcompleted");


const crossfunction=()=>{
   let cross = document.querySelectorAll(".cross");
cross.forEach(i=>{
    i.addEventListener("click",()=>{
        let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
        getsearchitems.splice(i.dataset.id,1);
        localStorage.setItem("searchitems",JSON.stringify(getsearchitems));
        createlist();
    })
})

}

const createlist = () =>{
    crossfunction();
    searchlist.innerHTML = "";
    let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
getsearchitems.forEach((i,index)=>{
    if(i.checked === true){
    searchlist.innerHTML += `<li><input type="checkbox" checked="true" class="checkedbox">${i.name}<span class="cross" data-id="${index}"></span></li>`
    }else {
        searchlist.innerHTML += `<li><input type="checkbox" class="checkedbox">${i.name}<span class="cross" data-id="${index}"></span></li>`
    }
})

}

const checkboxfun = ()=>{
    crossfunction();
    let checkboxes = document.querySelectorAll(".checkedbox");
    searchlist.classList.add("active");
    checkall.classList.add("show");
    checkboxes.forEach((i,index)=>{
        i.addEventListener("click",()=>{
          let searchitems = JSON.parse(localStorage.getItem("searchitems"));
          if(i.checked === true) {
              searchitems[index].checked=true;
          }else {
              searchitems[index].checked=false;
          }
  
          localStorage.setItem("searchitems",JSON.stringify(searchitems));
        })
    })
}

const checkboxfilter = ()=>{
    crossfunction();
    let checkboxes = document.querySelectorAll(".checkedbox");
    searchlist.classList.add("active");
    checkall.classList.add("show");
    checkboxes.forEach((i,index)=>{
        i.addEventListener("click",()=>{
          let searchitems = JSON.parse(localStorage.getItem("searchitems"));
          if(i.checked === true) {
              searchitems[i.dataset.index].checked=true;
          }else {
              searchitems[i.dataset.index].checked=false;
          }
  
          localStorage.setItem("searchitems",JSON.stringify(searchitems));
        })
    })
}

const showlist = () => {
    createlist();
    checkboxfun();
}


serchbar.addEventListener("keyup",(e)=>{
    if(e.keyCode === 13) {
        if (!(localStorage.getItem("searchitems"))) {
            localStorage.setItem("searchitems", '[]');
        }

        let searchitems = JSON.parse(localStorage.getItem("searchitems")),
        newitem = serchbar.value;
        serchbar.value = "";
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
getsearchitems.forEach((i,index)=>{
    if(i.checked === false){
    searchlist.innerHTML += `<li><input type="checkbox" class="checkedbox" data-index="${index}">${i.name}<span class="cross" data-id="${index}"></span></li>`
    }
    localStorage.setItem("searchitems",JSON.stringify(getsearchitems));
})

checkboxfilter();
})

completed.addEventListener("click",()=>{
    searchlist.innerHTML = "";
    let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
getsearchitems.forEach((i,index)=>{
    if(i.checked === true){
    searchlist.innerHTML += `<li><input type="checkbox" checked="true" class="checkedbox" data-index="${index}">${i.name}<span class="cross" data-id="${index}"></span></li>`
    }
    localStorage.setItem("searchitems",JSON.stringify(getsearchitems));
})
checkboxfilter();
})

clearcompleted.addEventListener("click",()=>{
    searchlist.innerHTML = "";
    let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
    let newitems =[];
getsearchitems.forEach((i,index)=>{
    if(i.checked === false){
        newitems.push(i);
    }
})

localStorage.setItem("searchitems",JSON.stringify(newitems));

searchlist.classList.add("active");
createlist();
checkboxfun();
})

checkall.addEventListener("click",()=>{
    searchlist.innerHTML = "";
    let getsearchitems = JSON.parse(localStorage.getItem("searchitems"));
    if(checkall.checked === true){
        getsearchitems.forEach(i=>{
            i.checked = true;
        });
    }else {
        getsearchitems.forEach(i=>{
            i.checked = false;
        });
    }
   
    localStorage.setItem("searchitems",JSON.stringify(getsearchitems));
    getsearchitems.forEach((i,index)=>{
        if(i.checked === true){
        searchlist.innerHTML += `<li><input type="checkbox" checked="true" class="checkedbox">${i.name}<span class="cross" data-id="${index}"></span></li>`
        }else {
            searchlist.innerHTML += `<li><input type="checkbox" class="checkedbox">${i.name}<span class="cross" data-id="${index}"></span></li>`
        }
    })

checkboxfun();
})
crossfunction();











