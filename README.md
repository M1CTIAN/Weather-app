# ☁️ Editorial Weather App

A minimalist, high-end weather application designed with an editorial aesthetic. Built with Node.js, Express, and Tailwind CSS, featuring smooth GSAP animations and real-time data from OpenWeatherMap.

<img width="1919" height="1065" alt="image" src="https://github.com/user-attachments/assets/d4cf51e4-9e63-4f63-b146-5899780917cc" />
*The minimal landing page with search and daily facts.*

## ✨ Features

-   **Minimalist Design:** Clean, "Stone" color palette with serif typography (Playfair Display) for an editorial look.
-   **Real-Time Weather:** Current temperature, humidity, wind speed, and weather conditions.
-   **5-Day Forecast:** Accurate forecast data presented in a clean grid.
-   **Smart Search:** Autocomplete city suggestions using the OpenWeatherMap Geocoding API.
-   **Smooth Animations:** GSAP-powered entrance animations and fact rotators.
-   **Responsive:** Fully responsive layout that looks great on mobile and desktop.
-   **"Did You Know?" Section:** A rotating carousel of interesting weather facts.

## 📸 Screenshots

| Landing Page | Weather Details |
|:---:|:---:|
| <img width="1919" height="1065" alt="image" src="https://github.com/user-attachments/assets/4c9d81f4-8630-4313-a7d6-e406f05a1f6b" />| <img width="1919" height="1061" alt="image" src="https://github.com/user-attachments/assets/6557983e-03c6-42c8-b9a3-433fec8f9c57" />|
| *About Interface* | *Current Weather & Forecast* |

## 🛠️ Tech Stack

-   **Backend:** Node.js, Express.js
-   **Frontend:** EJS (Embedded JavaScript Templates)
-   **Styling:** Tailwind CSS (via CDN), FontAwesome
-   **Animations:** GSAP (GreenSock Animation Platform)
-   **API:** OpenWeatherMap (Current Weather, 5-Day Forecast, Geocoding)
-   **HTTP Client:** Axios

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   npm (Node Package Manager)
-   An API Key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure API Key**
    Open `app.js` and replace the placeholder with your OpenWeatherMap API key:
    ```javascript
    const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
    ```
    *(Note: In a production environment, use `.env` files to store secrets)*

4.  **Run the application**
    ```bash
    node app.js
    ```

5.  **Visit the app**
    Open your browser and go to:
    `http://localhost:3001`

## 📂 Project Structure

```
weather-app/
├── public/
│   └── css/
│       └── styles.css      # Custom overrides (mostly Tailwind used)
├── views/
│   ├── partials/
│   │   ├── header.ejs      # Head, Nav, Tailwind config
│   │   └── footer.ejs      # Scripts, Copyright
│   ├── home.ejs            # Landing page with search
│   ├── weather.ejs         # Weather results page
│   └── about.ejs           # About page
├── app.js                  # Main server file
├── package.json            # Dependencies
└── README.md               # Documentation
```

## 🎨 Design Philosophy

The design moves away from the typical "blue sky" weather app tropes. Instead, it embraces:
-   **Typography:** Using *Playfair Display* for headings to give a magazine-like feel.
-   **Whitespace:** Generous spacing to reduce cognitive load.
-   **Motion:** Subtle, staggered animations that feel organic rather than mechanical.

## 📄 License

This project is licensed under the ISC License.

---
*Created by Arpit*
