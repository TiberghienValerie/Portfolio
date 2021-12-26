import { APP_BOOTSTRAP_LISTENER, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: 'https://mehulk05.github.io/MyShop/#/',
      githurl: 'https://github.com/mehulk05/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'React, Node, MongoDB, Express'
    },


    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/mehulk05/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'React JS'
    },



    {
      id: 6,
      title: 'News App using ReactJS (Parsing XML to JSON)',
      desc: '',
      livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/mehulk05/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-Book/',
      githurl: 'https://github.com/mehulk05/Blog-Book',
      mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://mehulk05.github.io/COVOID-19/',
      githurl: 'https://github.com/mehulk05/COVOID-19',
      mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: 'https://mehulk05.github.io/React-Weather/',
      githurl: 'https://github.com/mehulk05/React-Weather-App',
      mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
      mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05',
      mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
      mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `Développeur FullStack Angular/Symfony avec plus de  12 ans d'expérience .
  A travaillé avec le cycle de vie du développement(SDLC) et les méthodologies AGILE .
  Bonne conaissance en Symfony 5.3 et Angular 12, TypeScript, Javascript, Node JS avec responsive Design .
  Avoir une bonne compréhension de Bootstrap, MongoDB, MYSQL`

  about = "Amoureuse de l’innovation et de tout ce qui concerne la génération de nouvelles connaissances. Affrontez les problèmes avec le sourire et résolvez-les dès que possible. Très calculé sur le temps que je passe et le travail que je fais."
  resumeurl = "https://drive.google.com/file/d/1-4AA7_7P9vIggU-k5flePZSQ8f26YP0H/view?usp=sharing"


  skillpro = `
  Réaliser des supports techniques, manuels d’exploitation et manuels utilisateurs ainsi que leur suivi .
  Réaliser la documentation PHPDocumentator de projet .
  Former ou assister un public à distance ou pas sur les outils réalisés .
  Analyser des problèmes techniques et déterminer des mesures correctives à distance ou pas .
  Déterminer les phases et procédures de tests techniques et fonctionnels de programmes et applications informatiques .
  - Elaborer des tests unitaires et fonctionnels et des jeux de tests
  Concevoir et développer les programmes et applications informatiques .
  - Développer en équipe ou en autonomie divers projets sous Angular 12/13 .
  - Développer en équipe ou en autonomie divers projets sous Symfony 2.x (JQUERY, SCSS) .
  - Concevoir un module de changement de bandeau multilingue sous Prestashop 1.6 avec sa notice d’explication .
  - Elaborer un outil de gestion de documents et d’une cartographie (PHP, SQL, Javascript, Api Google) .
  - Co-développer l’outil extranet de la société sous PHP objet / MYSQL et réaliser des sites de client depuis cet outil .
  - Réaliser une base de données comptable sous Filemaker Pro et importer les données sous SAGE .
  - Créer divers outils sous Access .
  - Créer ou modifier diverses applications sous PHP/MYSQL (Gestion des congés/absences, simulateur de budget)

  
  
  
  
  
  
  `

  skillsData: any = [
   
    {
      'id': '1',
      'titre': 'Logiciels',
      'skill': 'Plastic, Smart CSV, Git, Git Graph',
      'progress': '80%'
    },
    {
      'id': '2',
      'titre': 'Langages',
      'skill': 'JAVASCRIPT, TYPESCRIPT, AJAX',
      'progress': '75%'
    },
    {
      'id': '3',
      'titre': 'CMS', 
      'skill': 'WORDPRESS, SPIP',
      'progress': '80%'
    },
    {
      'id': '4',
      'titre': 'Framework',
      'skill': 'Symfony 5.3 avec Doctrine & Api Platform',
      'progress': '80%'
    },
   
    
    {
      'id': '5',
      'skill': 'PhpStorm, Eclipse, Visual Studio Code',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PHP, CSS, SCSS, HTML, XML',
      'progress': '90%'
    },
    {
      'id': '7',
      'skill': 'EgroupWare, prestashop, Joomla, MediaWiki',
      'progress': '70%'
    },
    {
      'id': '8',
      'skill': 'Boostrap, JQUERY, Angular',
      'progress': '70%'
    },
  
    {
      'id': '9',
      'skill': 'AMC Designer, Looping, MySQl Workbench, Figma',
      'progress': '80%'
    },
    {
      'id': '10',
      'skill': 'SQL, PL/SQL, MYSQL, MONGODB ',
      'progress': '85%'
    },
    


  

  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '12/2020 - 12/2021',
      'education': 'Niveau III',
      'stream': 'Titre professionnel Développeuse Web & Web Mobile',
      'info': `CCP 1 : Développer la partie Front-End d’une application web et web mobile .
      - Maquetter une application (Maquettage) .
      - Réaliser une interface utilisateur web statique et adaptable (HTML / CSS / Responsive) .
      - Développer une interface utilisateur web dynamique (JavaScript / Angular) .
      - Réaliser une interface utilisateur avec une solution de gestion de contenu (Wordpress) .
            
      CCP 2 : Développer la partie Back-End d’une application web et web mobile .
      - Créer une base de données (SQL) .
      - Développer les composants d’accès aux données (PHP) .
      - Développer la partie back end d’une application web et web mobile (Symfony) .
      - Elaborer et mettre en œuvre des composants dans une application de gestion de contenu (Wordpress) .
      
      MODULES TRANSVERSES .
      - Algorithmes, outils de Versionning (GIT), Linux, culture numérique, référencement web, Business Case, Gestion de Projet, Anglais, Communication, Techniques de Recherche d’Emploi`,
      'institution': 'HUMAN BOOSTER'
    },
    {
      'id': '2',
      'from_to_year': '05/2016 - 01/2017',
      'education': 'Niveau III',
      'stream': 'Titre professionnel Développeur Logiciel',
      'institution': 'GROUPE ZENOS',
      'info': `- Algorithme et programmation orientée objet sous PHP .
      - HTML / CSS .
      - CSS avancé .
      - JavaScript et jQuery .
      - JavaScript avancé .
      - Bases de données relationnelles et SQL .
      - Design patterns .
      - C# sous le Framework C.Net .
      - PHP sous le framework Symphony .
      - Développement d'une boutique en ligne en PHP avec un lien avec une base de données .
      - Développement d'un tchat en ligne en C#` 
    },
    {
      'id': '3',
      'from_to_year': '03-2003 / 12-2003',
      'education': 'Niveau III',
      'stream': 'Titre Euromaster Multimédia TIC orienté réseaux de FRANCE TELECOM FORMATION',
      'institution': 'Médiaroanne de Roanne',
      'info': `- Algorithme et programmation orientée objet sous PHP / ASP .
      - Apache .
      - Merise .
      - HTML / CSS .
      - JavaScript et jQuery .
      - Bases de données relationnelles et SQL .
      - Développement d'une application en PHP avec un lien avec une base de données`
    },
    {
      'id': '4',
      'from_to_year': '10/2000 - 10/2001',
      'education': 'Niveau II',
      'stream': 'DNTS Génie Logiciel mention “Chargé de Projet” et AQP “Assistant de Projet Informatique',
      'institution': 'IUT de Roanne',
      'info': `Double diplôme obtenu en contrat de qualification chez les établissements Jabouley`
    },
    {
      'id': '5',
      'from_to_year': '09/1997 - 07/2000',
      'education': 'Niveau III',
      'stream': `BTS Informatique de Gestion, option développeur d'applications`,
      'institution': 'Lycée Simone Weil',
      'info': ``
    }
  ];
  exprienceData: any = [
    {
      id: 11,
      company: 'Sumseo',
      location: 'Paris',
      timeline: '09/2021 - 11/2021',
      role: 'Développeuse Web FullStack Angular',
      work: ` Technologies : Angular 12 , Node JS , MongoDB, Ui Matérial, Metronic . 
      Stage de 2 mois dans le cadre de fin de ma formation sur le projet de la société en cours de développement`
    },
    {
      id: 10,
      company: 'Edokial',
      location: 'Saint Etienne',
      timeline: '04/2018 - 06/2018',
      role: 'Intégrateur',
      work: `Technologies : Excel . 
      Conception d'un fichier de suivi des divers dossiers d'exploitation sous Excel .
      Création des divers dossiers d'exploitations avec l'aide des développeurs`
    },

    {
      id: 9,
      company: 'SFI Multimédia',
      location: 'Saint Etienne',
      timeline: '10/2016 - 07/2017',
      role: 'Développeuse',
      work: `Technologies : Symfony 2.X (JQUERY, SCSS), Prestashop 1.6, PHP, MYSQL . 
      Développement en équipe de divers modules de divers projets sous Symfony 2.x (JQUERY, SCSS) . 
      Développement d'un module de changement de bandeau (fond, couleur, police, taille) suivant la langue sous Prestahop 1.6 avec sa notice d'explication . 
      Amélioration d'un outil de gestion de congés, absences... sous PHP`
    },

    {
      id: 8,
      company: 'Onisep',
      location: 'Saint Etienne',
      timeline: '12/2011  11/2012',
      role: 'Développeuse Web',
      work: `Technologies : Symfony 2.X (JQUERY, SCSS), PHP Documentator . 
      Participation au projet "MonStageEnLigne" .
      Elaboration de tests unitaires et fonctionnels pour ce projet .
      Elaboration de la documentation PhpDocumentator pour ce projet`
    },

    {
      id: 7,
      company: 'Groupe Casino',
      location: 'Saint Etienne',
      timeline: '06/2011 - 09/2011',
      role: 'Responsable projet',
      work: `Technologies : Excel, Access, SQL . 
      Hotline Niveau 1 .
      Elaboration de jeux de tests en vue d’une migration de logiciels Access / Excel .
      Rédaction de la documentation pour les tests sous Excel`
    },


    {
      id: 6,
      company: 'Universite Jean Monnet',
      location: 'Saint Etienne',
      timeline: '11/2009 - 10/2010',
      role: 'Développeuse',
      work: `Technologies : Spip, Claroline. 
      Développement et suivi d'applications pour l'enseignement et la recherche (Spip) .
      Mise en place et maintien des plates formes d'enseignement à distance (Claroline) .
      Mise en oeuvre des services dans l'ENT .
      Assistance et formation aux utilisateurs`
    },


    {
      id: 5,
      company: 'Zoomacom',
      location: 'Saint Etienne',
      timeline: '10/2007 - 04/2009',
      role: 'Développeuse/ Animatrice',
      work: `Technologies : PHP / MYSQL / AJAX / XML et API Google Maps, Joomla, Wiki . 
      Elaboration d’un outil de gestion de documents et d’une cartographie pour le RDAC (Réseau Départemental des Acteurs de la Cyberloire) sous PHP / MYSQL / AJAX / XML et API Google Maps .
      Développement spécifique, installation et configuration des comptes sous Egroupware .
      Configuration de divers wikis et CMS`
    },


    {
      id: 4,
      company: 'Intégrale Vision',
      location: 'Saint Etienne',
      timeline: '05/2004 - 04/2007',
      role: 'Développeuse Web',
      work: `Technologies : PHP orienté Objet, MYSQL . 
      Développement et maintenance de sites de clients sous l’outil extranet de la société en PHP Objet / MYSQL .
      Co-développement de l’outil extranet de la société sous PHP objet / MYSQL`
    },


    {
      id: 3,
      company: 'Présence Rhône Alpes',
      location: 'Lyon',
      timeline: '12/2002',
      role: 'Développeuse Informatique',
      work: `Technologies : SAGE . 
      Exportation des données et mise en place des paramètres liés aux transferts des écritures sous SAGE depuis l’application créée chez Igraf Ingiènerie`
    },


    {
      id: 2,
      company: 'Igraf Ingiènerie',
      location: 'Lyon',
      timeline: '02/2002 - 11/2002',
      role: 'Technicienne en informatique',
      work: `Technologies : FileMaker Pro . 
      Télémaintenance de la base de données sous File Maker : “Gestion commerciale des BTP et chariot” .
      Programmation et développement d’une base de données comptable sous File Maker Pro pour Présence Rhône Alpes`
    },


    {
      id: 1,
      company: 'Etablissements Jabouley',
      location: 'Saint Etienne',
      timeline: '10/2000 - 12/2001',
      role: 'Attachée de gestion',
      work: `Technologies : Access, Excel . 
      Développement de divers outils sous Access .
      Elaboration des manuels utilisateurs .
      Formation sur ces diverses bases de données .
      Gestion du planning de formation pour 20 personnes sur 2 PC`
    },







  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}