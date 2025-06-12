const express = require('express');
const router = express.Router();
const { createInvoice } = require('../services/invoiceService');

router.post('/create', async (req, res) => {
  try {
    const result = await createInvoice(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

module.exports = router;
