export class AnimeDetails {
    constructor(anime) {
        this.anime = anime;

        this.view = document.createElement('div');
        this.view.classList.add('anime__details__container');

        const primaryDetails = this.createMainDetails();
        const secondaryDetails = this.createSecondaryDetails();

        //  append to main container to
        //  generate all anime cards
        this.view.append(primaryDetails, secondaryDetails);
    }

    createMainDetails() {
        const primaryDetails = document.createElement('div');
        primaryDetails.classList.add('primary-details');

        const titleAndRating = this.createTitleAndRating();
        const genreAndYear = this.createGenreAndYear();

        primaryDetails.append(titleAndRating, genreAndYear);

        return primaryDetails;
    }
    createSecondaryDetails() {
        const secondaryDetails = document.createElement('div');
        secondaryDetails.classList.add('secondary-details');

        const descAndImg = this.createDescriptionAndImages();

        secondaryDetails.appendChild(descAndImg);

        return secondaryDetails;
    }
    createTitleAndRating() {
        const titleAndRating = document.createElement('div');
        titleAndRating.classList.add('title-and-rating');

        const animeTitle = document.createElement('p');
        animeTitle.classList.add('anime-title');
        animeTitle.textContent = this.anime.name;

        const animeRating = document.createElement('p');
        animeRating.classList.add('anime-rating');
        animeRating.textContent = this.anime.rating;

        titleAndRating.append(animeTitle, animeRating);

        return titleAndRating;
    }

    createGenreAndYear(){
        const genreAndYear = document.createElement('div');
        genreAndYear.classList.add('genre-and-year');

        const animeGenre = document.createElement('p');
        animeGenre.classList.add('anime-genre');
        animeGenre.textContent = this.anime.genre;

        const animeYear = document.createElement('p');
        animeYear.classList.add('anime-genre');
        animeYear.textContent = this.anime.year;

        genreAndYear.append(animeGenre, animeYear);

        return genreAndYear;
    }
    createDescriptionAndImages(){
        const descAndImg = document.createElement('div');
        descAndImg.classList.add('desc-and-img');

        const animeDescription = document.createElement('p');
        animeDescription.classList.add('anime-description');
        animeDescription.textContent = this.anime.description;

        const animeImg = document.createElement('img');
        animeImg.classList.add('anime-img');
        animeImg.src = this.anime.pictures;

        descAndImg.append(animeDescription, animeImg);

        return descAndImg;
    }
}