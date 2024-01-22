export const validateForm = (email,password) => {
  const isValidEmail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(email);
  const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if(!isValidEmail) return "Please enter valid email address"
  if(!isValidPassword) return "Please enter valid Password"

  return null
};
