import style from "./css/style.css";
import PNotify from "../node_modules/pnotify/dist/es/PNotify.js";
import PNotifyStyleMaterial from "pnotify/dist/es/PNotifyStyleMaterial.js";
import PNotifyButtons from "../node_modules/pnotify/dist/es/PNotifyButtons.js";
import axios from "axios";
import template from "./templates/templates.hbs";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

const debounce = require("lodash.debounce");

PNotify.defaults.styling = "material";
PNotify.defaults.icons = "material";

const key = "20215249-e09209c13878f741c0eae724a";
const url =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=";

const refs = {
  input: document.querySelector("[name=query]"),
  gallery: document.querySelector(".gallery"),
  button: document.querySelector(".btn"),
  title: document.querySelector(".title"),
};

let num = 0;
let pictName;

function addButton() {
  refs.button.classList.remove("is-hiden");
}

function searchFn(e) {
  refs.title.classList.add("js-title");
  num += 1;
  if (e.target.nodeName === "INPUT") {
    if (num > 1 && e.target.value !== pictName) {
      refs.button.classList.add("is-hiden");
      refs.gallery.innerHTML = "";
      if (e.target.value === "") {
        return;
      }
    }
    pictName = e.target.value;
  }
  axios
    .get(url + `${pictName}&page=${num}&per_page=12&key=${key}`)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        PNotify.alert("За такою назвою нічого не знайдено!");
        return;
      }
      refs.gallery.insertAdjacentHTML("beforeend", template(data.hits));
      addButton();

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: "smooth",
      });
    });

  refs.gallery.addEventListener("click", createModal);
}

function createModal(e) {
  const visible = basicLightbox.visible();
  if (visible) {
    instance.close();
  } else {
    const instance = basicLightbox.create(
      `<img src='${e.target.dataset.source}'/>`,
    );
    instance.show();
  }
}

refs.button.addEventListener("click", searchFn);
refs.input.addEventListener("input", debounce(searchFn, 1000));
