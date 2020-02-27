// Returns parts of an email
function emailParts(email) {
  let processedEmail = email.toLowerCase();

  return processedEmail.split("@");
}