//Script for menu carousel
const itemImage = document.getElementById("itemImage");
if(itemImage) { //only runs if on the menu page, since we are forced to use one script.js
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


    const itemName = document.getElementById("itemName");
    const itemDesc = document.getElementById("itemDesc");
    const itemPrice = document.getElementById("itemPrice");

    //Using numberformat for currency
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    // shows image for current index
    function showItem(index) {
        const item = menuItems[index];
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemName.textContent = item.name;
        itemDesc.textContent = item.description;
        itemPrice.textContent = formatter.format(item.price);
    }

    //loads prev image when button is clicked
    function prevImage() {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        showItem(currentIndex);
    }
    //loads next image when button is clicked
    function nextImage() {
        currentIndex = (currentIndex + 1) % menuItems.length;
        showItem(currentIndex);
    }


    document.getElementById("prevBtn").addEventListener("click", prevImage);
    document.getElementById("nextBtn").addEventListener("click", nextImage);


    showItem(currentIndex);
}


//Script for hiring form
const myForm = document.getElementById("hiring-form");
if(myForm) { //only runs if on the hiring page since we can only use one script.js

    //initialize and assign variables by html element
    const dob = document.getElementById("birthDate")
    const dobError = document.getElementById("birthDateError")
    const phone = document.getElementById("phoneNumber")
    const phoneError = document.getElementById("phoneNumberError")
    const moreInfo = document.getElementById("moreInfo")
    const moreInfoError = document.getElementById("moreInfoError")
    const moreInfoCharCount = document.getElementById("charCounter")


    //validation script for date of birth to check age requirement
    dob.addEventListener("input", () => {
        const today = new Date();
        const min = new Date(today).setFullYear(today.getFullYear() - 21);
        const max = new Date(today).setFullYear(today.getFullYear() - 99);
        const enteredDate = new Date(dob.value)
        if ((max > enteredDate) || (min < enteredDate)) {
            dobError.textContent = "You are outside of the age requirements. Sorry!";
            dob.classList.add("invalid");
            return;
        } else {
            dobError.textContent = "";
            dob.classList.remove("invalid");
        }
    });

    //validation for phone number to auto format and check for correct input
    phone.addEventListener("input", () => {
        let value = phone.value;
        const number = value.replace(/\D/g, "");
        let formatted = "";
        if (number.length > 0) {
            formatted = number.substring(0, 3);
        }
        if (number.length >= 4) {
            formatted += "-" + number.substring(3, 6);
        }
        if (number.length >= 7) {
            formatted += "-" + number.substring(6, 10);
        }

        phone.value = formatted;

        if (/[a-zA-Z]/.test(value)) {
            phoneError.textContent = "Only numbers are allowed.";
            phone.classList.add("invalid");
        } else if (number.length < 10) {
            phoneError.textContent = "Phone number must be 10 digits.";
            phone.classList.add("invalid");
        } else {
            phoneError.textContent = "";
            phone.classList.remove("invalid");
        }
    });

    //validation of more info field, create 30 char countdown and not allows longer inputs
    moreInfo.addEventListener("input", () => {
        let value = moreInfo.value;
        const max = 30;
        const current = Number(value.length);
        moreInfoCharCount.textContent = "You have " + (max - current) + " characters remaining";
        if(max - current < 0) {
            moreInfoCharCount.textContent="";
            moreInfoError.textContent = "You have passed the character limit!";
            moreInfo.classList.add("invalid");
        }
        else {
            moreInfoError.textContent ="";
            moreInfo.classList.remove("invalid");
        }
    })

    //validation of all JS validated fields on submit, prints successful submission to console
    myForm.addEventListener("submit", (e) => {
        if (dobError.textContent || moreInfoError.textContent || phoneError.textContent) {
            e.preventDefault();
            alert("Please fix the errors before submitting.");
        }
        else {
            e.preventDefault();
            for (let element of myForm.elements) {
                if (element.type === "radio") {
                    if (element.checked) {
                        console.log(`${element.id}: ${element.value}`);
                    }
                } else if (element.type === "checkbox") {
                    if (element.checked) {
                        console.log(`${element.id}: ${element.value}`);
                    }
                } else {
                    console.log(`${element.id}: ${element.value}`);
                }
                }
            }
    });
}
