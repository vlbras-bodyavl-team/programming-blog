export const validateEmail = (email: string): { emailError: string } | null => {
  if (!email.match(/^[\w.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    return { emailError: "Email Not Valid" };
  }
  return null;
};
