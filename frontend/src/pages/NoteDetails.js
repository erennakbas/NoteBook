import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./NoteDetails.module.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const NoteDetails = () => {
    let { id } = useParams();
    const [note, setNote] = useState(null);
    const [body, setBody] = useState('');
    async function getNote() {
        const response = await axios.get(`/api/notes/${id}`);
        setNote(response.data);
        setBody(note.body);
    }
    function handleChange(event){
        setBody(event.target.value);
    }
    async function handleApply(){
        var newNote={};
        if (id==0){
            newNote.body = body;
            await axios.post('/api/notes', newNote);
            return ;
        }
        newNote = JSON.parse(JSON.stringify(note));
        newNote.body = body;
        await axios.put(`/api/notes/${note.id}`, newNote);
    }
    useEffect(() => {
        if (id != 0){
            console.log(id);
            getNote();
        }
    }, []);
    return (
        <div className={styles.container}>
            <Header />
                <br></br>
                <textarea spellCheck="false" rows={7} cols={72} autoFocus defaultValue={note?.body} wrap='soft' onChange={handleChange} className={styles.textarea}></textarea>
                
                    <Link className={styles.buttons__container} style={{textDecoration:'none'}} to='/'>
                        <button className={styles.cancel__button}>X</button>
                        <button className={styles.apply__button} onClick={handleApply}>✓</button>
                    </Link>
                
        </div>
    );
};

export default NoteDetails;
