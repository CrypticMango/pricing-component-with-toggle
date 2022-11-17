const checkbox = document.getElementById("checkbox");
const monthly = document.getElementsByClassName("monthly-price");
const annually = document.getElementsByClassName("annual-price");

checkbox.addEventListener("click", sliderCheck)

function sliderCheck() {
    if (checkbox.checked) {
        monthly[0].style.display = "block";
        monthly[1].style.display = "block";
        monthly[2].style.display = "block";
        annually[0].style.display = "none";
        annually[1].style.display = "none";
        annually[2].style.display = "none";
       
    } else {
        monthly[0].style.display = "none";
        monthly[1].style.display = "none";
        monthly[2].style.display = "none";
        annually[0].style.display = "block";
        annually[1].style.display = "block";
        annually[2].style.display = "block";
    }
}
