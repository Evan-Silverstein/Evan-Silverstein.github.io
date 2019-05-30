class Card{

    constructor(title, description, imageUrl = '', link = ''){
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.link = link;
    }
}
export default Card;