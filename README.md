SolarMonitor
SolarMonitor is a web application designed to facilitate real-time monitoring and management of solar energy systems. By leveraging IoT technology, it provides users with detailed insights into solar panel performance, energy production, and system health. The application supports multiple user roles, each with tailored dashboards and functionalities to ensure efficient energy management.

🛠️ Technologies Used
Frontend: HTML, CSS, EJS (Embedded JavaScript templating)

Backend: Node.js, Express.js

Database: MySQL

Authentication & Security: bcrypt (for password hashing), express-session (for session management)

Cross-Origin Resource Sharing: cors

IoT Integration: MQTT protocol for real-time data transmission from solar sensors

Cloud Services: AWS IoT Core or similar platforms for device management and data processing

🔐 User Roles and Capabilities
Admin:

Manage all users and accounts

Oversee system-wide settings and configurations

Monitor overall system performance and analytics

Installer:

Register and configure new solar installations

Calibrate sensors and ensure accurate data transmission

Access installation logs and diagnostics

Maintenance Technician:

Monitor system health and receive alerts for anomalies

Schedule and log maintenance activities

Access historical performance data for troubleshooting

End User (Homeowner/Business Owner):

View real-time energy production and consumption data

Access historical analytics and reports

Receive notifications about system performance and maintenance schedules

🌐 Features
Landing Page: Informative homepage for visitors and potential users

User Authentication: Secure signup and login with hashed passwords and session management

Role-Based Dashboards:

Admin Dashboard: User management, system analytics, and settings

Installer Dashboard: Tools for setting up and configuring new installations

Maintenance Dashboard: Real-time alerts, maintenance logs, and diagnostics

User Dashboard: Personalized energy data, reports, and notifications

Real-Time Monitoring: Live data visualization of solar panel performance, energy production, and system health

Historical Data Analysis: Access to past performance metrics and trends

Alerts and Notifications: Automated alerts for system anomalies, maintenance reminders, and performance issues

Responsive Design: Mobile-friendly interface for access on various devices

📁 Project Structure
index.js: Main application file with routes and server setup

views/: EJS templates for rendering pages

public/: Static assets like CSS and images

routes/: Express route handlers for different functionalities

models/: Database models and schemas

controllers/: Business logic and data processing

solar_monitor.sql: SQL file to set up the MySQL database schema

⚙️ Installation
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/yourusername/solar-monitor.git
cd solar-monitor
Install Dependencies:

bash
Copy
Edit
npm install
Set Up the Database:

Ensure MySQL is installed and running

Create a new database named solar_monitor_db

Import the solar_monitor.sql file to set up the schema

Configure Environment Variables:

Create a .env file in the root directory

Add necessary configurations like database credentials and session secrets

Start the Server:

bash
Copy
Edit
node index.js
Access the Application:

Open your browser and navigate to http://localhost:8080

📄 License
This project is proprietary software (closed source). All rights reserved.
