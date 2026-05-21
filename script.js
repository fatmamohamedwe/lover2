/* =========================
        OFFERS SLIDER
========================= */

const offers = document.querySelector(".offers-items");
const offerPrevBtn = document.querySelector(".offer-prev");
const offerNextBtn = document.querySelector(".offer-next");
let offerIndex = 0;

function slideOffer(direction) {
    if (!offers) return;
    const total = offers.children.length;
    offerIndex = (offerIndex + direction + total) % total;
    offers.style.transform = `translateX(-${offerIndex * 100}%)`;
}

if (offerPrevBtn && offerNextBtn && offers) {
    offerNextBtn.onclick = () => slideOffer(1);
    offerPrevBtn.onclick = () => slideOffer(-1);
    setInterval(() => slideOffer(1), 5000);
}

/* =========================
        MENU SECTION
========================= */

const menuItems = [
    {
        name: "LASAL CHEESE",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food1.png"
    },
    {
        name: "JUMBO CRAB SHRIMP",
        price: "$24.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food2.png"
    },
    {
        name: "KOKTAIL JUICE",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food3.png"
    },
    {
        name: "CAPO STEAK",
        price: "$60.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food4.png"
    },
    {
        name: "ORGANIC FRUIT SALAD",
        price: "$8.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food5.png"
    },
    {
        name: "CHEESE PIZZA",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food6.png"
    },
    {
        name: "KOFTA MEAT",
        price: "$40.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food7.jpeg"
    },
    {
        name: "SPANISH PIES",
        price: "$14.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food8.jpeg"
    },
    {
        name: "CHEESE TOST",
        price: "$6.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food9.jpeg"
    },
    {
        name: "FRUIT SALAD",
        price: "$14.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food10.jpeg"
    },
    {
        name: "CHICKEN SHAWARMA",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food11.jpeg"
    },
    {
        name: "MEGA CHEESE PIZZA",
        price: "$30.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
        image: "./images/food12.jpeg"
    }
];

const menuItemsLeft = document.getElementById("menu-items-left");
const menuItemsRight = document.getElementById("menu-items-right");

if (menuItemsLeft && menuItemsRight) {
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name} <span>${item.price}</span></h3>
                <p>${item.description}</p>
            </div>
        `;

        if (index < 6) {
            menuItemsLeft.appendChild(menuItem);
        } else {
            menuItemsRight.appendChild(menuItem);
        }
    });
}

/* =========================
        GALLERY SECTION
========================= */

const galleryImages = document.querySelectorAll(".img-gallery img");
const boxContainer = document.getElementById("boxContainer");
const boxItem = document.getElementById("boxItem");
const galleryPrevBtn = document.getElementById("gallery-prev");
const galleryNextBtn = document.getElementById("gallery-next");
const galleryCloseBtn = document.getElementById("gallery-close");

let currentGalleryIndex = 0;
const gallerySrcs = Array.from(galleryImages).map((img) => img.src);

function showGalleryImage(index) {
    if (!boxItem) return;
    boxItem.style.backgroundImage = `url(${gallerySrcs[index]})`;
}

function openGallery(index) {
    if (!boxContainer) return;
    currentGalleryIndex = index;
    showGalleryImage(index);
    boxContainer.style.display = "flex";
}

galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => openGallery(index));
});

galleryCloseBtn?.addEventListener("click", () => {
    boxContainer.style.display = "none";
});

galleryNextBtn?.addEventListener("click", () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % gallerySrcs.length;
    showGalleryImage(currentGalleryIndex);
});

galleryPrevBtn?.addEventListener("click", () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + gallerySrcs.length) % gallerySrcs.length;
    showGalleryImage(currentGalleryIndex);
});

boxContainer?.addEventListener("click", (event) => {
    if (event.target === boxContainer) {
        boxContainer.style.display = "none";
    }
});

/* =========================
        FORM VALIDATION
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const subjectError = document.getElementById("subject-error");
        const messageError = document.getElementById("message-error");

        [nameError, emailError, subjectError, messageError].forEach((element) => {
            if (element) {
                element.textContent = "";
            }
        });

        let valid = true;

        if (name === "") {
            nameError.textContent = "Please enter your name.";
            valid = false;
        } else if (name.length < 3 || name.length > 15) {
            nameError.textContent = "Name must be 3–15 characters.";
            valid = false;
        }

        if (email === "") {
            emailError.textContent = "Please enter your email.";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.textContent = "Please enter a valid email.";
            valid = false;
        }

        if (subject !== "" && subject.length < 3) {
            subjectError.textContent = "Subject must be at least 3 characters.";
            valid = false;
        }

        if (message !== "" && message.length < 5) {
            messageError.textContent = "Message must be at least 5 characters.";
            valid = false;
        }

        if (valid) {
            alert("Form submitted successfully!");
            contactForm.reset();
        }
    });
}
