const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const invoiceRoutes = require('./routes/invoice');

const app = express();
app.use(cors());
app.use(express.json());

// ראוטר לחשבוניות
app.use('/api/invoice', invoiceRoutes);

// הגשת ה-React build (רק אם קיימת)
const clientBuildPath = path.join(__dirname, '../client/build');

if (fs.existsSync(path.join(clientBuildPath, 'index.html'))) {
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
