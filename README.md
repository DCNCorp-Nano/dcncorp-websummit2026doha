# DCN Corp - Web Summit 2026 Doha Landing Page

Landing page &amp; Lead capture for Web Summit 2026 Doha - ALPHA Start-up Program

## Overview

This repository contains the landing page for DCN Corp's participation in Web Summit 2026 Doha. The page showcases our proprietary 9 Combination (9c) nano-dip coating protocol for nanoscale coatings in plasmonics and surface sensing applications.

## Features

- **Professional Landing Page** with comprehensive information about DCN Corp's technology
- **Lead Capture Form** with validation and success message
- **Calendly Integration** with QR code for easy meeting scheduling
- **Responsive Design** that works on desktop and mobile devices
- **Contact Information** including website, email, LinkedIn, and Twitter

## Deployment

Simply serve the `index.html` file using any web server. For example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/index.html` in your browser.

## Form Integration

The form currently logs submissions to the browser console. To integrate with a backend:

1. Replace the console.log in the form submission handler with an API call
2. Send the form data to your backend endpoint
3. Handle success/error responses appropriately

## Technologies Used

- HTML5
- CSS3 (inline styling)
- Vanilla JavaScript
- QR Code API (qrserver.com)

## Contact

- Website: [dcncorp.com](https://dcncorp.com)
- E-mail: info@dcncorp.com
- LinkedIn: [DCN Corporation Limited](https://www.linkedin.com/company/dcn-corporation-limited/)
- Twitter: [@DCN_Corp](https://x.com/DCN_Corp)
