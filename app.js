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
      labelCountry: "Country Address", placeholderCountry: "e.g., United States",
      labelCity: "City Address", placeholderCity: "e.g., New York",
      labelTravel: "Travel Destination", placeholderTravel: "e.g., Grand Canyon",
      labelAge: "Child's Age",
      labelBookLang: "Book Language",
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
      labelCountry: "Dirección del país", placeholderCountry: "ej. España",
      labelCity: "Dirección de la ciudad", placeholderCity: "ej. Barcelona",
      labelTravel: "Destino de viaje", placeholderTravel: "ej. Alhambra",
      labelAge: "Edad del niño",
      labelBookLang: "Idioma del libro",
      placeholderBookLang: "ej. Español, Inglés",
      placeholderBookLang: "e.g., English, French",
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
      labelCountry: "Adresse du pays", placeholderCountry: "ex. France",
      labelCity: "Adresse de la ville", placeholderCity: "ex. Paris",
      labelTravel: "Destination", placeholderTravel: "ex. Forêt enchantée",
      labelAge: "Âge de l'enfant",
      labelBookLang: "Langue du livre",
      placeholderBookLang: "ex. Français, Anglais",
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
      labelCountry: "Landadresse", placeholderCountry: "z.B. Deutschland",
      labelCity: "Stadtadresse", placeholderCity: "z.B. Berlin",
      labelTravel: "Reiseziel", placeholderTravel: "z.B. Schwarzwald",
      labelAge: "Alter des Kindes",
      labelBookLang: "Buchsprache",
      placeholderBookLang: "z.B. Deutsch, Englisch",
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
      labelCountry: "Indirizzo del paese", placeholderCountry: "es. Italia",
      labelCity: "Indirizzo della città", placeholderCity: "es. Roma",
      labelTravel: "Destinazione", placeholderTravel: "es. Colosseo",
      labelAge: "Età del bambino",
      labelBookLang: "Lingua del libro",
      placeholderBookLang: "es. Italiano, Inglese",
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
      labelCountry: "Адрес страны", placeholderCountry: "например, Россия",
      labelCity: "Адрес города", placeholderCity: "например, Москва",
      labelTravel: "Место путешествия", placeholderTravel: "например, Волшебный лес",
      labelAge: "Возраст ребенка",
      labelBookLang: "Язык книги",
      placeholderBookLang: "например, Русский, Английский",
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
      labelCountry: "عنوان الدولة", placeholderCountry: "مثال: مصر",
      labelCity: "عنوان المدينة", placeholderCity: "مثال: القاهرة",
      labelTravel: "وجهة السفر", placeholderTravel: "مثال: الغابة المسحورة",
      labelAge: "عمر الطفل",
      labelBookLang: "لغة الكتاب",
      placeholderBookLang: "مثال: العربية، الإنجليزية",
      addAdventure: "+ أضف مغامرة", createBook: "إنشاء الكتاب",
      dragDrop: "اسحب وأفلت أو انقر لاختيار الصور", adventure: "مغامرة",
      labelAdvName: "الاسم", labelAdvDesc: "الوصف", labelAdvImages: "الصور",
      placeholderAdvName: "مثال: كهف التنين",
      placeholderAdvDesc: "احكِ قصتك…"
    }
  };

    function apply(lang) {
      console.log("Language applied:", lang);
      if (!translations[lang]) lang = 'en';
      const t = translations[lang];

      $('langSelect').value = lang;
      $('title').textContent = t.title;
      $('subtitle').textContent = t.subtitle;

      $('labelName').textContent = t.labelName;
      $('name').placeholder = t.placeholderName;
      $('labelEmail').textContent = t.labelEmail;
      $('email').placeholder = t.placeholderEmail;
      $('labelChildName').textContent = t.labelChildName;
      $('childName').placeholder = t.placeholderChildName;
      $('labelCountry').textContent = t.labelCountry;
      $('country').placeholder = t.placeholderCountry;
      $('labelCity').textContent = t.labelCity;
      $('city').placeholder = t.placeholderCity;
      $('labelTravel').textContent = t.labelTravel;
      $('destination').placeholder = t.placeholderTravel;
      $('labelAge').textContent = t.labelAge;
      $('labelBookLang').textContent = t.labelBookLang;
      $('bookLang').placeholder = t.placeholderBookLang || "e.g., English, French";

      $('addAdventureBtn').textContent = t.addAdventure;
      $('createBookBtn').textContent = t.createBook;

      document.querySelectorAll('.adventure-section').forEach((sec, i) => {
        sec.querySelector('.adventure-title').textContent = `${t.adventure} ${i + 1}`;

        const span = sec.querySelector('.drop-zone span');
        if (span) span.textContent = t.dragDrop;

        const nameInput = sec.querySelector('input[name="advName"]');
        const descInput = sec.querySelector('textarea[name="advDesc"]');
        if (nameInput) nameInput.placeholder = t.placeholderAdvName;
        if (descInput) descInput.placeholder = t.placeholderAdvDesc;

        const labels = sec.querySelectorAll('.form-group label');
        if (labels[0]) labels[0].textContent = t.labelAdvName;
        if (labels[1]) labels[1].textContent = t.labelAdvDesc;
        if (labels[2]) labels[2].textContent = t.labelAdvImages;
      });
    }

    $('langSelect').addEventListener('change', e => apply(e.target.value));
    window.addEventListener('DOMContentLoaded', () => {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      const lang = urlLang || JSON.parse('<?= JSON.stringify(lang) ?>') || 'en';
      console.log("Language applied from server or URL:", lang);
      apply(lang);
    });
    function preview(files, container) {
      if (!files || !files.length) return;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith("image/")) continue;

        const reader = new FileReader();

        reader.onload = function (e) {
          const wrap = document.createElement("div");
          wrap.className = "image-container";

          const img = document.createElement("img");
          img.src = e.target.result;
          img.alt = file.name;

          const btn = document.createElement("button");
          btn.className = "remove-btn";
          btn.textContent = "×";
          btn.onclick = () => wrap.remove();

          wrap.appendChild(img);
          wrap.appendChild(btn);
          container.appendChild(wrap);
        };

        reader.onerror = function (err) {
          console.error("Error reading file:", err);
        };

        reader.readAsDataURL(file);
      }
    }    
    function renumber() {
      const t = translations[$('langSelect').value] || translations.en;
      document.querySelectorAll('.adventure-section').forEach((sec,i)=>{
        sec.querySelector('.adventure-title').textContent = `${t.adventure} ${i+1}`;
      });
    }

$('addAdventureBtn').onclick = () => {
  const idx = document.querySelectorAll('.adventure-section').length;
  const t   = translations[$('langSelect').value] || translations.en;

  const sec = document.createElement('div');
  sec.className = 'adventure-section';
sec.innerHTML = `
  <button type="button" class="remove-adventure">×</button>
  <div class="adventure-title">${t.adventure} ${idx + 1}</div>

  <div class="form-group"><label>${t.labelAdvName}</label>
    <input name="advName" placeholder="${t.placeholderAdvName}">
  </div>
  <div class="form-group"><label>${t.labelAdvDesc}</label>
    <textarea name="advDesc" rows="4" placeholder="${t.placeholderAdvDesc}"></textarea>
  </div>
  <div class="form-group"><label>${t.labelAdvImages}</label>
    <div class="drop-zone">
      <span>${t.dragDrop}</span>
      <input type="file" accept="image/*" multiple>
    </div>
  </div>
  <div class="image-preview"></div>
`;
  $('adventureList').append(sec);

  // delete
  sec.querySelector('.remove-adventure').onclick = () => {
    sec.remove();
    renumber();
  };

  // drag-drop logic
  const dz   = sec.querySelector('.drop-zone');
  const inp  = dz.querySelector('input[type=file]');
  const prev = sec.querySelector('.image-preview');

  inp.addEventListener("change", (e) => {
    if (e.target.files.length) {
      preview(e.target.files, prev);
      e.target.value = ""; // allow re-selecting same file
    }
  });
  
  dz.querySelector('span').addEventListener("click", (e) => {
    e.stopPropagation();
    inp.click(); // trusted user click only on the span text
  });

  ["dragover", "dragleave", "drop"].forEach((evt) => {
    dz.addEventListener(evt, (e) => {
      e.preventDefault();

      if (evt === "dragover") dz.classList.add("drop-zone--over");
      else dz.classList.remove("drop-zone--over");

      if (evt === "drop") {
        const dtFiles = e.dataTransfer.files;
        if (dtFiles.length > 0) {
          preview(dtFiles, prev);
          inp.value = "";
        }
      }
    });
  });
};

    // Submit to Apps Script
    $('adventureForm').addEventListener('submit', async e => {
      e.preventDefault();
      $('createBookBtn').disabled = true;

      const emailValue = $('email').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Remove previous error if any
      document.querySelectorAll('.error-box').forEach(el => el.remove());

      if (!emailRegex.test(emailValue)) {
        const errorBox = document.createElement('div');
        errorBox.className = 'error-box';
        errorBox.style.cssText = `
          max-width: 600px;
          margin: 20px auto;
          padding: 16px;
          background: rgba(255, 0, 0, 0.1);
          border: 2px solid #ff4d4d;
          color: #a80000;
          font-family: 'Comic Neue', cursive;
          border-radius: 12px;
          text-align: center;
          animation: fadeIn 0.5s ease;
        `;
        errorBox.innerHTML = `
          <strong>📧 Invalid Email Format</strong>
          <p>Please enter a valid email like <i>name@example.com</i>.</p>
        `;
        document.querySelector('.container').prepend(errorBox);
        // ⏱ Remove after 3 seconds
        setTimeout(() => {
          errorBox.style.transition = 'opacity 0.5s';
          errorBox.style.opacity = 0;
          setTimeout(() => errorBox.remove(), 500);
        }, 3000);

        $('createBookBtn').disabled = false;
        return;
      }

      const out = {
        name:        $('name').value,
        email:       emailValue,
        childName:   $('childName').value,
        age:         $('age').value,        // 👈 NEW
        bookLang:    $('bookLang').value,   // 👈 NEW
        country:     $('country').value,
        city:        $('city').value,
        destination: $('destination').value,
        language:    $('langSelect').value,
        adventures:  []
      };

      for (const sec of document.querySelectorAll('.adventure-section')) {
        const advName = sec.querySelector('input[name="advName"]').value;
        const desc    = sec.querySelector('textarea[name="advDesc"]').value;
        const files   = sec.querySelector('input[type=file]').files;
        const images  = [];
        for (const f of files) {
          images.push(await new Promise((res,rej)=>{
            const r = new FileReader();
            r.onload = e => res(e.target.result);
            r.onerror = rej;
            r.readAsDataURL(f);
          }));
        }
        out.adventures.push({name:advName,description:desc,images});
      }

      fetch('https://script.google.com/macros/s/AKfycbyUMrzt00F9K9qNwedqO43LoY26MREwdp-SVfF4JLVFqYqTiKUa5oStVLrjQ44f81ylEQ/exec', {
        method: 'POST',
        mode:   'cors',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(out)
      })
      .then(r => r.json())
      .then(data => {
        // same success-handler UI…
        document.body.innerHTML = `… Thank you #${data.orderId} …`;
      })
      .catch(err => {
        // same failure-handler UI…
        console.error(err);
        alert('❌ Could not place your order.');
      });

    });
