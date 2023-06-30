import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Compose from './Compose';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Email from './Email';

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);

  console.log(isMessageOpen);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
          </Routes>
          <Routes>
            <Route path='/mail' element={<Email/>} />
          </Routes>
        </div>
        {isMessageOpen && <Compose />}
      </div>
    </Router>
  );
}

export default App;
