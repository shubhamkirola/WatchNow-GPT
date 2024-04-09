export const checkvalidation = (email, password) => {

const isValidEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

// both of them returns true or false

if (!isValidEmail) return "Please enter the correct email";
if (!isValidPassword) return "Please enter the correct Password";

return null;
}