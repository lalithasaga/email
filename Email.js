import React from "react";
import "./css/EmailList.css";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectedMail } from "./features/mailSlice";

function Email() {

    const Mail = useSelector(SelectedMail);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="email">
      <div className="emailList_settigs">
        <div className="emailList_settingsLeft">
          <IconButton>
            <ArrowBackIcon onClick={handleGoBack} />
          </IconButton>
        </div>
        <div className="emailList_settingsright">
          <p>Sort</p>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="email__header">
        <div className="email__headerLeft">
          <h3>{Mail.subject}</h3>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
        </div>
        <div className="email__headerRight"></div>
      </div>
      <div className="email__middleheader">
        <div className="email__middleheaderLeft">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <h4>{Mail.subject}</h4>
          <p>{Mail.name}</p>
        </div>
        <div className="email__middleheaderRight">
          <p>{Mail.time}</p>
        </div>
      </div>
      <div className="email_body">
        <p>{Mail.message}</p>
      </div>
    </div>
  );
}

export default Email;
