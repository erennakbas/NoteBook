import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import NotesIcon from "@mui/icons-material/Notes";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const NoteListItem = ({ activeNote, notes, setNotes }) => {
  let date = new Date(activeNote.created);
  const handleDelete = async () => {
    await axios.delete(`/api/notes/${activeNote.id}`);
    setNotes(notes.filter((note) => note.id !== activeNote.id));
  };
  return (
    <li className={styles.li}>
      <Link to={`note/${activeNote.id}`} style={{ textDecoration: "none" }}>
        <div className={styles.container}>
          <NotesIcon />
          <div className={styles.note__body}>
            <span>{activeNote.body}</span>
            <span className={styles.date}>{date.toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
      <button className={styles.button} onClick={handleDelete}>
        <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
      </button>
    </li>
  );
};

export default NoteListItem;
