import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleSpreadsheet } from "google-spreadsheet"

function App() {
  //FIXME: NOT PRODUCTION. 
  //FIXME: Configure env varibles below at line 14-18
  //FIXME: Delete 10-13 
  const SPREADSHEET_ID = '';
  const SHEET_ID = '';
  const CLIENT_EMAIL = '';
  const PRIVATE_KEY = '';

  //TODO: CONFIGURE THESE IN .ENV FILE  
  //const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  //const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  //const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
  //const PRIVATE_KEY = process.env.REACT_APP_CLIENT_PRIVATE_KEY;
  

  //Simple method. You can easily put this code anywhere GoogleSpreadsheet is imported (Line 4)
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
        const appendSpreadsheet = async (row) => {
            try {
                await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
                });
                // loads document properties and worksheets
                await doc.loadInfo();
    
                const sheet = doc.sheetsById[SHEET_ID];
                const result = await sheet.addRow(row);
                console.log(result); //Just for testing
            } catch (e) {
                console.error('Error: ', e);
            }
        };

  //TODO: Your fields in "newRow" need to match the titles of your columns in sheets
  //Example: Here, the title of my columns (Row 1) are First_Name and Last_Name
  const newRow = { First_Name: "", Last_Name: "" }; //Use this code wherever data is collected
  appendSpreadsheet(newRow); //Easily add to sheets!

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
