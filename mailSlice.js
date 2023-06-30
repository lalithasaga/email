import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen : false,
    selectedMessage:null,
  },
 
  reducers: {
   openSendMessage : (state) => {
    state.sendMessageIsOpen = true
   },
   closeSendMessage: (state) => {
    state.sendMessageIsOpen = false
   },
   OpenMessage: (state,action) => {
    state.selectedMessage = action.payload
   },

  },
 
  
});

export const { openSendMessage, closeSendMessage, OpenMessage } = mailSlice.actions;


export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const SelectedMail = (state) => state.mail.selectedMessage;

export default mailSlice.reducer;
