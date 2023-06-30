import React from "react";
import './css/EmailList.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function EmailListSetting() {
    return(
        <div className="emailList_settigs">
            <div className="emailList_settingsLeft">
            <IconButton>
                <CheckBoxOutlineBlankIcon/>
            </IconButton>
        </div>
        <div className="emailList_settingsright">
            <p>Sort</p>
            <IconButton>
                <KeyboardArrowDownIcon/>
            </IconButton>
        </div>
        </div>
    
    )
}

export default EmailListSetting;