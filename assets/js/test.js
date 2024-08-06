document.addEventListener("DOMContentLoaded", () => {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
      }


  let lang = localStorage.getItem("preferredLanguage");
  if (!lang) {
    const userLanguage = navigator.language || "en";
    lang = userLanguage.startsWith("es") ? "es" : "en";
    localStorage.setItem("preferredLanguage", lang);
  }
  const languages = { en: "English", es: "Español" };
  const urlLang = getQueryParam("lang");
  if (urlLang && languages.hasOwnProperty(urlLang)) {
    lang = urlLang;
    localStorage.setItem("preferredLanguage", lang);
  }
  
  function getLanguageKeys() {
    return Object.keys(languages);
  }
  function updateLanguageSelector() {
    const currentLanguageElement = document.getElementById("current-language");
    if (currentLanguageElement) {
      currentLanguageElement.textContent = languages[lang];
    }
  }
  function changeLanguage(languageKey) {
    lang = languageKey;
    localStorage.setItem("preferredLanguage", lang);
    updateLanguageSelector();
    updatePageContent(lang);
    showPopup();
    document
      .getElementById("dropdownBasic2")
      .setAttribute("aria-expanded", "false");
    document.getElementById("language-dropdown").classList.remove("show");
  }
  function loadTranslation(language, callback) {
    fetch(`assets/i18n/${language}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => callback(data))
      .catch((error) => {
        console.error("Error loading translation:", error);
        document.getElementById("loading-overlay").style.display = "none";
        document.getElementById("content").style.display = "block";
      });
  }
  function updatePageContent(language) {
    loadTranslation(language, (translation) => {
      const elements = {
        "header-title": translation.home.header.title,
        "header-p": translation.home.header.p,
        "header-button": translation.home.header.button,
        "header-p_people": translation.home.header.p_people,
        "how-title": translation.home.how.title,
        "how-description": translation.home.how.description,
        "card-card_1_title": translation.home.how.card.card_1_title,
        "card-card_1_description": translation.home.how.card.card_1_description,
        "card-card_2_title": translation.home.how.card.card_2_title,
        "card-card_2_description": translation.home.how.card.card_2_description,
        "card-card_3_title": translation.home.how.card.card_3_title,
        "card-card_3_description": translation.home.how.card.card_3_description,
        "why-title": translation.home.why.title,
        "why-description_1": translation.home.why.description_1,
        "why-description_2": translation.home.why.description_2,
        "why-button": translation.home.why.button,
        "qi_table-table_value_1": translation.success.qi_table.table_value_1,
        "qi_table-table_value_2": translation.success.qi_table.table_value_2,
        "qi_table-table_value_3": translation.success.qi_table.table_value_3,
        "qi_table-table_value_4": translation.success.qi_table.table_value_4,
        "qi_table-table_value_5": translation.success.qi_table.table_value_5,
        "qi_table-table_value_6": translation.success.qi_table.table_value_6,
        "qi_table-table_value_7": translation.success.qi_table.table_value_7,
        "review-title": translation.home.review.title,
        "review_1-iq": translation.home.review.reviews.review_1.iq,
        "review_1.text": translation.home.review.reviews.review_1.text,
        "review_1.country": translation.home.review.reviews.review_1.country,
        "review_2-iq": translation.home.review.reviews.review_2.iq,
        "review_2.text": translation.home.review.reviews.review_2.text,
        "review_2.country": translation.home.review.reviews.review_2.country,
        "review_3-iq": translation.home.review.reviews.review_3.iq,
        "review_3.text": translation.home.review.reviews.review_3.text,
        "review_3.country": translation.home.review.reviews.review_3.country,
        "review_4-iq": translation.home.review.reviews.review_4.iq,
        "review_4.text": translation.home.review.reviews.review_4.text,
        "review_4.country": translation.home.review.reviews.review_4.country,
        "countries.title": translation.home.countries.title,
        "countries.description": translation.home.countries.description,
        "country.it": translation.home.countries.country.it,
        "country.andorra": translation.home.countries.country.andorra,
        "country.china": translation.home.countries.country.china,
        "country.japon": translation.home.countries.country.japon,
        "country.uruguay": translation.home.countries.country.uruguay,
        "country.guatemala": translation.home.countries.country.guatemala,
        "country.ecuador": translation.home.countries.country.ecuador,
        "country.romania": translation.home.countries.country.romania,
        "country.venezuela": translation.home.countries.country.venezuela,
        "country.bolivia": translation.home.countries.country.bolivia,
        "footer.unsubscribe": translation.footer.unsubscribe,
        "footer.what_is": translation.footer.what_is,
        "footer.terms": translation.footer.terms,
        "footer.policy": translation.footer.policy,
        "footer.contact_email": translation.footer.contact_email,
        "navbar.take_test": translation.navbar.take_test,
        "navbar.price": translation.navbar.price,
        "navbar.why": translation.navbar.why,
        "navbar.reviews": translation.navbar.reviews,
        "navbar.take_test": translation.navbar.take_test,
      };
      for (const [id, content] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
          element.innerHTML = content;
        }
      }
      document.getElementById("loading-overlay").style.display = "none";
      document.getElementById("content").style.display = "block";
    });
  }
  function showPopup() {
    const { name, minutes, city } = getNextPopupData();
    loadTranslation(lang, (translation) => {
      updatePopupMessage(translation, minutes, name, city);
    });
  }
  function getNextPopupData() {
    const data = [
      { name: "Santiago", minutes: 1, city: "Chile" },
      { name: "María", minutes: 3, city: "Argentina" },
      { name: "Pedro", minutes: 5, city: "Perú" },
    ];
    let currentIndex = 0;
    const item = data[currentIndex];
    currentIndex = (currentIndex + 1) % data.length;
    return item;
  }
  function updatePopupMessage(translation, minutes, name, city) {
    let message = translation.home.popup.message;
    message = message
      .replace("{{minutes}}", minutes)
      .replace("{{name}}", name)
      .replace("{{city}}", city);
    const popup = document.getElementById("popup");
    const messageElement = document.getElementById("popup-message");
    if (popup && messageElement) {
      messageElement.innerHTML = message;
      popup.classList.add("popup-show");
      setTimeout(() => {
        popup.classList.remove("popup-show");
        setTimeout(showPopup, 5000);
      }, 3000);
    }
  }

  const currencies = { usd: "USD $", eur: "Euro €" };
  let currency = localStorage.getItem("preferredCurrency") || "eur";
  const urlCurrency = getQueryParam("currency");
  if (urlCurrency && currencies.hasOwnProperty(urlCurrency)) {
    currency = urlCurrency;
    localStorage.setItem("preferredCurrency", currency);
  }
  function getCurrencyKeys() {
    return Object.keys(currencies);
  }
  function updateCurrencySelector() {
    const currentCurrencyElement = document.getElementById("current-currency");
    if (currentCurrencyElement) {
      currentCurrencyElement.textContent = currencies[currency];
    }
  }
  function changeCurrency(currencyKey) {
    currency = currencyKey;
    localStorage.setItem("preferredCurrency", currency);
    updateCurrencySelector();
    document
      .getElementById("dropdownCurrency")
      .setAttribute("aria-expanded", "false");
    document.getElementById("currency-dropdown").classList.remove("show");
  }
  function toggleCurrencyDropdown() {
    const dropdown = document.getElementById("dropdownCurrency");
    const expanded = dropdown.getAttribute("aria-expanded") === "true";
    dropdown.setAttribute("aria-expanded", !expanded);
    document
      .getElementById("currency-dropdown")
      .classList.toggle("show", !expanded);
  }
  function handleCurrencyClickOutside(event) {
    if (!document.getElementById("dropdownCurrency").contains(event.target)) {
      document
        .getElementById("dropdownCurrency")
        .setAttribute("aria-expanded", "false");
      document.getElementById("currency-dropdown").classList.remove("show");
    }
  }
  function initializeApp() {
    updateLanguageSelector();
    updatePageContent(lang);
    showPopup();
    const ctx = document.getElementById("myLineChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "(> 69) IQ",
          "(70-79) IQ",
          "(80-89) IQ",
          "(90-109) IQ",
          "(110-119) IQ",
          "(120-129) IQ",
          "(130-144) IQ",
          "(145-160) IQ",
        ],
        datasets: [
          {
            label: "%",
            data: [0.1, 2, 14, 34, 34, 14, 2, 0.1],
            fill: !0,
            tension: 0.5,
            borderColor: "#476597",
            backgroundColor: "rgba(71, 101, 151, .3)",
          },
        ],
      },
      options: { responsive: !0, plugins: { legend: { display: !1 } } },
    });
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function updatePeopleOnline() {
      const peopleOnline = getRandomNumber(540, 1350);
      const peopleOnlineElement = document.getElementById(
        "people-online-number"
      );
      if (peopleOnlineElement) {
        peopleOnlineElement.textContent = peopleOnline.toLocaleString();
      }
    }
    updatePeopleOnline();
    const languageDropdown = document.getElementById("language-dropdown");
    getLanguageKeys().forEach((key) => {
      const button = document.createElement("button");
      button.type = "button";
      button.classList.add(
        "dropdown-item",
        "d-flex",
        "justify-content-start",
        "align-items-center",
        "gap-2"
      );
      button.textContent = languages[key];
      button.onclick = () => changeLanguage(key);
      languageDropdown.appendChild(button);
    });
    document
      .getElementById("dropdownBasic2")
      .addEventListener("click", function () {
        const expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded);
        languageDropdown.classList.toggle("show", !expanded);
      });
    document.addEventListener("click", function (event) {
      if (!document.getElementById("dropdownBasic2").contains(event.target)) {
        document
          .getElementById("dropdownBasic2")
          .setAttribute("aria-expanded", "false");
        languageDropdown.classList.remove("show");
      }
    });
    const currencyDropdown = document.getElementById("currency-dropdown");
    getCurrencyKeys().forEach((key) => {
      const button = document.createElement("button");
      button.type = "button";
      button.classList.add(
        "dropdown-item",
        "d-flex",
        "justify-content-start",
        "align-items-center",
        "gap-2"
      );
      button.textContent = currencies[key];
      button.onclick = () => changeCurrency(key);
      currencyDropdown.appendChild(button);
    });
    document
      .getElementById("dropdownCurrency")
      .addEventListener("click", toggleCurrencyDropdown);
    document.addEventListener("click", handleCurrencyClickOutside);
    updateCurrencySelector();
  }
  initializeApp();
});
