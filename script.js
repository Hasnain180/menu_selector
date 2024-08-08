

let selectfield = document.getElementById("selectorfield");
let selecttext = document.getElementById("selecttext");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowicon = document.getElementById("arrowicon")

selectfield.onclick = function(){
    list.classList.toggle("hide");
    arrowicon.classList.toggle("rotate")
}

for(target of options){
    target.onclick = function(){
        event.preventDefault();
        selecttext.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowicon.classList.toggle("rotate")
    }
};