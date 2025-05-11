

// Get or create a per‐visitor sessionId
function getSessionId() {
  let sid = localStorage.getItem('adv_sessionId');
  if (!sid) {
    sid = crypto.randomUUID();
    localStorage.setItem('adv_sessionId', sid);
  }
  return sid;
}
const sessionId = getSessionId();

function trackEvent(eventType, details = {}) {
  const payload = { sessionId, eventType, details };
  fetch('https://script.google.com/macros/s/AKfycbyUMrzt00F9K9qNwedqO43LoY26MREwdp-SVfF4JLVFqYqTiKUa5oStVLrjQ44f81ylEQ/exec', {
    method: 'POST',
    mode:   'no-cors',   // fire‐and‐forget, no preflight
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    body: JSON.stringify(payload)
  });
}


// 1) Track page loads
window.addEventListener('load', () => trackEvent('pageLoad'));

// 2) Track focus on the “name” field
document.getElementById('name')
        .addEventListener('focus', () => trackEvent('focus', { field: 'name' }));

// 3) Track every keystroke in email (for demo, we’ll only log the field name, not full content)
document.getElementById('email')
        .addEventListener('input', () => trackEvent('input', { field: 'email' }));

// 4) Track clicks on “Add Adventure”
document.getElementById('addAdventureBtn')
        .addEventListener('click', () => trackEvent('click', { button: 'addAdventure' }));

// 5) Track form submission
document.getElementById('adventureForm')
        .addEventListener('submit', () => trackEvent('submit', { form: 'adventureForm' }));

// ▶︎ visitor‐counter ping
window.addEventListener('load', () => {
    console.log("i entered");
    fetch('https://script.google.com/macros/s/AKfycbyUMrzt00F9K9qNwedqO43LoY26MREwdp-SVfF4JLVFqYqTiKUa5oStVLrjQ44f81ylEQ/exec', {
      method: 'GET',
      mode:   'no-cors'     // we don't care about the response body
    })
    .then(() => console.log('✅ Visit counted'))
    .catch(err => console.warn('Visitor ping failed', err));
    console.log("i am out");
  });

/* ---------- shorthand ---------- */
const $ = id => document.getElementById(id);

/* ---------- translations ---------- */
const translations = {
en: {
    title: "Create Your Adventure Book",
    subtitle: "Bring your child's travel tales to life!",
    labelName: "Full Name", placeholderName: "e.g., John Smith",
    labelEmail: "Email", placeholderEmail: "john@example.com",
    labelChildName: "Child's Name", placeholderChildName: "e.g., Emily",
    labelAge:           "Child's Age",
    placeholderAge:     "e.g., 4",
    labelBookLang:      "Book Language",
    placeholderBookLang:"e.g., English, French",

    labelCountry: "Country Address", placeholderCountry: "e.g., United States",
    labelCity: "City Address", placeholderCity: "e.g., New York",
    labelTravel: "Travel Destination", placeholderTravel: "e.g., Grand Canyon",
    addAdventure: "+ Add Adventure", createBook: "Create Book",
    dragDrop: "Drag & drop or click to select images", adventure: "Adventure",
    labelAdvName: "Name", labelAdvDesc: "Description", labelAdvImages: "Images",
    placeholderAdvName: "e.g., Dragon’s Cave",
    placeholderAdvDesc: "Tell your story…"
},
es: {
    title: "Crea tu libro de aventuras",
    subtitle: "¡Da vida a los relatos de viaje de tu hijo!",
    labelName: "Nombre completo", placeholderName: "ej. María González",
    labelEmail: "Correo electrónico", placeholderEmail: "maria@ejemplo.com",
    labelChildName: "Nombre del niño", placeholderChildName: "ej. Diego",
    labelAge:           "Edad del niño",
	placeholderAge:     "p.ej., 4",
     labelBookLang:      "Idioma del libro",
     placeholderBookLang:"p.ej., Español, Inglés",

    labelCountry: "Dirección del país", placeholderCountry: "ej. España",
    labelCity: "Dirección de la ciudad", placeholderCity: "ej. Barcelona",
    labelTravel: "Destino de viaje", placeholderTravel: "ej. Alhambra",
    bookLang: "e.g., Español Inglés",
    addAdventure: "+ Añadir aventura", createBook: "Crear libro",
    dragDrop: "Arrastra y suelta o haz clic para seleccionar imágenes", adventure: "Aventura",
    labelAdvName: "Nombre", labelAdvDesc: "Descripción", labelAdvImages: "Imágenes",
    placeholderAdvName: "p.ej., Cueva del Dragón",
    placeholderAdvDesc: "Cuenta tu historia…"
},
fr: {
    title: "Créez votre livre d'aventures",
    subtitle: "Donnez vie aux récits de voyage de votre enfant !",
    labelName: "Nom complet", placeholderName: "ex. Marie Dupont",
    labelEmail: "E-mail", placeholderEmail: "marie@exemple.com",
    labelChildName: "Nom de l'enfant", placeholderChildName: "ex. Léo",
    labelAge:           "Âge de l'enfant",
    placeholderAge:     "ex. 4",
    labelBookLang:      "Langue du livre",
    placeholderBookLang:"ex. Français, Anglais",

    labelCountry: "Adresse du pays", placeholderCountry: "ex. France",
    labelCity: "Adresse de la ville", placeholderCity: "ex. Paris",
    labelTravel: "Destination", placeholderTravel: "ex. Forêt enchantée",
    addAdventure: "+ Ajouter une aventure", createBook: "Créer le livre",
    dragDrop: "Glissez-déposez ou cliquez pour sélectionner des images", adventure: "Aventure",
    labelAdvName: "Nom", labelAdvDesc: "Description", labelAdvImages: "Images",
    placeholderAdvName: "ex. Grotte du Dragon",
    placeholderAdvDesc: "Racontez votre histoire…"
},
de: {
    title: "Erstelle dein Abenteuerbuch",
    subtitle: "Erwecke die Reisegeschichten deines Kindes zum Leben!",
    labelName: "Vollständiger Name", placeholderName: "z.B. Max Mustermann",
    labelEmail: "E-Mail", placeholderEmail: "max@beispiel.de",
    labelChildName: "Name des Kindes", placeholderChildName: "z.B. Leon",
    labelAge:           "Alter des Kindes",
    placeholderAge:     "z. B. 4",
    labelBookLang:      "Buchsprache",
    placeholderBookLang:"z. B. Deutsch, Englisch",

    labelCountry: "Landadresse", placeholderCountry: "z.B. Deutschland",
    labelCity: "Stadtadresse", placeholderCity: "z.B. Berlin",
    labelTravel: "Reiseziel", placeholderTravel: "z.B. Schwarzwald",
    addAdventure: "+ Abenteuer hinzufügen", createBook: "Buch erstellen",
    dragDrop: "Ziehen & Ablegen oder klicken, um Bilder auszuwählen", adventure: "Abenteuer",
    labelAdvName: "Name", labelAdvDesc: "Beschreibung", labelAdvImages: "Bilder",
    placeholderAdvName: "z.B. Drachenhöhle",
    placeholderAdvDesc: "Erzähle deine Geschichte…"
},
it: {
    title: "Crea il tuo libro di avventure",
    subtitle: "Dai vita alle storie di viaggio di tuo figlio!",
    labelName: "Nome completo", placeholderName: "es. Mario Rossi",
    labelEmail: "Email", placeholderEmail: "mario@esempio.it",
    labelChildName: "Nome del bambino", placeholderChildName: "es. Giulia",
    labelAge:           "Età del bambino",
    placeholderAge:     "es. 4",
    labelBookLang:      "Lingua del libro",
    placeholderBookLang:"es. Italiano, Inglese",

    labelCountry: "Indirizzo del paese", placeholderCountry: "es. Italia",
    labelCity: "Indirizzo della città", placeholderCity: "es. Roma",
    labelTravel: "Destinazione", placeholderTravel: "es. Colosseo",
    addAdventure: "+ Aggiungi avventura", createBook: "Crea libro",
    dragDrop: "Trascina e rilascia o clicca per selezionare immagini", adventure: "Avventura",
    labelAdvName: "Nome", labelAdvDesc: "Descrizione", labelAdvImages: "Immagini",
    placeholderAdvName: "es. Grotta del Drago",
    placeholderAdvDesc: "Racconta la tua storia…"
},
ru: {
    title: "Создайте книгу приключений",
    subtitle: "Оживите истории путешествий вашего ребенка!",
    labelName: "Полное имя", placeholderName: "например, Иван Иванов",
    labelEmail: "Электронная почта", placeholderEmail: "ivan@primer.ru",
    labelChildName: "Имя ребенка", placeholderChildName: "например, Оля",
    labelAge:           "Возраст ребёнка",
    placeholderAge:     "напр., 4",
    labelBookLang:      "Язык книги",
    placeholderBookLang:"напр., Русский, Английский",

    labelCountry: "Адрес страны", placeholderCountry: "например, Россия",
    labelCity: "Адрес города", placeholderCity: "например, Москва",
    labelTravel: "Место путешествия", placeholderTravel: "например, Волшебный лес",
    addAdventure: "+ Добавить приключение", createBook: "Создать книгу",
    dragDrop: "Перетащите или нажмите для выбора изображений", adventure: "Приключение",
    labelAdvName: "Имя", labelAdvDesc: "Описание", labelAdvImages: "Изображения",
    placeholderAdvName: "напр., Пещера дракона",
    placeholderAdvDesc: "Опишите своё приключение…"
},
ar: {
    title: "أنشئ كتاب مغامرتك",
    subtitle: "أحيّ قصص سفر طفلك!",
    labelName: "الاسم الكامل", placeholderName: "مثال: محمد علي",
    labelEmail: "البريد الإلكتروني", placeholderEmail: "mohamed@مثال.com",
    labelChildName: "اسم الطفل", placeholderChildName: "مثال: ليلى",
    labelAge:           "عمر الطفل",
    placeholderAge:     "مثال: 4",
    labelBookLang:      "لغة الكتاب",
    placeholderBookLang:"مثال: العربية، الإنجليزية",

    labelCountry: "عنوان الدولة", placeholderCountry: "مثال: مصر",
    labelCity: "عنوان المدينة", placeholderCity: "مثال: القاهرة",
    labelTravel: "وجهة السفر", placeholderTravel: "مثال: الغابة المسحورة",
    addAdventure: "+ أضف مغامرة", createBook: "إنشاء الكتاب",
    dragDrop: "اسحب وأفلت أو انقر لاختيار الصور", adventure: "مغامرة",
    labelAdvName: "الاسم", labelAdvDesc: "الوصف", labelAdvImages: "الصور",
    placeholderAdvName: "مثال: كهف التنين",
    placeholderAdvDesc: "احكِ قصتك…"
}
};

function apply(lang) {
if (!translations[lang]) lang = 'en';
const t = translations[lang];

$('langSelect').value    = lang;
$('title').textContent   = t.title;
$('subtitle').textContent= t.subtitle;
$('labelName').textContent      = t.labelName;
$('name').placeholder           = t.placeholderName;
$('labelEmail').textContent     = t.labelEmail;
$('email').placeholder          = t.placeholderEmail;
$('labelChildName').textContent = t.labelChildName;
$('childName').placeholder      = t.placeholderChildName;
$('labelCountry').textContent   = t.labelCountry;
$('country').placeholder        = t.placeholderCountry;
$('labelCity').textContent      = t.labelCity;
$('city').placeholder           = t.placeholderCity;
$('labelTravel').textContent    = t.labelTravel;
$('destination').placeholder    = t.placeholderTravel;
$('addAdventureBtn').textContent = t.addAdventure;
$('createBookBtn').textContent   = t.createBook;
$('labelAge').textContent       = t.labelAge;
$('age').placeholder            = t.placeholderAge;

$('labelBookLang').textContent  = t.labelBookLang;
$('bookLang').placeholder       = t.placeholderBookLang;

document.querySelectorAll('.adventure-section').forEach((sec, i) => {
    sec.querySelector('.adventure-title').textContent = `${t.adventure} ${i + 1}`;
    const span = sec.querySelector('.drop-zone span');
    if (span) span.textContent = t.dragDrop;
    const inputs = sec.querySelectorAll('.form-group');
    if (inputs[0]) inputs[0].querySelector('label').textContent = t.labelAdvName;
    if (inputs[1]) inputs[1].querySelector('label').textContent = t.labelAdvDesc;
    if (inputs[2]) inputs[2].querySelector('label').textContent = t.labelAdvImages;
});
}

document.getElementById('langSelect').addEventListener('change', e => apply(e.target.value));
window.addEventListener('DOMContentLoaded', () => {
const urlLang = new URLSearchParams(window.location.search).get('lang');
const initialLang = urlLang || 'en';
apply(initialLang);
});

/* ---------- image preview ---------- */
function preview(files, container) {
Array.from(files).forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
    const wrap = document.createElement('div');
    wrap.className = 'image-container';
    const img = document.createElement('img');
    img.src = e.target.result;
    img.alt = file.name;
    const btn = document.createElement('button');
    btn.className = 'remove-btn';
    btn.textContent = '×';
    btn.onclick = () => wrap.remove();
    wrap.append(img, btn);
    container.append(wrap);
    };
    reader.readAsDataURL(file);
});
}

function renumber() {
const t = translations[$('langSelect').value] || translations.en;
document.querySelectorAll('.adventure-section').forEach((sec, i) => {
    sec.querySelector('.adventure-title').textContent = `${t.adventure} ${i + 1}`;
});
}

/* ---------- add adventure section ---------- */
$('addAdventureBtn').addEventListener('click', () => {
const idx = document.querySelectorAll('.adventure-section').length;
const t = translations[$('langSelect').value] || translations.en;
const sec = document.createElement('div');
sec.className = 'adventure-section';
sec.innerHTML = `
    <button type="button" class="remove-adventure">×</button>
    <div class="adventure-title">${t.adventure} ${idx + 1}</div>
    <div class="form-group">
    <label>${t.labelAdvName}</label>
    <input name="advName" placeholder="${t.placeholderAdvName}" />
    </div>
    <div class="form-group">
    <label>${t.labelAdvDesc}</label>
    <textarea name="advDesc" rows="4" placeholder="${t.placeholderAdvDesc}"></textarea>
    </div>
    <div class="form-group">
    <label>${t.labelAdvImages}</label>
    <div class="drop-zone">
        <span>${t.dragDrop}</span>
        <input type="file" accept="image/*" multiple />
    </div>
    <div class="image-preview"></div>
    </div>
`;
$('adventureList').append(sec);

// remove button
sec.querySelector('.remove-adventure').onclick = () => { sec.remove(); renumber(); };

const dz = sec.querySelector('.drop-zone');
const inp = dz.querySelector('input[type=file]');
const prev = sec.querySelector('.image-preview');
inp.addEventListener('change', e => { preview(e.target.files, prev); 
    //inp.value = ''; 
});
dz.addEventListener('click', e => { if (e.target === dz) inp.click(); });
['dragover','dragleave','drop'].forEach(evt => {
    dz.addEventListener(evt, e => {
    e.preventDefault();
    dz.classList.toggle('drop-zone--over', evt === 'dragover');
    if (evt === 'drop') { preview(e.dataTransfer.files, prev); inp.value = ''; }
    });
});
});

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        // reader.result is like "data:image/png;base64,AAAFBfj42Pj4…"
        const dataUrl = /** @type {string} */(reader.result);
        const [, rawBase64] = dataUrl.split(',', 2);
        resolve(rawBase64);
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

/* ---------- handle form submission via fetch ---------- */
$('adventureForm').addEventListener('submit', async e => {
e.preventDefault();
$('createBookBtn').disabled = true;
    // validate email
const email = $('email').value.trim();
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('📧 Invalid email format');
    $('createBookBtn').disabled = false;
    return;
}
// build payload
const out = {
    name: $('name').value.trim(),
    email,
    childName: $('childName').value.trim(),
    age: $('age').value,
    bookLang: $('bookLang').value.trim(),
    country: $('country').value.trim(),
    city: $('city').value.trim(),
    destination: $('destination').value.trim(),
    language: $('langSelect').value,
    adventures: []
};
for (const sec of document.querySelectorAll('.adventure-section')) {
    const advName = sec.querySelector('input[name=advName]').value;
    const advDesc = sec.querySelector('textarea[name=advDesc]').value;
    const files   = sec.querySelector('input[type=file]').files;
    const images = await Promise.all(
      Array.from(files).map(f => fileToBase64(f))
    );

    console.log(images);
    // build the adventure object
    const adventure = {
    name:        advName,
    description: advDesc,
    images      // array of data-URL strings
    };

    // log it so you can inspect in the browser console
    console.log('Adding adventure:', adventure);

    // now push it
    out.adventures.push(adventure);
    }
    console.log('Final payload:', out);

        const payloadStr = JSON.stringify(out);
      
        // send as text/plain to avoid preflight
        const resp = fetch(
          'https://script.google.com/macros/s/AKfycbyUMrzt00F9K9qNwedqO43LoY26MREwdp-SVfF4JLVFqYqTiKUa5oStVLrjQ44f81ylEQ/exec',
          {
            method: 'POST',
            mode : 'no-cors',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8'
            },
            body: payloadStr
          }
        );
         
        
        // show thank-you screen
        document.body.innerHTML = `
          <div class="container" style="text-align: center;">
            <h2>✅ Thank you, adventurer!</h2>
            <p>Your order has been received.<br>
            ✉️ Check your inbox for your confirmation email.</p>
            <p style="margin-top: 20px;">
              <a href="https://www.instagram.com/personalized_adventure_book/" target="_blank"
                 style="display: inline-block; padding: 12px 20px; background: #E1306C;
                        color: #fff; border-radius: 8px; font-weight: bold; text-decoration: none;">
                📸 Follow us on Instagram
              </a>
            </p>
          </div>
        `;
    });