//query Selectors
const tools = document.querySelectorAll(".item");
const rangeBtn = document.querySelector(".range-btn");
const picSelector = document.querySelector(".upload");
const picBox = document.querySelector(".img");
const pic = document.querySelector("img");
const displayVal = document.querySelector(".value");
const resetBtn = document.querySelector(".reset-btn");
let edited = false

window.onload = () => {
    //upload and load photos 
    picSelector.addEventListener("change", function() {
        const file = this.files[0];

        if(file) {
            const reader =  new FileReader();

            picBox.style.display = "block";

            reader.addEventListener("load",  function()  {
                pic.setAttribute("src", this.result);

            });
            reader.readAsDataURL(file)
        }else {
            picBox.style.display = "none"
        }
    })
// accessing items of editing
tools.forEach(tool => {
    tool.addEventListener("click", () => {
        rangeBtn.classList.add("active")
    })
})
//editing photo filters
rangeBtn.addEventListener("change", () => {
    displayVal.innerHTML = rangeBtn.value + "%";
    if(edited == false) {
        edited = true
    }
})
tools[0].addEventListener("click", () => {
    rangeBtn.addEventListener("change", () => {
        pic.style.filter = "brightness(" + rangeBtn.value + "%)";
    })
    displayVal.innerHTML = "100%"
    rangeBtn.value = 100
})
tools[1].addEventListener("click", () => {
    rangeBtn.addEventListener("change", () => {
        pic.style.filter = "contrast(" + rangeBtn.value + "%)";
    })
    displayVal.innerHTML = "100%"
    rangeBtn.value = 100
})
tools[2].addEventListener("click", () => {
    rangeBtn.addEventListener("change", () => {
        pic.style.filter = "grayscale(" + rangeBtn.value + "%)";
    })
    displayVal.innerHTML = "0%"
    rangeBtn.value = 0
})
tools[3].addEventListener("click", () => {
    rangeBtn.addEventListener("change", () => {
        pic.style.filter = "blur(" + rangeBtn.value + "px)";
    })
    displayVal.innerHTML = "0%"
    rangeBtn.value = 0
})
tools[4].addEventListener("click", () => {
    rangeBtn.addEventListener("change", () => {
        pic.style.filter = "hue-rotate(" + rangeBtn.value + "deg)";
    })
    displayVal.innerHTML = "0%"
    rangeBtn.value = 0
})
tools[5].addEventListener("click", () => {
    pic.classList.toggle("rotate");
    rangeBtn.classList.remove("active")
})
//reset the default
resetBtn.addEventListener("click", () => {
    location.reload();
})
}