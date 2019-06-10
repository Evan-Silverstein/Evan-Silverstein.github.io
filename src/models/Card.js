class Card{

    constructor(title, description, imageUrl = '', link = ''){
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.link = link;
        this.descriptionLong = '';
        this.attributes = [];
        this.tags = [];
        this.gallery = [];
    }
}
export default Card;