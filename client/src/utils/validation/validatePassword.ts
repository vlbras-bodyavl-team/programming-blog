export const validatePassword = (
  password: string
): { passwordError: string } | null => {
  if (!password.match(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_-]{8,22}$/)) {
    return {
      passwordError:
        "Password length must best min 8 Chracters and Max 22 Chracters",
    };
  }
  return null;
};
