// ============================================================
//  TRANSLATIONS  (ro / ru)
// ============================================================
const translations = {
  ro: {
    title: "AUTOrevizor - Testare Auto",
    logo: "AUTOrevizor",

    "nav-home": "Acasă",
    "nav-services": "Servicii",
    "nav-booking": "Programare",
    "nav-contact": "Contact",
    "nav-logout": "Deconectare",

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
    "program-hours": "Luni - Vineri: 08:00 - 17:00<br>Sâmbătă: 08:00 - 12:00<br>Duminică: Închis",

    // Register
    "register-title": "Înregistrare - AUTOrevizor",
    "register-header": "Creare Cont Nou",
    "register-send": "Creează cont",
    "have-account": "Ai deja un cont?",
    "go-login": "Autentifică-te",

    // Login
    "login-title": "Autentificare - AUTOrevizor",
    "login-header": "Autentificare",
    "login-send": "Autentifică-te",
    "no-account": "Nu ai cont?",
    "go-register": "Înregistrează-te",

    // Mesaje validare register
    "err-empty": "Câmpul nu poate fi gol.",
    "err-email": "Emailul nu este valid.",
    "err-phone": "Telefonul trebuie să conțină doar cifre.",
    "err-pass-len": "Parola trebuie să aibă minimum 8 caractere.",
    "err-pass-match": "Parolele nu coincid.",
    "err-email-exists": "Acest email este deja înregistrat.",
    "success-register": "Cont creat cu succes! Redirecționare...",

    // Mesaje login
    "err-login": "Email sau parolă incorectă.",
    "success-login": "Autentificare reușită! Bun venit!"
  },

  ru: {
    title: "AUTOrevizor - Автотестирование",
    logo: "AUTOревизор",

    "nav-home": "Главная",
    "nav-services": "Услуги",
    "nav-booking": "Запись",
    "nav-contact": "Контакты",
    "nav-logout": "Выйти",

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
    "program-hours": "Пн-Пт: 08:00 - 17:00<br>Сб: 08:00 - 12:00<br>Вс: Закрыто",

    // Register
    "register-title": "Регистрация - AUTOrevizor",
    "register-header": "Создание Аккаунта",
    "register-send": "Создать аккаунт",
    "have-account": "Уже есть аккаунт?",
    "go-login": "Войти",

    // Login
    "login-title": "Авторизация - AUTOrevizor",
    "login-header": "Авторизация",
    "login-send": "Войти",
    "no-account": "Нет аккаунта?",
    "go-register": "Зарегистрироваться",

    // Mesaje validare register
    "err-empty": "Поле не может быть пустым.",
    "err-email": "Email недействителен.",
    "err-phone": "Телефон должен содержать только цифры.",
    "err-pass-len": "Пароль должен содержать минимум 8 символов.",
    "err-pass-match": "Пароли не совпадают.",
    "err-email-exists": "Этот email уже зарегистрирован.",
    "success-register": "Аккаунт создан! Перенаправление...",

    // Mesaje login
    "err-login": "Неверный email или пароль.",
    "success-login": "Вход выполнен успешно! Добро пожаловать!"
  }
};

// ============================================================
//  LIMBĂ
// ============================================================
let currentLang = localStorage.getItem("lang") || "ro";

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

  // tabel servicii ro/ru
  const tabelRO = document.getElementById("tabel-ro");
  const tabelRU = document.getElementById("tabel-ru");
  if (tabelRO && tabelRU) {
    tabelRO.style.display = currentLang === "ro" ? "table" : "none";
    tabelRU.style.display = currentLang === "ru" ? "table" : "none";
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLanguage();
}

// ============================================================
//  HELPERS: localStorage pentru utilizatori
// ============================================================

function getUsers() {
  const raw = localStorage.getItem("autorevizor_users");
  return raw ? JSON.parse(raw) : [];
}

function saveUsers(users) {
  localStorage.setItem("autorevizor_users", JSON.stringify(users));
}

function getSession() {
  const raw = localStorage.getItem("autorevizor_session");
  return raw ? JSON.parse(raw) : null;
}

// ============================================================
//  AUTH GUARD — pagini protejate
// ============================================================
const PUBLIC_PAGES = ["login.html", "register.html"];

function authGuard() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const isPublic = PUBLIC_PAGES.some(p => page.endsWith(p));
  const session = getSession();

  if (!isPublic && !session) {
    // Pagina protejată, nu e logat → redirect la login
    window.location.replace("login.html");
    return false;
  }

  if (isPublic && session) {
    // Deja logat, încearcă să acceseze login/register → redirect la home
    window.location.replace("index.html");
    return false;
  }

  return true;
}

// ============================================================
//  LOGOUT
// ============================================================
function logout() {
  localStorage.removeItem("autorevizor_session");
  window.location.replace("login.html");
}

// ============================================================
//  HELPERS: feedback vizual pe inputuri
// ============================================================

function setValid(input) {
  input.classList.remove("invalid");
  input.classList.add("valid");
  const fb = input.parentElement.querySelector(".input-feedback");
  if (fb) fb.textContent = "✓";
}

function setInvalid(input, msg) {
  input.classList.remove("valid");
  input.classList.add("invalid");
  const fb = input.parentElement.querySelector(".input-feedback");
  if (fb) fb.textContent = msg || "✗";
}

function clearState(input) {
  input.classList.remove("valid", "invalid");
  const fb = input.parentElement.querySelector(".input-feedback");
  if (fb) fb.textContent = "";
}

function showAlert(alertId, message, type) {
  const box = document.getElementById(alertId);
  if (!box) return;
  box.textContent = message;
  box.className = "alert alert-" + type;
  box.style.display = "block";
  box.classList.remove("alert-anim");
  void box.offsetWidth;
  box.classList.add("alert-anim");
}

function hideAlert(alertId) {
  const box = document.getElementById(alertId);
  if (box) box.style.display = "none";
}

// ============================================================
//  VALIDARE CÂMPURI
// ============================================================

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validatePhone(phone) {
  return /^\d+$/.test(phone.trim());
}

// ============================================================
//  REGISTER
// ============================================================

function initRegister() {
  const form = document.getElementById("register-form");
  if (!form) return;

  const inputs = {
    nume:     document.getElementById("reg-nume"),
    prenume:  document.getElementById("reg-prenume"),
    email:    document.getElementById("reg-email"),
    telefon:  document.getElementById("reg-telefon"),
    parola:   document.getElementById("reg-parola"),
    confirma: document.getElementById("reg-confirma")
  };

  // Validare live pe blur
  inputs.email.addEventListener("blur", () => {
    validateEmail(inputs.email.value)
      ? setValid(inputs.email)
      : setInvalid(inputs.email, "✗");
  });

  inputs.telefon.addEventListener("blur", () => {
    validatePhone(inputs.telefon.value) && inputs.telefon.value.trim()
      ? setValid(inputs.telefon)
      : setInvalid(inputs.telefon, "✗");
  });

  inputs.parola.addEventListener("blur", () => {
    inputs.parola.value.length >= 8
      ? setValid(inputs.parola)
      : setInvalid(inputs.parola, "✗");
  });

  inputs.confirma.addEventListener("blur", () => {
    inputs.confirma.value === inputs.parola.value && inputs.confirma.value
      ? setValid(inputs.confirma)
      : setInvalid(inputs.confirma, "✗");
  });

  Object.values(inputs).forEach(inp => {
    inp.addEventListener("focus", () => clearState(inp));
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    hideAlert("register-alert");

    const dict = translations[currentLang];
    let valid = true;

    if (!inputs.nume.value.trim()) { setInvalid(inputs.nume, "✗"); valid = false; }
    if (!inputs.prenume.value.trim()) { setInvalid(inputs.prenume, "✗"); valid = false; }

    if (!validateEmail(inputs.email.value)) {
      setInvalid(inputs.email, "✗");
      showAlert("register-alert", dict["err-email"], "error");
      valid = false;
    }

    if (!inputs.telefon.value.trim() || !validatePhone(inputs.telefon.value)) {
      setInvalid(inputs.telefon, "✗");
      if (valid) showAlert("register-alert", dict["err-phone"], "error");
      valid = false;
    }

    if (inputs.parola.value.length < 8) {
      setInvalid(inputs.parola, "✗");
      if (valid) showAlert("register-alert", dict["err-pass-len"], "error");
      valid = false;
    }

    if (inputs.confirma.value !== inputs.parola.value) {
      setInvalid(inputs.confirma, "✗");
      if (valid) showAlert("register-alert", dict["err-pass-match"], "error");
      valid = false;
    }

    if (!valid) return;

    const users = getUsers();
    const exists = users.find(u => u.email === inputs.email.value.trim().toLowerCase());
    if (exists) {
      setInvalid(inputs.email, "✗");
      showAlert("register-alert", dict["err-email-exists"], "error");
      return;
    }

    const newUser = {
      nume:    inputs.nume.value.trim(),
      prenume: inputs.prenume.value.trim(),
      email:   inputs.email.value.trim().toLowerCase(),
      telefon: inputs.telefon.value.trim(),
      parola:  inputs.parola.value
    };

    users.push(newUser);
    saveUsers(users);

    showAlert("register-alert", dict["success-register"], "success");
    form.reset();
    Object.values(inputs).forEach(inp => clearState(inp));

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });
}

// ============================================================
//  LOGIN
// ============================================================

function initLogin() {
  const form = document.getElementById("login-form");
  if (!form) return;

  const emailInput  = document.getElementById("login-email");
  const parolaInput = document.getElementById("login-parola");

  [emailInput, parolaInput].forEach(inp => {
    inp.addEventListener("focus", () => clearState(inp));
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    hideAlert("login-alert");

    const dict  = translations[currentLang];
    const email  = emailInput.value.trim().toLowerCase();
    const parola = parolaInput.value;

    if (!email) { setInvalid(emailInput, "✗"); return; }
    if (!parola) { setInvalid(parolaInput, "✗"); return; }

    const users = getUsers();
    const user  = users.find(u => u.email === email && u.parola === parola);

    if (!user) {
      setInvalid(emailInput, "✗");
      setInvalid(parolaInput, "✗");
      showAlert("login-alert", dict["err-login"], "error");
      return;
    }

    localStorage.setItem("autorevizor_session", JSON.stringify({
      email:   user.email,
      nume:    user.nume,
      prenume: user.prenume
    }));

    setValid(emailInput);
    setValid(parolaInput);
    showAlert("login-alert", dict["success-login"], "success");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  });
}

// ============================================================
//  PERSISTENȚĂ FORMULAR PROGRAMARE (localStorage - sarcina f)
// ============================================================

function initBookingPersistence() {
  const form = document.getElementById("programare-form");
  if (!form) return;

  const fields = ["nume", "telefon", "tipVehicul", "dataProgramare"];

  fields.forEach(id => {
    const el    = document.getElementById(id);
    const saved = localStorage.getItem("booking_" + id);
    if (el && saved) el.value = saved;
  });

  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input",  () => localStorage.setItem("booking_" + id, el.value));
    el.addEventListener("change", () => localStorage.setItem("booking_" + id, el.value));
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      nume:           document.getElementById("nume").value,
      telefon:        document.getElementById("telefon").value,
      tipVehicul:     document.getElementById("tipVehicul").value,
      dataProgramare: document.getElementById("dataProgramare").value
    };

    fetch("https://script.google.com/macros/s/AKfycbw5LQRlqFspv7oPrJ2nRKaKnhp7csGld6Bmq3ghlB2KatB9CJU_9P0QecClxvBY4M0aAQ/exec", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(() => {
        alert(currentLang === "ro"
          ? "Programarea a fost trimisă cu succes!"
          : "Заявка успешно отправлена!");
        form.reset();
        fields.forEach(id => localStorage.removeItem("booking_" + id));
      })
      .catch(err => {
        alert(currentLang === "ro" ? "Eroare la trimitere!" : "Ошибка отправки!");
        console.error(err);
      });
  });
}

// ============================================================
//  INIT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Auth guard — rulează înainte de orice altceva
  if (!authGuard()) return;

  applyLanguage();
  initRegister();
  initLogin();
  initBookingPersistence();
});