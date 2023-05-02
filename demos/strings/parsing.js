let userName = "Brenda Kaye";

function parseAndDisplayName(fullName) {
  console.log("Name: " + fullName);
  let spacePOS = fullName.indexOf(" ");
  let firstName = fullName.substring(0, spacePOS);
  let lastName = fullName.substring(spacePOS + 1);

  console.log("First name: " + firstName);
  console.log("Last name: " + lastName);
}
parseAndDisplayName(userName);
