# Kanban Board Application

This application is a Kanban board built with ReactJS, Tailwind CSS, and Redux. It allows users to manage tasks efficiently by adding, editing, dragging, and dropping tasks across different stages.

## Features

- **Add Tasks**: Add new tasks with titles and descriptions.
- **Drag-and-Drop**: Move tasks between stages using drag-and-drop functionality.
- **Search**: Filter tasks by title using a search bar.
- **Dynamic Stages**: Tasks progress through `To Do`, `In Progress`, `Peer Review`, and `Done` stages.
- **Persistent State**: State management using Redux.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

```bash
https://github.com/Satya-Sai-Tharun/kanban_board.git
```

### 2. Install Dependencies

Install the necessary dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

Run the development server to view the application in your browser:

```bash
npm start
# or
yarn start
```

The application will be accessible at `http://localhost:3000/`.

### 4. Build for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

This will create an optimized build in the `build` directory.

## Project Structure

```
.
├── public                # Public assets
├── src                   # Source code
│   ├── components        # Reusable React components
│   │   ├── AddTaskModal.jsx
│   │   ├── KanbanBoard.jsx
│   │   ├── SearchBar.jsx
│   │   └── TaskCard.jsx
│   ├── context           # Context API for task management
│   │   └── taskContext.jsx
│   ├── store             # Redux store and slices
│   │   ├── store.js
│   │   └── taskSlice.js
│   ├── pages             # Page components
│   │   └── Home.jsx
│   ├── App.jsx           # Main application component
│   └── index.js          # Entry point
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project metadata and dependencies
└── README.md             # Documentation
```

## Usage

1. **Adding a Task**:
   - Click the floating "+" button to open the add task modal.
   - Enter a task title and description and click `Save`.

2. **Moving Tasks**:
   - Drag a task card to another stage to update its progress.

3. **Searching Tasks**:
   - Use the search bar to filter tasks by title.

## Technologies Used

- **ReactJS**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework.
- **Redux**: State management.
- **React-Beautiful-DND**: Drag-and-drop library for React.
- **Redux Toolkit**: Simplified Redux setup.

## Acknowledgments

- [ReactJS Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React-Beautiful-DND Documentation](https://github.com/atlassian/react-beautiful-dnd)