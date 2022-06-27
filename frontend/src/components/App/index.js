import React, { useState } from "react";
import Header from "../Header";
import NoteList from "../NoteList";
import styles from "./index.module.css";
const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <NoteList />
    </div>
  );
};
export default App;
