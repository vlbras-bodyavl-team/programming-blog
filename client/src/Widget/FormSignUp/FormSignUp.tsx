import {
  ActionFunction,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import axios from "axios";
import { signUp } from "../../services";
import { JwtTokens } from "../../interfaces";
import {
  DarkButton,
  Form,
  FormBlock,
  FormContainer,
  Input,
  Preloader,
  Text,
} from "../../Components/UI";
import { validateEmail, validatePassword } from "../../utils/validation";

const FormSignUp = () => {
  const errors = useActionData() as {
    emailError?: string;
    passwordError?: string;
  };

  const navigation = useNavigation();
  const isLoading =
    navigation.state === "submitting" || navigation.state === "loading";

  return (
    <FormContainer>
      <Form method="post">
        <FormBlock>
          <Input
            type="email"
            placeholder="Enter email"
            name="email"
            disabled={isLoading}
          />
          <Text color="#d62424" fontSize="14px">
            {errors?.emailError}
          </Text>
        </FormBlock>
        <FormBlock>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            disabled={isLoading}
          />
          <Text color="#d62424" fontSize="14px">
            {errors?.passwordError}
          </Text>
        </FormBlock>
        <FormBlock>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            disabled={isLoading}
          />
        </FormBlock>
        <DarkButton disabled={isLoading}>Sign Up</DarkButton>
        {isLoading && <Preloader width={20} />}
        <div>
          <Text color="#808080">Already have an account? </Text>
          <Link to="/signin" className="link-primary">
            Sign in
          </Link>
        </div>
      </Form>
    </FormContainer>
  );
};

export const formSignUpAction: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
      confirmPassword: string;
    };

    const emailError = validateEmail(data.email);
    const passwordError = validatePassword(data.password);

    if (emailError) {
      return emailError;
    }

    if (passwordError) {
      return passwordError;
    }

    if (data.confirmPassword !== data.password) {
      return { passwordError: "Passwords should match" };
    }

    const response = await signUp(data.email, data.password);

    const resData: JwtTokens = response.data;
    const { accessToken, refreshToken } = resData;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return redirect("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { emailError: error.response?.data.message };
    } else throw error;
  }
};

export default FormSignUp;
