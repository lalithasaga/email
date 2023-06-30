import React from "react";
import "./css/EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { OpenMessage } from "./features/mailSlice";

function Emailbody({ name, subject, message, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMessage = () => {
    dispatch(
      OpenMessage({
        name,
        subject,
        message,
        time,
      })
    );
    navigate("/mail");
  };

  return (
    <div className="emailbody" onClick={openMessage}>
      <div className="emailbody__left">
        <CheckBoxOutlineBlankIcon />
        <h4>{name}</h4>
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle_msg">
          <p>
            <b>{subject}</b>
            {message}
          </p>
        </div>
      </div>
      <div className="emailbody__right">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default Emailbody;
