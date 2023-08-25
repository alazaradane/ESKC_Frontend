$('#menu-btn').click(function(){
    $('#menu').toggleClass("active");
})

const toggleButton = document.getElementById("toggle");
            toggleButton.addEventListener("click", toggle);
function toggle() {
    const box = document.getElementById("courseAdd");
             box.classList.toggle("hidden");
        }