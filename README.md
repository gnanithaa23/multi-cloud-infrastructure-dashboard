# Optimize Multi-Cloud Infrastructure – Frontend Challenge

Live Demo:  
https://my-nextjs-project-sable.vercel.app/

## Overview

This project is my implementation of the **Frontend Engineering Technical Challenge** provided by Atomity.

The goal of this challenge was to build a responsive and animated feature section titled **“Optimize Multi-Cloud Infrastructure.”** The section visually represents cloud infrastructure usage through animated progress bars and demonstrates how data can be fetched and displayed dynamically in a modern frontend application.

The implementation focuses on clean component structure, smooth UI animations, and reusable logic using custom hooks.

---

## Tech Stack

The following technologies were used to build the project:

* **Next.js** – React framework used for project structure and routing
* **React** – Component-based UI development
* **Framer Motion** – Smooth UI animations and progress bar transitions
* **JavaScript / TypeScript** – Application logic
* **CSS / Utility Styling** – Layout and visual design

---

## Features

### Animated Cloud Usage Bars

The project displays cloud usage metrics using animated progress bars that visually represent resource consumption.

### Custom Data Fetching Hook

A reusable React hook (`useCloudData`) is implemented to manage fetching and providing data for the UI components. This keeps the data logic separated from presentation logic.

### Responsive Layout

The UI adapts to different screen sizes to ensure a consistent user experience across devices.

### Modular Component Structure

The project is structured using reusable components to maintain clean and maintainable code.

---

## Project Structure

```
multi-cloud-infrastructure
│
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components
│   └── FeatureSection.tsx
│
├── hooks
│   └── useCloudData.ts
│
├── package.json
└── README.md
```

---

## Running the Project Locally

1. Clone the repository

```
git clone https://github.com/gnanithaa23/multi-cloud-infrastructure-dashboard.git
```

2. Navigate into the project directory

```
cd multi-cloud-infrastructure-dashboard
```

3. Install project dependencies

```
npm install
```

4. Start the development server

```
npm run dev
```

5. Open the application in your browser

```
http://localhost:3000
```

---

## Implementation Approach

The project was developed with the following approach:

* Build a clean and modular component structure
* Separate data logic using custom React hooks
* Use Framer Motion for smooth animations
* Ensure the UI is simple, readable, and responsive

---

## Repository

GitHub Repository
https://github.com/gnanithaa23/multi-cloud-infrastructure-dashboard

---

## Notes

This project was completed as part of the **Atomity Frontend Engineering Internship Technical Challenge**.
# multi-cloud-infrastructure-dashboard
Frontend project built using Next.js
