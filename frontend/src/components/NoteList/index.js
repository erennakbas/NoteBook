import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Note from '../Note';
import styles from './index.module.css'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { Link } from 'react-router-dom';
const NoteList = () => {
    const [notes,setNotes] = useState([]);

    async function getNotes(){
        const response = await axios.get("/api/notes")
        setNotes(response.data);
    }
    useEffect(()=>{
        getNotes()
    }, [])


    return (
        <>
            <ul className={styles.list}>
                {notes.map((note, index)=>{
                    return <React.Fragment key={index}>
                                <Note note={note}/>
                                <hr className={styles.horizontal__line}/>
                            </React.Fragment>
                }
                )}
            </ul>
           
                <Link className={styles.add__button} to='/note/0'>
                    <AddCircleSharpIcon style={{ fontSize:40, color:"#f6bf56", backgroundColor:'black', borderRadius:'100%', overflow:'hidden'}} />
                </Link>
            
        </>
    )
}

export default NoteList