import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character } from './character.js';
import { Enemy } from './enemy.js';

//user interface////////////

$(document).ready(function() {
    $("#genButton").click(function(event) {
        event.preventDefault();

        console.log("Button works")

        let character = new Character("");
        character.classSamurai();

        $("#char1").append(character.stats.hp);
    })
})
