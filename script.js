/* =========================================
   MOBILE MENU
========================================= */

const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

mobileToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");

  mobileToggle.textContent =
    mobileMenu.classList.contains("open") ? "✕" : "☰";
});


document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

    mobileToggle.textContent = "☰";

  });

});


/* =========================================
   MENU DATA
========================================= */

const menuData = {

  starters: [

    {
      name: "Crispy Corn",
      price: "₹199",
      description: "Crispy sweet corn tossed with herbs and spices.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Paneer Tikka",
      price: "₹249",
      description: "Soft paneer marinated with aromatic spices and grilled.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Chicken 65",
      price: "₹279",
      description: "Crispy, spicy chicken tossed with curry leaves.",
      tag: "NON-VEG",
      image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Chicken Tikka",
      price: "₹299",
      description: "Tender chicken pieces grilled with classic spices.",
      tag: "NON-VEG",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
    }

  ],


  mains: [

    {
      name: "Paneer Butter Masala",
      price: "₹249",
      description: "Creamy tomato gravy with tender paneer.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Butter Chicken",
      price: "₹329",
      description: "Tender chicken in a rich, creamy tomato sauce.",
      tag: "NON-VEG",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Dal Tadka",
      price: "₹189",
      description: "Yellow lentils finished with aromatic tempering.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Veg Fried Rice",
      price: "₹219",
      description: "Fragrant rice tossed with fresh vegetables.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
    }

  ],


  biryani: [

    {
      name: "Chicken Biryani",
      price: "₹299",
      description: "Aromatic basmati rice layered with tender chicken.",
      tag: "BESTSELLER",
      image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Mutton Biryani",
      price: "₹399",
      description: "Slow-cooked mutton layered with fragrant basmati rice.",
      tag: "CHEF'S SPECIAL",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Veg Biryani",
      price: "₹249",
      description: "Fragrant rice cooked with vegetables and aromatic spices.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Family Biryani",
      price: "₹699",
      description: "A generous biryani platter made for sharing.",
      tag: "SHARING",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80"
    }

  ],


  desserts: [

    {
      name: "Gulab Jamun",
      price: "₹99",
      description: "Warm soft dumplings served with sweet syrup.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1666190094762-c1d4f5d54b99?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Chocolate Brownie",
      price: "₹149",
      description: "Rich chocolate brownie served warm.",
      tag: "FAVOURITE",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Kulfi",
      price: "₹119",
      description: "Creamy traditional Indian frozen dessert.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Ice Cream",
      price: "₹99",
      description: "Ask about today's available flavours.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
    }

  ],


  drinks: [

    {
      name: "Fresh Lime Soda",
      price: "₹79",
      description: "Refreshing lime soda served chilled.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Mango Shake",
      price: "₹149",
      description: "Creamy mango shake made with fresh mangoes.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Cold Coffee",
      price: "₹139",
      description: "Smooth chilled coffee with a creamy finish.",
      tag: "VEG",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
    },

    {
      name: "Masala Chai",
      price: "₹69",
      description: "Classic Indian tea brewed with aromatic spices.",
      tag: "HOT",
      image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=600&q=80"
    }

  ]

};


/* =========================================
   RENDER MENU
========================================= */

const menuGrid = document.getElementById("menuGrid");
const menuTabs = document.querySelectorAll(".menu-tab");


function renderMenu(category) {

  menuGrid.innerHTML = "";

  menuData[category].forEach(item => {

    const card = document.createElement("article");

    card.className = "menu-item";

    card.innerHTML = `

      <div class="menu-item-image">

        <img
          src="${item.image}"
          alt="${item.name}"
          loading="lazy"
        />

      </div>

      <div class="menu-item-content">

        <div class="menu-item-title">

          <h3>
            ${item.name}
          </h3>

          <span class="menu-item-price">
            ${item.price}
          </span>

        </div>

        <p>
          ${item.description}
        </p>

        <span class="menu-tag">
          ${item.tag}
        </span>

      </div>

    `;

    menuGrid.appendChild(card);

  });

}


renderMenu("starters");


menuTabs.forEach(tab => {

  tab.addEventListener("click", () => {

    menuTabs.forEach(button => {
      button.classList.remove("active");
    });

    tab.classList.add("active");

    const category = tab.dataset.category;

    renderMenu(category);

  });

});


/* =========================================
   RESERVATION → WHATSAPP
========================================= */

const reservationForm =
  document.getElementById("reservationForm");


reservationForm.addEventListener("submit", function(event) {

  event.preventDefault();


  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const date =
    document.getElementById("date").value;

  const guests =
    document.getElementById("guests").value;

  const time =
    document.getElementById("time").value;

  const message =
    document.getElementById("message").value.trim();


  const whatsappMessage =

`Hello JS Restaurant 👋

I would like to reserve a table.

Name: ${name}
Phone: ${phone}
Date: ${date}
Guests: ${guests}
Preferred Time: ${time}
Special Request: ${message || "None"}

Thank you.`;


  const whatsappURL =
    `https://wa.me/916301865012?text=${encodeURIComponent(whatsappMessage)}`;


  window.open(
    whatsappURL,
    "_blank"
  );

});


/* =========================================
   DATE — PREVENT PAST DATES
========================================= */

const dateInput =
  document.getElementById("date");

const today =
  new Date().toISOString().split("T")[0];

dateInput.min = today;


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(element => {

  observer.observe(element);

});


/* =========================================
   NAVBAR SHADOW ON SCROLL
========================================= */

const navbar =
  document.getElementById("navbar");


window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,.25)";

  } else {

    navbar.style.boxShadow =
      "none";

  }

});