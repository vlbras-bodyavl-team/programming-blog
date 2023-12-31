import {
  ActionFunction,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { signIn } from "../../services";
import { JwtTokens } from "../../interfaces";
import axios from "axios";
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

const FormSignIn = () => {
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
            name="email"
            placeholder="Enter email"
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
        <DarkButton type="submit" disabled={isLoading}>
          Sign In
        </DarkButton>
        {isLoading && <Preloader width={20} />}
        <div>
          <Text color="#808080">Don't have an account? </Text>
          <Link to="/signup" className="link-primary">
            Sign up
          </Link>
        </div>
      </Form>
    </FormContainer>
  );
};

export const formSignInAction: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const emailError = validateEmail(data.email);
    const passwordError = validatePassword(data.password);

    if (emailError) {
      return emailError;
    }

    if (passwordError) {
      return passwordError;
    }

    const response = await signIn(data.email, data.password);

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

export default FormSignIn;
