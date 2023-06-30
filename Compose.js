import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import './css/Compose.css';
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./Firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';





function Compose() {

    const[to,setTo] = useState("");
    const[subject,setSubject] = useState("");
    const[message,setMessage] = useState("");

    const dispatch = useDispatch();

    const formSubmit = (e)=>{
        e.preventDefault();
        if(to==='')
        {
            return alert('To is required');
        }
        if(subject==='')
        {
            return alert('Subject is required');
        }
        if(message==='')
        {
            return alert('Message is required');
        }

        db.collection('emails').add({
            to,
            subject,
            message,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })

        setTo("");
        setSubject("");
        setMessage("");

        alert('email successfully sent');
        dispatch(closeSendMessage());
    }

    return (
        <div className="Compose">
            <div className="Compose__header">
                <div className="Compose__header__left">
                    <span>New Message</span>
                </div>
                <div className="Compose__header__right">
                    <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
                </div>
            </div>
            <form onSubmit={formSubmit}>
             <div className="compose__body">
                 <div className="compose__bodyForm">
                    <input type="email" 
                    placeholder="Reciepents" value={to} onChange={(e)=>setTo(e.target.value)}/>

                    <input type="test" 
                    placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                    
                    <textarea rows="20" onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>



                 </div>
             </div>
             <div className="compose__footer">
                    <div className="compose__footerLeft">
                    <button type='submit'>Send  </button>
                    </div>

                    <div className="compose__footerRight">
                    <FormatColorTextIcon/>
                    <AttachFileIcon/>
                    <LinkIcon/>
                    <InsertEmoticonIcon/>
                    <CreateIcon/>
                    <MoreVertIcon/>
                    <DeleteIcon/>
                </div>
             </div>
             </form>
        </div>
    )
}

export default Compose;