// ── TRADUCERI ──────────────────────────────────────────────
const t = {
  ro: {
    logo:"AUTOrevizor", "nav-home":"Acasă", "nav-services":"Servicii",
    "nav-booking":"Programare", "nav-contact":"Contact", "nav-logout":"Deconectare",
    "welcome-title":"Bine ați venit la AUTOrevizor!",
    "welcome-text":"Stația ITP unde siguranța și profesionalismul sunt pe primul loc.",
    footer:"© AUTOrevizor | Made by Goncearuc Dan Company",
    "services-header":"Serviciile noastre",
    "services-desc":"Tarife pentru testarea tehnică și inspecția vehiculelor.",
    "col-nr":"Nr.", "col-item":"Obiectul impunerii", "col-unit":"Unitate", "col-tax":"Taxa (lei)",
    "btn-book-now":"Programează-te acum", "booking-header":"Programare Online",
    "veh-select":"Selectați tipul vehiculului", "veh-car":"Autoturism",
    "veh-van":"Autoutilitară", "veh-moto":"Motocicletă", "booking-send":"Trimite programarea",
    "contact-header":"Contactează-ne", "address-label":"Adresă:",
    "address-text":"Str. Independenței 142, Rîșcani, Republica Moldova",
    "phone-label":"Telefon:", "mail-label":"Email:", "program-label":"Program de lucru:",
    "program-hours":"Luni - Vineri: 08:00 - 17:00<br>Sâmbătă: 08:00 - 12:00<br>Duminică: Închis",
    "register-header":"Creare Cont Nou", "register-send":"Creează cont",
    "have-account":"Ai deja un cont?", "go-login":"Autentifică-te",
    "login-header":"Autentificare", "login-send":"Autentifică-te",
    "no-account":"Nu ai cont?", "go-register":"Înregistrează-te",
    "err-email":"Emailul nu este valid.", "err-phone":"Telefonul trebuie să conțină doar cifre.",
    "err-pass-len":"Parola trebuie să aibă minimum 8 caractere.",
    "err-pass-match":"Parolele nu coincid.", "err-email-exists":"Acest email este deja înregistrat.",
    "success-register":"Cont creat cu succes! Redirecționare...",
    "err-login":"Email sau parolă incorectă.", "success-login":"Autentificare reușită! Bun venit!"
  },
  ru: {
    logo:"AUTOревизор", "nav-home":"Главная", "nav-services":"Услуги",
    "nav-booking":"Запись", "nav-contact":"Контакты", "nav-logout":"Выйти",
    "welcome-title":"Добро пожаловать в AUTOrevizor!",
    "welcome-text":"СТО, где безопасность и профессионализм на первом месте.",
    footer:"© AUTOrevizor | Сделано Goncearuc Dan Company",
    "services-header":"Наши услуги", "services-desc":"Тарифы на техосмотр транспортных средств.",
    "col-nr":"№", "col-item":"Объект обложения", "col-unit":"Ед. изм.", "col-tax":"Тариф (лей)",
    "btn-book-now":"Записаться", "booking-header":"Онлайн запись",
    "veh-select":"Выберите тип транспорта", "veh-car":"Легковой автомобиль",
    "veh-van":"Грузовой", "veh-moto":"Мотоцикл", "booking-send":"Отправить",
    "contact-header":"Связаться с нами", "address-label":"Адрес:",
    "address-text":"ул. Независимости 142, Рысканы, Республика Молдова",
    "phone-label":"Телефон:", "mail-label":"Email:", "program-label":"График работы:",
    "program-hours":"Пн-Пт: 08:00 - 17:00<br>Сб: 08:00 - 12:00<br>Вс: Закрыто",
    "register-header":"Создание Аккаунта", "register-send":"Создать аккаунт",
    "have-account":"Уже есть аккаунт?", "go-login":"Войти",
    "login-header":"Авторизация", "login-send":"Войти",
    "no-account":"Нет аккаунта?", "go-register":"Зарегистрироваться",
    "err-email":"Email недействителен.", "err-phone":"Телефон должен содержать только цифры.",
    "err-pass-len":"Пароль должен содержать минимум 8 символов.",
    "err-pass-match":"Пароли не совпадают.", "err-email-exists":"Этот email уже зарегистрирован.",
    "success-register":"Аккаунт создан! Перенаправление...",
    "err-login":"Неверный email или пароль.", "success-login":"Вход выполнен успешно! Добро пожаловать!"
  }
};

// ── LIMBA ──────────────────────────────────────────────────
let lang = localStorage.getItem("lang") || "ro";

function aplicaLimba() {
  document.querySelectorAll("[data-key]").forEach(el => {
    if (t[lang][el.dataset.key]) el.innerHTML = t[lang][el.dataset.key];
  });
  document.querySelectorAll("[data-placeholder-ro]").forEach(el => {
    el.placeholder = el.dataset["placeholder" + (lang === "ro" ? "Ro" : "Ru")];
  });
  const ro = document.getElementById("tabel-ro");
  const ru = document.getElementById("tabel-ru");
  if (ro && ru) { ro.style.display = lang === "ro" ? "table" : "none"; ru.style.display = lang === "ru" ? "table" : "none"; }
}

function setLanguage(l) { lang = l; localStorage.setItem("lang", l); aplicaLimba(); }

// ── LOCALSTORAGE ────────────────────────────────────────────
const getUtilizatori = () => JSON.parse(localStorage.getItem("autorevizor_users") || "[]");
const salveaza = (lista) => localStorage.setItem("autorevizor_users", JSON.stringify(lista));
const getSesiune = () => JSON.parse(localStorage.getItem("autorevizor_session") || "null");

// ── AUTH GUARD ──────────────────────────────────────────────
function verificaAcces() {
  const pagina = location.pathname.split("/").pop() || "index.html";
  const ePublica = ["login.html", "register.html"].includes(pagina);
  const logat = getSesiune();
  if (!ePublica && !logat) { location.replace("login.html"); return false; }
  if (ePublica && logat)   { location.replace("index.html"); return false; }
  return true;
}

function logout() { localStorage.removeItem("autorevizor_session"); location.replace("login.html"); }

// ── FEEDBACK INPUTURI ───────────────────────────────────────
const ok  = el => { el.classList.replace("invalid","valid")   || el.classList.add("valid");   const f = el.parentElement?.querySelector(".input-feedback"); if(f) f.textContent="✓"; };
const err = el => { el.classList.replace("valid","invalid")   || el.classList.add("invalid"); const f = el.parentElement?.querySelector(".input-feedback"); if(f) f.textContent="✗"; };
const cls = el => { el.classList.remove("valid","invalid"); const f = el.parentElement?.querySelector(".input-feedback"); if(f) f.textContent=""; };

function arataMesaj(id, mesaj, tip) {
  const b = document.getElementById(id);
  if (!b) return;
  b.textContent = mesaj;
  b.className = "alert alert-" + tip;
  b.style.display = "block";
  b.classList.remove("alert-anim"); void b.offsetWidth; b.classList.add("alert-anim");
}

// ── REGISTER ────────────────────────────────────────────────
function initRegister() {
  const form = document.getElementById("register-form");
  if (!form) return;

  const c = {
    nume:     document.getElementById("reg-nume"),
    prenume:  document.getElementById("reg-prenume"),
    email:    document.getElementById("reg-email"),
    telefon:  document.getElementById("reg-telefon"),
    parola:   document.getElementById("reg-parola"),
    confirma: document.getElementById("reg-confirma")
  };

  // Validare live la blur (cand iesi din camp)
  c.email.addEventListener("blur",    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email.value) ? ok(c.email) : err(c.email));
  c.telefon.addEventListener("blur",  () => /^\d+$/.test(c.telefon.value.trim()) ? ok(c.telefon) : err(c.telefon));
  c.parola.addEventListener("blur",   () => c.parola.value.length >= 8 ? ok(c.parola) : err(c.parola));
  c.confirma.addEventListener("blur", () => c.confirma.value === c.parola.value ? ok(c.confirma) : err(c.confirma));
  Object.values(c).forEach(inp => inp.addEventListener("focus", () => cls(inp)));

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const txt = t[lang];
    let valid = true;

    if (!c.nume.value.trim())    { err(c.nume);    valid = false; }
    if (!c.prenume.value.trim()) { err(c.prenume); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email.value))   { err(c.email);    arataMesaj("register-alert", txt["err-email"],    "error"); valid = false; }
    if (!/^\d+$/.test(c.telefon.value.trim()))                { err(c.telefon);  if(valid) arataMesaj("register-alert", txt["err-phone"],    "error"); valid = false; }
    if (c.parola.value.length < 8)                            { err(c.parola);   if(valid) arataMesaj("register-alert", txt["err-pass-len"], "error"); valid = false; }
    if (c.confirma.value !== c.parola.value)                  { err(c.confirma); if(valid) arataMesaj("register-alert", txt["err-pass-match"],"error"); valid = false; }
    if (!valid) return;

    const utilizatori = getUtilizatori();
    if (utilizatori.find(u => u.email === c.email.value.trim().toLowerCase())) {
      err(c.email); arataMesaj("register-alert", txt["err-email-exists"], "error"); return;
    }

    // Salvam utilizatorul nou in localStorage ca JSON
    utilizatori.push({ nume: c.nume.value.trim(), prenume: c.prenume.value.trim(),
      email: c.email.value.trim().toLowerCase(), telefon: c.telefon.value.trim(), parola: c.parola.value });
    salveaza(utilizatori);

    arataMesaj("register-alert", txt["success-register"], "success");
    form.reset();
    setTimeout(() => location.href = "login.html", 2000);
  });
}

// ── LOGIN ───────────────────────────────────────────────────
function initLogin() {
  const form = document.getElementById("login-form");
  if (!form) return;

  const campEmail  = document.getElementById("login-email");
  const campParola = document.getElementById("login-parola");
  [campEmail, campParola].forEach(inp => inp.addEventListener("focus", () => cls(inp)));

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const txt = t[lang];
    const email  = campEmail.value.trim().toLowerCase();
    const parola = campParola.value;

    if (!email)  { err(campEmail);  return; }
    if (!parola) { err(campParola); return; }

    // Cautam utilizatorul in lista din localStorage
    const user = getUtilizatori().find(u => u.email === email && u.parola === parola);
    if (!user) { err(campEmail); err(campParola); arataMesaj("login-alert", txt["err-login"], "error"); return; }

    // Salvam sesiunea in localStorage
    localStorage.setItem("autorevizor_session", JSON.stringify({ email: user.email, nume: user.nume, prenume: user.prenume }));
    ok(campEmail); ok(campParola);
    arataMesaj("login-alert", txt["success-login"], "success");
    setTimeout(() => location.href = "index.html", 1500);
  });
}

// ── PROGRAMARE (persistenta localStorage) ──────────────────
function initProgramare() {
  const form = document.getElementById("programare-form");
  if (!form) return;

  const campuri = ["nume", "telefon", "tipVehicul", "dataProgramare"];

  // Restauram datele salvate la refresh
  campuri.forEach(id => {
    const el = document.getElementById(id);
    const val = localStorage.getItem("booking_" + id);
    if (el && val) el.value = val;
  });

  // Salvam automat la fiecare modificare
  campuri.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", () => localStorage.setItem("booking_" + id, el.value));
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const date = { nume: document.getElementById("nume").value, telefon: document.getElementById("telefon").value,
      tipVehicul: document.getElementById("tipVehicul").value, dataProgramare: document.getElementById("dataProgramare").value };

    fetch("https://script.google.com/macros/s/AKfycbw5LQRlqFspv7oPrJ2nRKaKnhp7csGld6Bmq3ghlB2KatB9CJU_9P0QecClxvBY4M0aAQ/exec",
      { method: "POST", body: JSON.stringify(date) })
      .then(r => r.json())
      .then(() => { alert(lang === "ro" ? "Programarea a fost trimisă!" : "Заявка отправлена!"); form.reset(); campuri.forEach(id => localStorage.removeItem("booking_" + id)); })
      .catch(() => alert(lang === "ro" ? "Eroare la trimitere!" : "Ошибка отправки!"));
  });
}

// ── START ───────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  if (!verificaAcces()) return;
  aplicaLimba();
  initRegister();
  initLogin();
  initProgramare();
});