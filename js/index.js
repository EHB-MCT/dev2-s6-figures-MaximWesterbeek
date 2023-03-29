"use strict";

//import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {
        console.log(e.target.change, "changed!");

        document.getElementById('otherInputs').innerHTML = '';
        
        if (e.target.value === 'rectangle') {
            form.inputElementsWithLabel('Width', 'width');
            form.inputElementsWithLabel('Height', 'height');
        } else if (e.target.value === 'square') {
            form.inputElementsWithLabel('Size', 'size');
        } else if (e.target.value === 'circle') {
            form.inputElementsWithLabel('Radius', 'radius');
        }

    },
    init() {
        console.log('Form init!');

        document.getElementById('select').addEventListener('change', form.changeSelect);
        document.getElementById('form').addEventListener('submit', form.submitForm);
    },

    inputElementsWithLabel(label, id) {
        let htmlstring =
        `<label> ${label}
            <input id="${id}" type="number">
        </label>`;
        document.getElementById('otherInputs').insertAdjacentHTML('beforeend', htmlstring);
    },
    
    submitForm(e) {
        console.log('Submit');
        e.preventDefault();
        const type = document.getElementById('select').value;
        console.log(type);

        if (type === 'rectangle') {
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;

            const rect = new Rectangle('Rectangle', width, height);
            console.log(rect);
            console.log(rect.htmlstring);

            document.getElementById('results').insertAdjacentHTML('beforeend', rect.htmlstring);

        } else if (type === 'square') {
            const size = document.getElementById('size').value;

            const square = new Square('Square', size);
            console.log(square);
            console.log(square.htmlstring);

            document.getElementById('results').insertAdjacentHTML('beforeend', square.htmlstring);

        } else if (type === 'circle') {
            const radius = document.getElementById('radius').value;

            const circle = new Circle('Circle', radius);
            console.log(circle);
            console.log(circle.htmlstring);

            document.getElementById('results').insertAdjacentHTML('beforeend', circle.htmlstring);
        }
    }
};

form.init();