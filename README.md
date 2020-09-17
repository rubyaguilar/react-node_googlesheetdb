Node.js code for Google Sheets API is confusing: [https://developers.google.com/sheets/api/quickstart/nodejs]

This code assumes you have a running React app`npx create-react-app .`

This is an example configuration of a React App that has understandable code for configuring Google Sheets API, just Appending: <br />
Note: Easy if you know your JS runtime, otherwise we'll figure it out.


## 1. Run:  <br /> 
`npm i google-spreadsheet`
  
## 2. Depending on your Javascript Runtime: <br />
   `import { GoogleSpreadsheet } from "google-spreadsheet";`<br />
   `const { GoogleSpreadsheet } = require('google-spreadsheet');`
   
## 3. There is some configuration on the Google Sheets End: <br /> 
Watch this video for how to get these variables: <br />
[How to get Google Sheet Credentials](https://www.youtube.com/watch?v=shctaaILCiU&t=38s&ab_channel=AnthonyBrunson) > Instead of "Web Broswer," select "Web Server"<br />
    NOTE: This video is just for getting credentials. <br />
    `const SPREADSHEET_ID = '';` <br />
    `const SHEET_ID = ;` <br />
    `const PRIVATE_KEY = ''` <br />
    `const CLIENT_EMAIL = ''; //Not in video` <br />  
   
    
    
    

## 4. Getting CLIENT_EMAIL
  For CLIENT_EMAIL, in Google Developer Console: Credentials > Manage Service Account (between oAuth and Service Accounts) > Create Service Account

## 5. Granting App Permission
  Don't over think this step. <br />  
  You should have an email. Share your Google Sheet with this email, as you normally would with anyone. Think of it as granting your app permission to write to the sheet. 
  
## 4. 
  `src > App.js`
    
  Get the code!
    
