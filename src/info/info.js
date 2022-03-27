import houschef from '../assets/houschef.PNG'
import backlogTracker from '../assets/backlogTracker.PNG'
import portfolio from '../assets/portfolio.PNG'
import chatApp from '../assets/chatApp.png'

export const projectList = [
  {
    title: 'Chat Application',
    description: 'Full stack web application, written with TypeScript, that enables users to communicate with one another with text in real time. Frontend was built using Vue.js and CSS. The application contains responsive styling in order to allow access from many devices regardless of their screen sizes. The backend was built with Node.js, Express, and MongoDB to keep track of the users, messages, and conversations. Socket.io was used to provide real time communication between users when logged in.',
    tech: ['TypeScript', 'Vue.js', 'Node.js', 'Express', 'Socket.io', 'REST API', 'MongoDB'],
    github: 'https://github.com/Jimmy-Du/chat-application',
    image: chatApp
  },
  {
    title: 'Game Backlog Tracker',
    description: 'Full stack web application that keeps track of your finished and unfinished video games. Accesses the IGDB api to gather video game information to display to the user. Frontend is built using React and Chakra UI and scales with a wide variety of screen sizes to provide a seamless experience across all devices. Backend is built using Node.js, Express, and MongoDB to keep track of users and the backlog of each user. Authenticates and authorizes users before allowing changes to be made to user accounts.',
    tech: ['ReactJS', 'Chakra UI', 'Node.js', 'Express', 'REST API', 'MongoDB'],
    github: 'https://github.com/Jimmy-Du/backlog-tracker',
    image: backlogTracker
  },
  {
    title: 'Houschef',
    description: 'Android application that enables users to search for recipes on the internet and receive voice commands for each step of the selected recipe. Houschef utilizes natural language processing to parse actions and ingredients from each step for easier requesting of details per step. Takes advantage of the Flutter framework and is written with both Java and Kotlin.',
    tech: ['Kotlin', 'Java', 'Flutter'],
    github: 'https://github.com/mbenzreba/houschef',
    image: houschef
  },
  {
    title: 'Portfolio',
    description: 'This very webpage. A frontend application that is built using React and Tailwind CSS. Content is dynamically generated based on JSON data that is fed to the application allowing for easier maintenance of adding and removing content. Responsive styles to ensure the website works for all screen sizes.',
    tech: ['ReactJS', 'Tailwind'],
    github: 'https://github.com/Jimmy-Du/portfolio',
    image: portfolio
  }
]
