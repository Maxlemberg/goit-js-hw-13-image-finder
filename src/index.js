
import style from './css/style.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';

PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';


console.log(PNotify.defaults)



PNotify.alert('Notice me, senpai!');
PNotify.notice({
    title: 'Desktop Notice',
    text: 'I\'ll appear as a desktop notification. Unless I can\'t. I\'ll still appear as a regular PNotify notice then.'
  });


// let inp = document.querySelector('input');
// inp.addEventListener('change', (e)=> {


//     e.target.value.length > 3 
//     ? fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
//     .then(data=> data.json())
//     .then(({name, abilities, sprites})=> 
//     {
//         document.body.insertAdjacentHTML('afterbegin',
//     `<div class="wrapper">
//     <h2>${name}</h2>
//     <img src=${sprites.front_default}>
//     <ul class="abilities"></ul>
//     </div>`)
//     abilities.forEach(({ability})=> {
//         document.querySelector(".abilities").innerHTML += `<li>${ability.name}</li>`
//     })

// }) 
//     : ''

// })




