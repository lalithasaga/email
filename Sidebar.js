import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './css/Sidebar.css'
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar () {
const dispatch = useDispatch();

    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon/>} className='compose_btn' onClick={() =>dispatch(openSendMessage())}>
                Compose
            </Button>
            <SidebarOptions Icon={InboxIcon} title="Inbox" number= "224" isactive={true} ></SidebarOptions>
            <SidebarOptions Icon={SendIcon} title="Sent" number= "224" isactive={true} ></SidebarOptions>
        </div>
    );
}

export default Sidebar;