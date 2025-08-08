/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mahmoud Alhihi",
  title: "Hey all, I'm Mahmoud",
  subTitle: emoji(
    "Computer Vision | Deep Learning | AI in Healthcare"
  ),
  resumeLink:"/Mahmoud_Alhihi_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MahmoudAlhihi",
  linkedin: "https://www.linkedin.com/in/mahmoud-alhihi-238047254/",
  //gmail: "mahmoudalhihi7@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE COMPUTER VISION & DEEP LEARNING STUDENT EXPLORING AI FOR GOOD",
  skills: [
    emoji(
      "⚡Build and train deep learning models using PyTorch and OpenCV"
    ),
    emoji("⚡ Design real-time object detection systems using YOLOv5/v8"),
    emoji(
      "⚡ Apply AI to healthcare and medical imaging projectsn"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "YOLOv8",
      fontAwesomeClassname: "fas fa-crosshairs"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "MediaPipe",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "DICOM",
      fontAwesomeClassname: "fas fa-microscope"
    },
    {
      skillName: "LabelImg",
      fontAwesomeClassname: "fas fa-image"
    },
    {
      skillName: "Google Colab",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Microsoft Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Minnesota Twin Cities",
      logo: require("./assets/images/umnLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2024 - May 2026",
      desc: "Completing core CSCI courses and technical electives focused on Artificial Intelligence and Machine Learning.",
      descBullets: [
        "2x Dean’s List recipient",
        "Tau Sigma Honor Society member for transfer student excellence"
      ]
    },
    {
      schoolName: "Century College",
      logo: require("./assets/images/centuryLogo.png"),
      subHeader: "Associate of Science in Computer Science",
      duration: "August 2022 - July 2024",
      desc: "Focused on foundational computer science courses",
      descBullets: [
        "4x Dean’s List recipient",
        "Phi Theta Kappa (PTK) member for academic excellence",
        "Worked 3 on-campus jobs while maintaining strong academic performance"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "OpenCV",
      progressPercentage: "50%"
    },
    {
      Stack: "Tensorflow",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Assistant",
      company: "Century College",
      companylogo: require("./assets/images/centuryLogo.png"),
      date: "January 2023 – May 2024",
      desc: "Supported faculty and students in HyFlex learning environments by managing technology, troubleshooting issues, and ensuring smooth class delivery across in-person, live Zoom, and asynchronous online formats.",
      descBullets: [
        "Assisted six professors in delivering hybrid and online courses.",
        "Monitored Zoom sessions and resolved technical issues in real time.",
        "Set up, operated, and maintained classroom technology including cameras and projectors."
      ]
    },
    {
      role: "Support services greeter",
      company: "Century College",
      companylogo: require("./assets/images/centuryLogo.png"),
      date: "January 2023 – January 2024",
      desc: "Provided front-line support to students and parents by offering guidance, answering questions, and maintaining a welcoming, organized study environment.",
      descBullets: [
        "Assisted students and parents with inquiries about tutoring spaces and campus navigation.",
        "Maintained a clean, organized, and study-ready environment.",
        
      ]
    },

    {
      role: "Peer Mentor",
      company: "Century College",
      companylogo: require("./assets/images/centuryLogo.png"),
      date: "August 2023 – May 2024",
      desc: "Mentored and supported a diverse group of students, providing guidance on academic success, campus resources, and personal development. Earned NASPA Peer Educator certification.",
      descBullets: [
        "Obtained NASPA Certified Peer Educator (CPE) credential.",
        "Collaborated with students and supervisors from diverse backgrounds.",
        "Assisted students in managing stress, improving time management, and navigating campus resources."
        
      ]
      
    },

    {
      role: "Teaching Assistant",
      company: "University of Minnesota",
      companylogo: require("./assets/images/umnLogo.png"),
      date: "September 2025 – Present",
      desc: "Supporting the delivery of the Ethics in Computing course by assisting the professor with course facilitation, grading, and student engagement.",
      descBullets: [
        "Support grading and provide feedback on student assignments.",
        "Facilitate discussions on topics such as algorithmic bias, AI ethics, data privacy, and professional responsibility."
      ]
    },

    {
      role: "Tech Coach (Volunteer)",
      company: "Minnesota Literacy",
      companylogo: require("./assets/images/mnLitLogo.png"),
      date: "August 2023 – December 2023",
      desc: "Provided technology training and support to immigrants and former inmates, helping them build essential digital skills.",
      descBullets: [
        "Taught basic hardware and software usage to increase confidence in using technology.",
        "Covered topics including Microsoft Office, Google Workspace, and internet safety."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I WORKED ON",
  projects: [
    {
      image: require("./assets/images/detect.jpeg"),
      projectName: "Stationary Object Detection",
      projectDesc: "Collected and annotated a dataset of 226 images for various stationary objects. Trained YOLOv8 models on custom data using Google Colab and Ultralytics, achieving high-accuracy detection.",
      footerLink: [
        {
          name: "Visit Google Colab",
          url: "https://colab.research.google.com/drive/1IY3cwbWdetpRWfH-Qe_h8FWRKmCRfORd?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/map.png"),
      projectName: "Drone Simulation",
      projectDesc: "Implemented an interactive drone delivery simulation in C++, including real-time navigation and dynamic entity interactions.       Developed a “Sky Reaper” extension to detect and pursue drones, attempting to intercept and decrypt encrypted package contents.",
      footerLink: [
        {
          name: "Visit Youtube",
          url: "https://youtu.be/Wv5aVv6Qr6Q?si=LagIaNo8OCOcBMif"
        }
      ]
    },
  
   {
    image: require("./assets/images/skin.png"),
    projectName: "Skin Cancer segmentation",
    projectDesc: "Preprocessed medical imaging datasets and applied data augmentation for skin lesion segmentation tasks.Preprocessed medical imaging datasets and applied data augmentation for skin lesion segmentation tasks.",
    footerLink: [
      {
        name: "Visit Google Colab",
        url: ""
      }
    ]
  }
],
  
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    " Certifications, that I have achieved !",

  achievementsCards: [
    {
      title: "OpenCV bootcamp",
      subtitle:
        "Covered topics like image processing, filtering, pose estimation, HDR, face detection, object tracking, and more.",
      image: require("./assets/images/cv.png"),
      imageAlt: "OpenCV logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1W3rYEpKtShJK5-4PIwlpN1mlXf3BmThy/view?usp=sharing"
        },
       
      ]
    },
    {
      title: "Introduction to Healtcare systems",
      subtitle:
        "Key points learned include healthcare access and stakeholders, physician practices and payment models, hospital systems, insurance intermediaries, Medicare and Medicaid, the pharmaceutical industry, healthcare quality, and the ethical implications of AI in medicine.",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Stanford Medicine logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1tlU5j9vyR56_dv6nN4fNqEJSyqNeotRz/view?usp=sharing"
        }
      ]
    },
    {
      title: "Introduction to Clincal Data",
      subtitle:
        "",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Stanford Medicine Logo",
      footerLink: [
        {
          name: "Certification: ",
          url: ""
        }
      ]
    },

    {
      title: "Tensorflow bootcamp",
      subtitle: "Covered Topics like neural network fundamentals, CNNs, image classification, semantic segmentation, transfer learning, object detection, and linear regression. ",
      image: require("./assets/images/cv.png"),
      imageAlt: "Tensorflow Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/19TpYoQ569Hi9eJXKh-KmnoI42137U2Or/view?usp=sharing" },
       
      ]
    },
    {
    title: "Peer Educator",
      subtitle: "Gained skills in peer support, ethics, cultural competence, empathy, bystander intervention, and event planning to promote positive change and effectively assist students in navigating challenges. ",
      image: require("./assets/images/naspa.png"),
      imageAlt: "NASPA Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/10Hz2IWpDaJlxBdi5aBWa_7e-Fduhepx4/view?usp=sharing" },
       
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 612(919)-5747",
  email_address: "mahmoudalhihi7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
