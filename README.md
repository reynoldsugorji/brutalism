
## Get Started

This project is a submission for a UI challenge that required recreating a given dashboard design using React.
The goal was to demonstrate component structuring, responsiveness, styling, and state management patterns using dummy data.

---
## 🚀 Project Initialization

The project was bootstrapped with **[Vite](https://vitejs.dev/)** for fast build times and modern development experience.
```bash
yarn create vite@latest brutalism -- --template react-ts
Prerequisites:
- Node 20+
- Yarn 1.22+
To set up the app execute the following commands.
```sh
git clone https://github.com/reynoldsugorji/brutalism.git
cd Brutalism
yarn add
yarn dev
Runs the app in the development mode.\
Open [http://localhost:3000] to view it in the browser.
```
## Project structure
This project structure ensures:
- Modular component structure: components are split by how they are used so as to ensure resuability
- Seperation of concerns: Data logic(dummy data) and UI are seperated
```bash
src/
├── components/
│   ├── common/         # Reusable common UI components (buttons, headers, cards, logo, etc.)
│   └── dashboard/      # Dashboard-specific components (charts, dashboard header, etc.)
├── data/               # Static dummy data used to simulate API responses
├── layout/              # Shared layout components (e.g., sidebar, header)
├── pages/
│   └── Dashboard.tsx   # Main dashboard page
├── providers/          # Theme provider and context provider for dashboard data
│   ├── themeProvider/  # style configuration and theming
│   └── dashboardProvider/ # context provider for the dashboard
├── utils/              # Utility functions (e.g. date formatters, data transformers)
└── main.tsx            # Entry point
└── App.tsx             #  Route entry point
```
## Libraries used
- **[Chakra UI](https://v2.chakra-ui.com/getting-started)**: this UI library was chosen because it offers responsive design capabilities, it offers faster development due to its customizable components, design consistency(theme customization that can be extended and used)
- **[ReCharts](https://recharts.org/en-US)**: This library offers in-built responsive chart UI capabilties, it's well docmentated and actively maintained. Also, it offers easy customization

## State management
Although this project uses static data, I implemented React Context to simulate state sharing across the dashboard. This shows my understanding of centralized state management patterns and the potential to scale into solutions like Redux.

