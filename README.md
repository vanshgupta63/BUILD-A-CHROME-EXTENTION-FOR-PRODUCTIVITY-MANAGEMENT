# BUILD-A-CHROME-EXTENTION-FOR-PRODUCTIVITY-MANAGEMENT


COMPANY: CODTECH IT SOLUTIONS

NAME: VANSH GUPTA

INTERN ID: CT04DG3248

DOMAIN: MERN STACK DEVELOPMENT

DURATION: 8 WEEKS

MENTOR: NEELA SANTOSH



**During my internship, I undertook a practical and highly impactful project — building a Chrome Extension for Productivity Management. The core objective of this project was to develop a browser-based tool that helps users manage their online productivity by monitoring website usage, blocking distractions, setting daily goals, and generating productivity reports. This extension was designed to work seamlessly within the Google Chrome browser, providing real-time monitoring and feedback to help users stay focused during their work or study hours. The project gave me valuable exposure to browser extension development, background scripting, client-side storage, and data visualization — all within the context of productivity enhancement.

The project was built using modern web development technologies. The frontend interface of the extension was developed using HTML, CSS (with Tailwind CSS for styling), and JavaScript, which formed the popup and settings pages of the extension. These pages provided users with a clean and interactive UI to set goals, configure blocked websites, and view usage statistics. The extension communicated with the background scripts using Chrome Extension APIs, especially the chrome.tabs, chrome.storage, and chrome.runtime APIs, which enabled the extension to monitor active tabs, store user preferences locally, and manage communication between components.

The core functionality resided in the background script, which continuously ran in the background to track which websites were being visited and for how long. This data was captured and logged based on the tab URL and time intervals, allowing for detailed tracking of how much time a user spent on productive vs non-productive websites. A predefined list of distracting websites (like social media or entertainment platforms) could be configured by the user, and the extension would block or redirect the user when those sites were accessed during focus hours. This was achieved using URL matching and redirection techniques through the chrome.webNavigation API.

To make the application more powerful and persistent, I integrated the extension with a backend built using the MERN stack — MongoDB, Express.js, React.js, and Node.js. The backend was responsible for storing user performance data securely, generating daily and weekly productivity reports, and syncing data across devices. The React-based dashboard provided users with graphical insights, such as pie charts and bar graphs, showing how much time they spent on different categories of websites. These visualizations were built using libraries like Chart.js or Recharts, making the reports intuitive and easy to understand.

The entire project was developed and tested in Visual Studio Code, with the Chrome Extension loaded in developer mode for real-time testing and debugging. I used Git and GitHub for version control, and the backend server was hosted using Render or Railway, while the frontend dashboard (if built separately) was deployed on Netlify or Vercel. The extension was packaged in .crx format and included a manifest.json file specifying all permissions, background services, and UI entry points.

Throughout this project, I faced and overcame several challenges such as handling cross-origin restrictions, optimizing background script performance, syncing data in real-time with backend services, and managing local vs cloud storage. I also implemented time tracking algorithms that minimized CPU usage while still accurately logging user activity. Moreover, I worked on making the UI responsive and adding dark mode support to enhance user experience.

This internship project significantly enhanced my understanding of Chrome Extension architecture, full-stack web development, real-time monitoring systems, and browser API integrations. It taught me how to build practical tools that users can directly install and use within their browser to improve their daily workflow. By the end of the internship, I had developed a robust, user-friendly, and scalable Chrome Extension that serves as a complete productivity companion — capable of tracking usage, preventing distractions, and boosting digital well-being.
