import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import NoteDetails from './pages/NoteDetails'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/note/:id" element={<NoteDetails/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


