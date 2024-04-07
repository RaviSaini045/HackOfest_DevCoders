import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from './reducer/index.js'
import Homepage from './components/pages/home_page.jsx'

const store = configureStore({
  reducer: rootReducer,
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
