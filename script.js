const container = document.querySelector(".container");

document
.getElementById("show-register")
.onclick = () => {
    container.classList.add("active");
};

document
.getElementById("show-login")
.onclick = () => {
    container.classList.remove("active");
};