import { AnimeContainer } from "./animeContainer.js";

export class Main {
    constructor() {
        this.view = document.createElement('div');
        this.view.classList.add('main__container');

        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo__container');

        const logo = document.createElement('img');
        logo.src = './media/animelogo.png';
        logo.alt = 'Logo Image Here';
        logo.classList.add('logo-main');

        logoContainer.appendChild(logo); 
        
        this.view.appendChild(logoContainer);

        //  Appending classes from other
        //  js files onto the main one.
        this.view.appendChild((new AnimeContainer()).view);

    }
};
window.onload = () => document.getElementById('root').appendChild((new Main()).view);
