Ancient Glori
About the Project
Ancient Glori is a web application designed to [briefly describe the purpose of the project, e.g., explore historical sites, showcase ancient architecture, etc.]. The project follows the MVC (Model-View-Controller) architecture, ensuring a structured and scalable codebase.

Features
 User authentication system
 Interactive historical maps
 Search and filter functionality for ancient sites
 Admin panel to manage content
Tech Stack
Frontend: EJS (Embedded JavaScript), HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB

MVC Architecture in Ancient Glori
The project follows the Model-View-Controller (MVC) architecture for better code organization and maintainability:

1. Model
Represents the data layer and handles database operations.
Defines schemas and interacts with the database.
Example: models/AncientSite.js (Schema for storing historical sites).
2. View 
Handles the UI and presentation layer.
Built using : EJS (Embedded JavaScript), HTML, CSS, JavaScript
Example: views/home.ejs (if using EJS for templating in Express).
3. Controller
Manages business logic and application flow.
Handles user requests, processes data, and interacts with models.
Example: controllers/siteController.js (Handles API requests for historical sites).
Installation & Setup
Clone the repository:

git clone https://github.com/yourusername/ancient-glori.git
cd ancient-glori
Install dependencies:

npm install
Set up environment variables in .env file:

PORT=8080  
MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_jwt_secret  
Start the development server:

nodemon app.js
Contributing
Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m "Added new feature")
Push to the branch (git push origin feature-branch)
Open a pull request

Contact
For any questions or feedback, feel free to reach out:
📧 Email: abhishekkaushal2526@gmail.com
