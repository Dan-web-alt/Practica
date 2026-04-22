//ro/ru
const translations = {
  ro: {
    title: "AUTOrevizor - Testare Auto",
    logo: "AUTOrevizor",

    "nav-home": "Acasă",
    "nav-services": "Servicii",
    "nav-booking": "Programare",
    "nav-contact": "Contact",

    "welcome-title": "Bine ați venit la AUTOrevizor!",
    "welcome-text": "Stația ITP unde siguranța și profesionalismul sunt pe primul loc.",
    footer: "© AUTOrevizor | Made by Goncearuc Dan Company",

    "services-title": "Serviciile noastre - AUTOrevizor",
    "services-header": "Serviciile noastre",
    "services-desc": "Tarife pentru testarea tehnică și inspecția vehiculelor conform normelor naționale.",
    "col-nr": "Nr.",
    "col-item": "Obiectul impunerii",
    "col-unit": "Unitate",
    "col-tax": "Taxa (lei)",
    "btn-book-now": "Programează-te acum",

    "booking-title": "Programare - AUTOrevizor",
    "booking-header": "Programare Online",
    "veh-select": "Selectați tipul vehiculului",
    "veh-car": "Autoturism",
    "veh-van": "Autoutilitară",
    "veh-moto": "Motocicletă",
    "booking-send": "Trimite programarea",

    "contact-title": "Contact - AUTOrevizor",
    "contact-header": "Contactează-ne",
    "address-label": "Adresă:",
    "address-text": "Str. Independenței 142, Rîșcani, Republica Moldova",
    "phone-label": "Telefon:",
    "mail-label": "Email:",
    "program-label": "Program de lucru:",
    "program-hours": "Luni - Vineri: 08:00 - 17:00<br>Sâmbătă: 08:00 - 12:00<br>Duminică: Închis"
  },

  ru: {
    title: "AUTOrevizor - Автотестирование",
    logo: "AUTOревизор",

    "nav-home": "Главная",
    "nav-services": "Услуги",
    "nav-booking": "Запись",
    "nav-contact": "Контакты",

    "welcome-title": "Добро пожаловать в AUTOrevizor!",
    "welcome-text": "СТО, где безопасность и профессионализм на первом месте.",
    footer: "© AUTOrevizor | Сделано Goncearuc Dan Company",

    "services-title": "Наши услуги - AUTOrevizor",
    "services-header": "Наши услуги",
    "services-desc": "Тарифы на техосмотр и инспекцию транспортных средств.",
    "col-nr": "№",
    "col-item": "Объект обложения",
    "col-unit": "Ед. изм.",
    "col-tax": "Тариф (лей)",
    "btn-book-now": "Записаться",

    "booking-title": "Запись - AUTOrevizor",
    "booking-header": "Онлайн запись",
    "veh-select": "Выберите тип транспорта",
    "veh-car": "Легковой автомобиль",
    "veh-van": "Грузовой",
    "veh-moto": "Мотоцикл",
    "booking-send": "Отправить",

    "contact-title": "Контакты - AUTOrevizor",
    "contact-header": "Связаться с нами",
    "address-label": "Адрес:",
    "address-text": "ул. Независимости 142, Рысканы, Республика Молдова",
    "phone-label": "Телефон:",
    "mail-label": "Email:",
    "program-label": "График работы:",
    "program-hours": "Пн-Пт: 08:00 - 17:00<br>Сб: 08:00 - 12:00<br>Вс: Закрыто"
  }
};

let currentLang = localStorage.getItem("lang") || "ro";

//aplic translatie
function applyLanguage() {
  const dict = translations[currentLang];

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-placeholder-ro]").forEach(el => {
    el.placeholder = currentLang === "ro"
      ? el.dataset.placeholderRo
      : el.dataset.placeholderRu;
  });

 //tabel ro/ru
  const tabelRO = document.getElementById("tabel-ro");
  const tabelRU = document.getElementById("tabel-ru");

  if (tabelRO && tabelRU) {
    if (currentLang === "ro") {
      tabelRO.style.display = "table";
      tabelRU.style.display = "none";
    } else {
      tabelRO.style.display = "none";
      tabelRU.style.display = "table";
    }
  }
}

//alege limba
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLanguage();
}

document.addEventListener("DOMContentLoaded", applyLanguage);

//google sheets
const form = document.getElementById('programare-form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
      nume: document.getElementById('nume').value,
      telefon: document.getElementById('telefon').value,
      tipVehicul: document.getElementById('tipVehicul').value,
      dataProgramare: document.getElementById('dataProgramare').value
    };

    fetch('https://script.google.com/macros/s/AKfycbw5LQRlqFspv7oPrJ2nRKaKnhp7csGld6Bmq3ghlB2KatB9CJU_9P0QecClxvBY4M0aAQ/exec', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        alert(currentLang === "ro"
          ? 'Programarea a fost trimisă cu succes!'
          : 'Заявка успешно отправлена!');
        form.reset();
      })
      .catch(error => {
        alert(currentLang === "ro"
          ? 'Eroare la trimitere!'
          : 'Ошибка отправки!');
        console.error(error);
      });
  });
}
function toggleMenu() {
  const menu = document.querySelector("nav ul");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
