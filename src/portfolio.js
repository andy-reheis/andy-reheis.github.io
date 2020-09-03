
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

//import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Andreas Reheis",
  title: "Hello, my name is Andreas!",
  subTitle: "Computer Science student with main focus on Java & Spring and JavaScript & HTML5 & CSS"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/andy-reheis/",
  linkedin: "INSERT LINKEDINID",
  gmail: "andreas.reheis[at]gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "What I do and what I am interested in",
  subTitle: "STUDENT WHO WANTS TO EXPLORE NEW FRAMEWORKS AND PROGRAMMING LANGUAGES",
  skills: [
    "I have to write this text ... ",
/*     emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean") */
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Framework",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java",  //Insert stack or technology you have experience in
      progressPercentage: "75%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Spring",  //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "C with PThreads or OMP",
      progressPercentage: "70%"
    },
    {
      Stack: "JavaScript | HTML | CSS",
      progressPercentage: "85%"
    },
    {
      Stack: "Python",
      progressPercentage: "40%"
    },    {
      Stack: "Algorithms and DataStructures",
      progressPercentage: "66%"
    },
    {
      Stack: "Docker",
      progressPercentage: "33%"
    },
    {
      Stack: "Haskell",
      progressPercentage: "20%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Designer | Software Developer",  
      company: "Energiefreund, ZET & BZR GmbH",
      companylogo: require("./assets/images/energiefreundLogo.png"),
      date: "August 2019 - present",
      desc: "Working at this company part-time, parellel to my study at University Innsbruck. Main part is to develop a Front-End for heating controls. Technologies used in this job:",
      descBullets: [
        "atvise [For Front-End] with Html5 | CSS | JavaScript",
        "OPC UA [data transfer]",
        "Modbus [data transfer]",
        "Python  [scripts for convenience]"
      ]
    },
    {
      role: "Student",
      company: "University Of Innsbruck",
      companylogo: require("./assets/images/uniIbkLogo.jpg"),
      date: "October 2018 - present",
      desc: "I am currently studying computer science at University of Innsbruck and will graduate in 2021. Additionally to my studies I am working part-time at a local software company.",
    },
    {
      role: "Internship",
      company: "Energiefreund, ZET & BZR GmbH",
      companylogo: require("./assets/images/energiefreundLogo.png"),
      date: "July 2019 - August 2019",
      desc: "Internship in my first summer as a student. Main target was to get an overview over the software and upcoming tasks.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

// Currently I dont want to show this section
const bigProjects = {
/*   title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ] */
};

// Your Achievement Section Include Your Certification Talks and More

// Currently I dont want to show this section
const achievementSection = {

/*   title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ] */
};

// Blogs Section

// Currently I dont want to show this section
const blogSection = {

/*   title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ] */
};

// Talks Sections

// Currently I dont want to show this section
const talkSection = {
/*   title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ] */
};

// Podcast Section

// Currently I dont want to show this section
const podcastSection = {
/*   title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [] */
};

const contactInfo = {
  title: "Get in touch",
  subtitle: "if you want to discuss a new project or just talk",
  email_address: "andreas.reheis[at]gmail.com"
};

//Twitter Section

const twitterDetails = {};

export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
