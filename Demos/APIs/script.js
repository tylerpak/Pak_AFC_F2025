const img = document.getElementById("dogImg");
const button = document.getElementById("dogButton")

button.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            img.src = data.message;
        });
})