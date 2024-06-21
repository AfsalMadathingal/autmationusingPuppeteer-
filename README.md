
# LinkedIn Connector

Automate LinkedIn connections with Puppeteer.

## Description

This package automates the process of sending connection requests on LinkedIn using Puppeteer. You can customize the message to be sent with each connection request. **Use at your own risk as LinkedIn may block your account for automation.**

## Installation

Install the package using NPM:

```bash
npm i linkedin-automation
```

## Usage

1. **Set Up Environment Variables**:
   Create an `.env` file in your project directory and add your LinkedIn email and password:

   ```
   EMAIL="your-email@example.com"
   PASSWORD="your-password"
   ```

2. **Create a JavaScript File (`app.js`)**:
   Create a file named `app.js` in your project directory and add the following code:

   ```javascript
   const automate = require('linkedin-connector');

   const message = `Hi, I am a MERN stack Developer. Connecting and networking with people in the field will help me land a job and expand my professional network. I would love to connect with you.\n\nThanks\n[Your Name]`;
   const urlWithFilter = "https://www.linkedin.com/search/results/people/?keywords=your-keywords";

   automate(message, urlWithFilter);

   // PLEASE USE THIS WITH YOUR OWN RISK //
   // LINKEDIN MAY BLOCK YOUR ACCOUNT //
   ```

3. **Run the Script**:
   Execute the script using Node.js:

   ```bash
   node app.js
   ```

## Parameters

- `message` (String): The message to send with each connection request.
- `urlWithFilter` (String): The LinkedIn search URL with your desired filters.

## Example

Here’s a complete example setup:

1. **Create an `.env` file**:

   ```
   EMAIL="your-email@example.com"
   PASSWORD="your-password"
   ```

2. **Create an `app.js` file**:

   ```javascript
   const automate = require('linkedin-connector');

   const message = `Hi, I am a MERN stack Developer. Connecting and networking with people in the field will help me land a job and expand my professional network. I would love to connect with you.\n\nThanks\n[Your Name]`;
   const urlWithFilter = "https://www.linkedin.com/search/results/people/?keywords=your-keywords";

   automate(message, urlWithFilter);

   // PLEASE USE THIS WITH YOUR OWN RISK //
   // LINKEDIN MAY BLOCK YOUR ACCOUNT //
   ```

3. **Run the script**:

   ```bash
   node app.js
   ```

## Support Me 

[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy_Me_A_Coffee-yellow.svg)](https://shorturl.at/SpMRB)

## Security Note

Make sure to handle your credentials securely. For a production package, consider using environment variables or a more secure method to manage credentials.

## Disclaimer

Automating LinkedIn actions may violate LinkedIn's terms of service and could result in your account being restricted or banned. Use this tool at your own risk.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
