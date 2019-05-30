import Card from 'Src/models/Card';
import axios from 'axios';

class DataService{
    constructor(){
        this.projectCards = this.initializeProjectCards();
        this.skillCards = this.initializeSkillCards();
        this.selfCard = this.initializeSelfCard();
        this.socialMediaCards = this.initializeSocialMediaCards();
        this.resumeUrl = getUploadsDir('documents/resume.pdf');

    }

    sendEmail(data){
        var apiKey = '47d71c07-661d-4a43-abb4-503e6d64c4ea';
        var subject = "Evan website contact";
        var toEmail = 'evandsilverstein@gmail.com';
        var fromEmail = 'evandsilverstein@gmail.com';

        // var fromEmail = data.email;
        var fromName = data.name;
        var msg = data.message + '<br/>' + 'Reply Email: ' + data.email;

        var link = 'https://api.elasticemail.com/v2/email/send?' + 'apikey=' + apiKey + '&subject=' + subject + '&from=' + fromEmail + '&fromName=' + fromName + '&to=' + toEmail + '&bodyHtml=' +msg;
        return axios.post(link,
        data
        )
    }

    initializeSelfCard(){
        var title = 'Evan Silverstein';
        var imgUrl = getUploadsDir('images/evan-headshot.jpg');
        var description = "I'm a Web Developer at Simplistics (Toronto, ON). I love building applications based on software design patterns (especially dependency injection)";
        var card = new Card(title, description, imgUrl);
        return card;

    }

    initializeProjectCards(){
        var cards = [];
        var title = 'MacroManager';
        var description = "A package manager for VBA";
        var imgUrl = getUploadsDir('images/desktop-app-icon.png');
        var link = 'http://macromanager.github.io';
        var card1 = new Card(title, description, imgUrl, link);

        var title = 'Stacker';
        var description = "The result of a hackathon";
        var imgUrl = getUploadsDir('images/stacker.png');
        var link = 'https://evan-silverstein-stacker.github.io';
        var card2 = new Card(title, description, imgUrl, link);

        var title = 'Hangman';
        var description = "Classic";
        var imgUrl = getUploadsDir('images/hangman.png');
        var link = "https://evan-silverstein-hangman.github.io";
        var card3 = new Card(title, description, imgUrl, link);

        cards.push(card1, card2, card3);
        return cards;

    }

    initializeSkillCards(){
        var cards = [];
        var title = 'Backend';
        var description = "I love building the backend architecture of an application using";
        var imgUrl = 'check-square';
        var card1 = new Card(title, description, imgUrl);

        var title = 'Frontend';
        var description = "skill description2";
        var imgUrl = 'check-square';
        var card2 = new Card(title, description, imgUrl);

        cards.push(card1, card2);
        return cards;

    }


    initializeSocialMediaCards(){
        var cards = [];

        var title = 'LinkedIn';
        var description = "linkedin";
        var imgUrl = 'linkedin';
        var link = 'https://www.linkedin.com/in/evan-silverstein/';
        var card1 = new Card(title, description, imgUrl, link);


        var title = 'GitHub';
        var description = "github";
        var imgUrl = 'github';
        var link = 'https://github.com/Titaniumstein';

        var card2 = new Card(title, description, imgUrl, link);

        cards.push(card1, card2);
        return cards;

    }

    getResumeUrl(){
        return this.resumeUrl;
    }

    getSocialMediaCards(){
        return this.socialMediaCards;
    }

    getSelfCard(){
        return this.selfCard;
    }

    getSkillCards(){
        return this.skillCards;
    }

    getProjectCards(){
        return this.projectCards;
    }
}

export default DataService;