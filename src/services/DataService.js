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
        var description = "I'm a Web Developer at Simplistics (Toronto, ON). I love building applications based on software design patterns, especially dependency injection";
        var card = new Card(title, description, imgUrl);
        return card;

    }

    initializeProjectCards(){
        var cards = [];
        var title = 'MacroManager';
        var description = "A package manager for VBA";
        var descriptionLong = "MacroManager is a tool that manages scripts written in Visual Basic for Applications (VBA). The desktop application allows users to easily create and distribute packages containing VBA macros to facilitate code reusability."
        var imgUrl = getUploadsDir('images/desktop-app-icon.png');
        var link = 'http://macromanager.github.io';
        var attributes = [
            'The frontend was developed with WPF using a unidirectional data flow architecture and a state management pattern',
            'The backend is composed of microservices hosted on Azure, including an access management service built with Keycloak for authentication and authorization',
            'Client-server communication enabled through ASP.NET Web API and RabbitMQ',
        ]
        var tags = [
            'ASP.NET Web API',
            'Azure', 
            'Keycloak',
            'WPF', 

            
        ]
        var gallery = [
            getUploadsDir('images/macro-manager-images/macro_packages.png'),
            getUploadsDir('images/macro-manager-images/macro_macroEditor_properties.png'),
            getUploadsDir('images/macro-manager-images/macro_macroEditor_code.png'),

        ]
        var card1 = new Card(title, description, imgUrl, link);
        card1.descriptionLong = descriptionLong;
        card1.attributes = attributes;
        card1.tags = tags;
        card1.gallery = gallery;


        var title = 'Stacker';
        var description = "A game of great skill";
        var descriptionLong = "Stacker is the product of a hackathon. It was inspired by an arcade game of the same name. Follow the link to play!"
        var imgUrl = getUploadsDir('images/stacker.png');
        var link = 'https://evan-silverstein-stacker.github.io';
        var tags = [
            'React',            
        ]
        var card2 = new Card(title, description, imgUrl, link);
        card2.descriptionLong = descriptionLong;
        card2.tags = tags;
        

        var title = 'Hangman';
        var description = "A game of little skill";
        var descriptionLong = "Hangman - give it a shot!"
        var imgUrl = getUploadsDir('images/hangman.png');
        var link = "https://evan-silverstein-hangman.github.io";
        var tags = [
            'React',            
        ]
        var card3 = new Card(title, description, imgUrl, link);
        card3.tags = tags;
        card3.descriptionLong = descriptionLong;
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