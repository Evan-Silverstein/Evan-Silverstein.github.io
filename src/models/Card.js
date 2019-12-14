import CardDisplayType from './CardDisplayType';
class Card{

    constructor(title, description, imageUrl = '', link = '', displayType = CardDisplayType.ImageFullLength){
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.link = link;
        this.descriptionLong = '';
        this.attributes = [];
        this.tags = [];
        this.gallery = [];
        this.displayType = displayType;
    }
}
export default Card;