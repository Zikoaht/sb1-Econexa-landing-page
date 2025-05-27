function doPost(e) {
  // Handle preflight CORS
  if (e.parameter.method == 'OPTIONS') {
    return handleCors();
  }

  if (!e || !e.postData || !e.postData.contents) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: 'Invalid POST data' 
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .addHeader('Access-Control-Allow-Origin', '*')
      .addHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
      .addHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'demoDateTime', 'requirements'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Add timestamp
    const timestamp = new Date().toISOString();
    
    // Append data to sheet
    sheet.appendRow([
      timestamp,
      data.fullName,
      data.email,
      data.demoDateTime,
      data.requirements
    ]);

    // Send confirmation email to user
    const userEmailHtml = `
      <h2>Demo Request Confirmation</h2>
      <p>Thank you for requesting a demo with EcoNexa.AI!</p>
      <p>Your demo is scheduled for: ${data.demoDateTime}</p>
      <p>We'll contact you shortly to confirm the details.</p>
    `;

    GmailApp.sendEmail(
      data.email,
      'Demo Request Confirmation - EcoNexa.AI',
      'Thank you for requesting a demo!',
      { htmlBody: userEmailHtml }
    );

    // Send notification to admin
    const adminEmailHtml = `
      <h2>New Demo Request</h2>
      <p>Name: ${data.fullName}</p>
      <p>Email: ${data.email}</p>
      <p>Requested Date/Time: ${data.demoDateTime}</p>
      <p>Requirements: ${data.requirements}</p>
    `;

    GmailApp.sendEmail(
      'admin@econexaai.com',
      'New Demo Request - EcoNexa.AI',
      'New demo request received',
      { htmlBody: adminEmailHtml }
    );

    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success',
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .addHeader('Access-Control-Allow-Origin', '*')
      .addHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
      .addHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error',
        message: error.message 
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .addHeader('Access-Control-Allow-Origin', '*')
      .addHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
      .addHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
}

function handleCors() {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .addHeader('Access-Control-Allow-Origin', '*')
    .addHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .addHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

// Handle OPTIONS requests for CORS preflight
function doOptions(e) {
  return handleCors();
}