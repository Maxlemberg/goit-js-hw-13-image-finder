import style from "./css/style.css";
import PNotify from "../node_modules/pnotify/dist/es/PNotify.js";
import PNotifyStyleMaterial from "pnotify/dist/es/PNotifyStyleMaterial.js";
import PNotifyButtons from "../node_modules/pnotify/dist/es/PNotifyButtons.js";

//PNotify.defaults.styling = "material";
//PNotify.defaults.icons = "material";
//
//console.log(PNotify.defaults);
//
//PNotify.alert("Notice me, senpai!");
//PNotify.notice({
//  title: "Desktop Notice",
//  text:
//    "I'll appear as a desktop notification. Unless I can't. I'll still appear as a regular PNotify notice then.",
//});

const key = "20215249-e09209c13878f741c0eae724a";
const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${num}&per_page=12&key=${key}`;
