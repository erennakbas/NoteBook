import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import NotesIcon from '@mui/icons-material/Notes';

const NoteListItem = ({note}) => {
    let date= new Date(note.created);
    return (
        <li>
            <Link to={`note/${note.id}`} style={{ textDecoration: 'none' }}>
                <div className={styles.container}>
                    <NotesIcon/>
                    <div className={styles.note__body}>
                        <span>{note.body}</span>
                        <span className={styles.date}>{date.toLocaleDateString()}</span>
                        
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default NoteListItem