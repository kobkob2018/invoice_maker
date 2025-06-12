async function createInvoice(invoiceData) {
    // תגובה מדומה לצרכי בדיקה
    return {
      number: '123456',
      description: invoiceData.description,
      status: 'fake_success',
      timestamp: new Date().toISOString()
    };
  }
  
  module.exports = { createInvoice };