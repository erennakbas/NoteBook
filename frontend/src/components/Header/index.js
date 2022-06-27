import React, {useState} from "react";
import styles from './index.module.css'
import CreateIcon from '@mui/icons-material/Create';
const Header = () => {


    return(
        <div className={styles.container}>
            <h1 className={styles.header}>
             NoteTaker
            </h1>
                <CreateIcon style={{fontSize:35, color:"black", borderRadius:"25%", padding:'1px', backgroundColor:"#f6bf56"}}/>
            
        </div>
    )
}
export default Header;