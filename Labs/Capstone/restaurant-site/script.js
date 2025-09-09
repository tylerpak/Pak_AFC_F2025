const menuItems = [
    {
        name: "Straight",
        description: "Classic creamy succulent gruel made how your mom used to",
        price: 36.99,
        image: "./resources/images/straightMenu.png"
    },
    {
        name: "The one with beef",
        description: "Chunks of beef charred black will get your mouth watering",
        price: 42.50,
        image: "./resources/images/beefMenu.png"
    },
    {
        name: "The one with chicken",
        description: "Chunks of chicken cooked rare for flavor",
        price: 42.50,
        image: "./resources/images/chickenMenu.png"
    }
];

let currentIndex = 0;


const itemImage = document.getElementById("itemImage");
const itemName = document.getElementById("itemName");
const itemDesc = document.getElementById("itemDesc");
const itemPrice = document.getElementById("itemPrice");


const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});


function showItem(index) {
    const item = menuItems[index];
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemName.textContent = item.name;
    itemDesc.textContent = item.description;
    itemPrice.textContent = formatter.format(item.price);
}


function prevImage() {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    showItem(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % menuItems.length;
    showItem(currentIndex);
}


document.getElementById("prevBtn").addEventListener("click", prevImage);
document.getElementById("nextBtn").addEventListener("click", nextImage);


showItem(currentIndex);