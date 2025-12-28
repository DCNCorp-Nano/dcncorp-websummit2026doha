const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (index.html, assets)
app.use(express.static(path.join(__dirname)));

// Lead capture endpoint
app.post('/api/websummit2026Qatar/lead', (req, res) => {
  const { fullName, email, company, interest, reason, source } = req.body;
  
  // Validate required fields
  if (!fullName || !email || !company) {
    return res.status(400).json({ 
      success: false, 
      message: 'Full Name, Email, and Company are required fields.' 
    });
  }
  
  // Log the lead data (in production, this would be saved to a database)
  console.log('New Lead Captured:', {
    fullName,
    email,
    company,
    interest,
    reason,
    source,
    timestamp: new Date().toISOString()
  });
  
  // In a production environment, you would:
  // 1. Save to database
  // 2. Send confirmation email
  // 3. Integrate with CRM
  // 4. Add to mailing list
  
  // Return success response
  res.status(200).json({ 
    success: true, 
    message: 'Thank you for your interest! We will be in touch soon.' 
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the landing page at http://localhost:${PORT}`);
  console.log(`For HTTPS deployment, configure SSL certificate with your hosting provider`);
});
