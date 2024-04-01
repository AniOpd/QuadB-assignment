# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Created react app using vite
npm create vite

I created a store using configurestore of redux
I created reducers addToDo, DeleteTodo,and toggleToDo in features/todo/todeSlice.js
Slice is just a standard naming convension

Then I created 2 components 
1-> AddToDo to add a to do in the list
2-> TodoList to view the todo list and delete or mark to it

then created an App.jsx to add both component on the same page

and then integrated the app.jsx in main.jsx


to run on vscode simply run command "npm run dev"
 