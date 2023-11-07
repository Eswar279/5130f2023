const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\+?1?[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return phoneRegex.test(phone);
}

function validateURL(url) {
  
  const urlRegex = /^(https?:\/\/)?(www\.)?([\w-]+)\.[\w-]{2,}(\/[\w./]*)?$/;
  return urlRegex.test(url);
}

function getDetailedURLFeedback(url) {
  if (!url) {
    return 'Invalid URL: Input is empty.';
  }
  if (!url.match(/^(https?:\/\/)?(www\.)?[\w-]+(\.[\w-]+)+$/)) {
    return 'Invalid URL format. URLs must include a domain name and a top-level domain (e.g., .com, .org).';
  }
  if (!validateURL(url)) {
    return 'Invalid URL format. Ensure it includes server/domain and a domain extension.';
  }
  return 'URL is valid.';
}

// Questions logic
rl.question('Enter an email address: ', (email) => {
  console.log(validateEmail(email) ? `Valid email address: ${email}` : `Invalid email address: ${email}`);
  
  rl.question('Enter a phone number: ', (phone) => {
    console.log(validatePhone(phone) ? `Valid phone number: ${phone}` : `Invalid phone number: ${phone}`);
    
    rl.question('Enter a URL: ', (url) => {
      console.log(getDetailedURLFeedback(url)); 
      rl.close();
    });
  });
});
