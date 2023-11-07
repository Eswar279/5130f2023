const readline = require('readline');

// Utility function to create a question as a Promise
const question = (rl, text) => new Promise((resolve) => {
  rl.question(text, resolve);
});

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    // Email validation
    const email = await question(rl, 'Enter an email address: ');
    console.log(validateEmail(email) ? `Valid email address: ${email}` : `Invalid email address: ${email}`);
    
    // Phone validation
    const phone = await question(rl, 'Enter a phone number: ');
    console.log(validatePhone(phone) ? `Valid phone number: ${phone}` : `Invalid phone number: ${phone}`);
    
    // URL validation
    const url = await question(rl, 'Enter a URL: ');
    console.log(getDetailedURLFeedback(url));
  } finally {
    rl.close();
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\+?1?[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return phoneRegex.test(phone);
}

function validateURL(url) {
  const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})(:\d+)?(\/[^\s]*)?$/;
  return urlRegex.test(url);
}

function getDetailedURLFeedback(url) {
  if (!url) {
    return 'Invalid URL: Input is empty.';
  }
  if (!url.match(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/)) {
    return 'Invalid URL format. URLs must include a domain name and a top-level domain (e.g., .com, .org).';
  }
  if (!validateURL(url)) {
    return 'Invalid URL format. Ensure it includes server/domain, domain extension, and optionally, a port and path.';
  }
  return 'URL is valid.';
}

// Run the main function
main().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});
