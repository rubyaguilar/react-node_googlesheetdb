This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Node.js code for Google Sheets API is confusing: [https://developers.google.com/sheets/api/quickstart/nodejs]

This is an example configuration of a React App that has understandable code for configuring Google Sheets:
Note: Easy if you know your JS runtime, otherwise we'll figure it out.

## `src > App.js`

1. Run `npm i google-spreadsheet`
  
2. Depending on your Javascript Runtime: 
   `import { GoogleSpreadsheet } from "google-spreadsheet";`<br />
   `const { GoogleSpreadsheet } = require('google-spreadsheet');`
   
3. There is some configuration on the Google Sheets End: Watch this video for how to get these variables (Set Credentials as Enviornment Varibales in .env): 
    const SPREADSHEET_ID = '';<br />
    const SHEET_ID = ;<br />
    const PRIVATE_KEY = ''<br />
    const CLIENT_EMAIL = '';<br />
    
    Watch this video for how to get these variables: https://www.youtube.com/watch?v=shctaaILCiU&t=38s&ab_channel=AnthonyBrunson<br />
    WARNING: This video is not a tutorial for this project. Just getting credentials. Instead of "Web Broswer," select "Web Server"
    
    For CLIENT_EMAIL: Credentials > Manage Service Account (between oAuth and Service Accounts) > Create Service Account

4. src > App.js 
    
    Get the code!
    
