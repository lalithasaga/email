/*import React, { useEffect, useState } from "react";
import EmailListSetting from "./EmailListSetting";
import './css/EmailList.css';
import Emailbody from './Emailbody';
import { db } from "./Firebase";

function EmailList() {

    const[emails,setEmails] = useState("");

    useEffect(()=>{
        db.collection(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        })))
    })

    return(
        <div className="emailList">
            <EmailListSetting/>
{
    emails.map(({id,data})=>{
        return <Emailbody name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
    })
}

            <Emailbody/>
        </div>
    )
}

export default EmailList; */

import React, { useEffect, useState } from "react";
import EmailListSetting from "./EmailListSetting";
import './css/EmailList.css';
import Emailbody from './Emailbody';
import { db } from "./Firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails').orderBy("timestamp","desc").onSnapshot((snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="emailList">
      <EmailListSetting />
      {emails.map(({ id, data }) => (
        <Emailbody
          key={id}
          name={data.to}
          subject={data.subject}
          message={data.message}
          time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
        />
      ))}
    </div>
  );
}

export default EmailList;
