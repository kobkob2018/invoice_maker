import { useState } from 'react';

function App() {
  const [status, setStatus] = useState('');


  const invoiceData = {
    type: "invoice",
    description: "שירות ייעוץ",
    subject: {
      name: "יעקב עברי",
      email: "yakov@example.com"
    },
    items: [
      {
        description: "שעת ייעוץ",
        quantity: 1,
        price: 300
      }
    ]
  };

  const createInvoice = async () => {


    try {
      const res = await fetch('/api/invoice/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invoiceData)
      });
      const data = await res.json();
      console.log('response from server:', data);
      setStatus(
        `📄 חשבונית #${data.number}
      📝 תיאור: ${data.description}
      🕒 זמן: ${new Date(data.timestamp).toLocaleString()}`
      );
      
    } catch (err) {
      setStatus(`שגיאה: ${err.message}`);
    }
  };
  const createDemo = async () => {


    try {
      const res = await fetch('/api/demo/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invoiceData)
      });
      const data = await res.json();
      console.log('response from server:', data);
      setStatus(
        `📄 check1 #${data.number}
      📝 check2: ${data.description}
      🕒 check3: ${new Date(data.timestamp).toLocaleString()}`
      );
      
    } catch (err) {
      setStatus(`שגיאה: ${err.message}`);
    }
  };
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Invoice Maker</h1>
      <button onClick={createInvoice}>צור חשבונית</button>
      <p>{status}</p>

      <h1>Demo Maker</h1>
      <button onClick={createDemo}>צור חשבונית</button>
      <p>{status}</p>
    </div>

    
  );
}

export default App;
