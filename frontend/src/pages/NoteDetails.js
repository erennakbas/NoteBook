import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./NoteDetails.module.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const NoteDetails = () => {
    let { id } = useParams();
    const [note, setNote] = useState(null);
    async function getNote() {
        const response = await axios.get(`/api/note/${id}`);
        setNote(response.data);
    }
    function handleCancel(){
        console.log("sea");
    }
    function handleApply(){
        console.log("ase");
    }
    useEffect(() => {
        getNote();
    }, []);
    return (
        <div className={styles.container}>
            <Header />
                <br></br>
                <textarea spellCheck="false" rows={7} cols={72} autoFocus defaultValue={note?.body} wrap='soft' className={styles.textarea}></textarea>
                
                    <Link className={styles.buttons__container} style={{textDecoration:'none'}} to='/'>
                        <button className={styles.cancel__button} onClick={handleCancel}>X</button>
                        <button className={styles.apply__button} onClick={handleApply}>✓</button>
                    </Link>
                
        </div>
    );
};

export default NoteDetails;
