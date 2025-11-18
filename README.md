🧳 Travel Landing Page – React + JSON Server
A fully responsive Travel Landing Page built with ReactJS and JSON Server, featuring modern UI sections such as Hero, Categories, Destinations, Trip Steps, Testimonials Slider, Newsletter, and Footer.

🚀 Features
✔️ Fully responsive — Desktop, Tablet & Mobile
✔️ API-based Destinations & Testimonials
✔️ Testimonials slider with fade animation + arrow controls
✔️ Category cards with red hover effect
✔️ Brand logos (grayscale → color on hover)
✔️ Newsletter subscription (POST request)
✔️ App Store / Play Store–style download buttons
✔️ Clean UI using CSS Modules
✔️ No console errors & smooth interaction

🛠️ Tech Stack
React JS
CSS Modules
Axios
JSON Server


📦 Installation

1️⃣ Install dependencies
npm install

2️⃣ Start React App
npm run dev
Runs at: http://localhost:5173

🗄️ Backend (JSON Server)

Start backend:
npx json-server --watch db.json --port 4000
API base URL: http://localhost:4000

🔗 API Endpoints
Method	Endpoint	Description
GET	/destinations	Fetch destination cards
GET	/testimonials	Fetch reviews
POST /subscribers	Submit email for newsletter

📁 Project Structure
src/
 ├── components/     # Reusable components
 ├── style/          # CSS Modules
 ├── assets/         # Images & icons
db.json              # JSON Server API

📝 Notes
All sections are fully responsive
Hover effects & animations match the provided design
Backend & frontend run independently
Clean folder structure and consistent styling