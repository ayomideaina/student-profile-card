# KodeCamp 6.0 — Student Profile Card

A React application that displays student profile cards with detailed information, grades, and skills. Built with React + Vite.

## Features

- **Student Dashboard**: View all students or filter to show only active students
- **Profile Cards**: Display student information including name, track, status, and grade
- **Grade Calculation**: Automatic grade assignment based on score (A-F scale)
- **Skill Tracking**: List of skills for each student
- **Status Indicators**: Visual distinction between active and inactive students
- **Average Score**: Dashboard header displays the average score across all students

## Project Structure

```
src/
├── App.jsx                 # Main app component with student data and filtering
├── App.css                 # Main styles
├── main.jsx               # React entry point
├── index.css              # Global styles
├── components/
│   ├── Header.jsx         # Dashboard header
│   ├── StudentList.jsx    # List container for student cards
│   ├── StudentCard.jsx    # Individual student profile card
│   ├── Badge.jsx          # Badge component for labels
│   └── StatBar.jsx        # Score/stat bar component
└── assets/                # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Component Details

### StudentCard
Contains the `getGrade` utility function that converts numeric scores to letter grades:
- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: Below 60

## Technologies Used

- React
- Vite
- CSS3
- ES6+


