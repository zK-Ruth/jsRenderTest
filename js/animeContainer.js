import { AnimeDetails } from "./animeDetails.js";

export class AnimeContainer {
    constructor() {
        this.view = document.createElement('div');
        this.view.classList.add('anime__container');

        const sortContainer = document.createElement('div');
        sortContainer.classList.add('sort__container');

        const sortTitle = document.createElement('button');
        sortTitle.classList.add('sort-by-title');
        sortTitle.textContent = 'Title';
        sortTitle.addEventListener('click', () => this.sortAnime('name'))

        const sortDate = document.createElement('button');
        sortDate.classList.add('sort-by-date');
        sortDate.textContent = 'Date';
        sortDate.addEventListener('click', () => this.sortAnime('year'))

        //  Section name is set by position absolute,
        //  relative to anime__container
        const sectionName = document.createElement('p');
        sectionName.classList.add('section-name');
        sectionName.textContent = 'Anime'

        sortContainer.append(sortTitle, sortDate);

        this.scrollArea = document.createElement('div');
        this.scrollArea.classList.add('scroll__container');
        this.view.append(sortContainer, this.scrollArea, sectionName);

        this.animeList = [];
        this.setView();
    }

    async setView() {
        const animeData = await (await fetch('./get_anime_data.json')).json();
        this.animeList = animeData.animeList;
        this.renderAnimeList();
    }
    renderAnimeList(){
        this.scrollArea.innerHTML = '';
        this.animeList.forEach(anime => {
            this.scrollArea.appendChild(new AnimeDetails(anime).view);
        });
    }
    sortAnime(key) {
        this.animeList.sort((a, b) => {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        })
        this.renderAnimeList();
    }
    
}
