# DCN Corp® - Web Summit 2026 Doha Landing Page

Landing page & Lead capture for Web Summit 2026 Doha

## Features

- **Responsive Landing Page**: Modern, gradient-styled landing page optimized for all devices
- **Lead Capture Form**: Collects visitor information including name, email, company, and interest area
- **Integration Ready**: API endpoint `/api/websummit2026Qatar/lead` for lead submission
- **Assets Included**: Hero image and QR code placeholders for Calendly booking

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start
```

The server will start on `http://localhost:3000` by default.

## HTTPS/SSL Configuration

For production deployment with HTTPS (SSL certificate), follow these steps:

### Option 1: Using a Reverse Proxy (Recommended)

**With Nginx:**

1. Install Certbot and Nginx:
```bash
sudo apt-get update
sudo apt-get install nginx certbot python3-certbot-nginx
```

2. Configure Nginx (`/etc/nginx/sites-available/dcncorp`):
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

3. Enable the site and obtain SSL certificate:
```bash
sudo ln -s /etc/nginx/sites-available/dcncorp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

**With Apache:**

```bash
sudo apt-get install apache2 certbot python3-certbot-apache
sudo a2enmod proxy proxy_http ssl
sudo certbot --apache -d yourdomain.com
```

### Option 2: Using Hosting Platforms with Built-in SSL

**Heroku:**
- Heroku provides free SSL certificates for all apps
- No additional configuration needed
- SSL is automatically enabled

**Vercel/Netlify:**
- Automatic SSL certificates via Let's Encrypt
- Deploy and SSL is configured automatically

**AWS (Elastic Beanstalk):**
- Use AWS Certificate Manager for free SSL certificates
- Configure in load balancer settings

**Google Cloud Platform:**
- Use Google-managed SSL certificates
- Configure in load balancer

### Option 3: Using Node.js HTTPS Module (Direct)

If you need to run HTTPS directly in Node.js:

1. Obtain SSL certificate files:
   - `certificate.crt` (or `fullchain.pem`)
   - `private.key` (or `privkey.pem`)

2. Update `server.js`:
```javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('path/to/private.key'),
  cert: fs.readFileSync('path/to/certificate.crt')
};

https.createServer(options, app).listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
```

## Deployment Checklist

- [ ] Update domain name in HTML meta tags
- [ ] Replace placeholder images with actual assets
- [ ] Configure database for lead storage
- [ ] Set up email notifications for new leads
- [ ] Configure HTTPS/SSL certificate
- [ ] Set up environment variables
- [ ] Configure CORS for production domain
- [ ] Test form submission
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Set up monitoring and logging

## Environment Variables

Create a `.env` file for production:

```env
PORT=3000
NODE_ENV=production
DATABASE_URL=your_database_connection_string
EMAIL_SERVICE_API_KEY=your_email_api_key
ALLOWED_ORIGINS=https://yourdomain.com
```

## API Endpoints

### POST `/api/websummit2026Qatar/lead`
Submit a new lead from the contact form.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "interest": "Investor",
  "reason": "Interested in partnership opportunities",
  "source": "WebSummit2026Qatar"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for your interest! We will be in touch soon."
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-12-28T16:51:06.416Z"
}
```

## File Structure

```
.
├── server.js           # Express server with API endpoints
├── package.json        # Node.js dependencies
├── public/
│   ├── index.html      # Main landing page
│   └── assets/
│       ├── dcn_websummit_2026_hero.svg  # Hero image
│       └── calendly_qr.svg              # Calendly QR code
└── README.md           # This file
```

## Security Considerations

- Always use HTTPS in production
- Implement rate limiting for API endpoints
- Validate and sanitize all form inputs
- Use environment variables for sensitive data
- Keep dependencies updated
- Implement CSRF protection
- Add Content Security Policy headers

## Support

For questions or support, contact:
- Email: info@dcncorp.com
- Website: https://www.dcncorp.com
- LinkedIn: https://www.linkedin.com/company/2393919/

## License

Copyright © DCN Corp® All rights reserved.
