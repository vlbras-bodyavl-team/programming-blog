import {
  ActionFunction,
  Link,
  redirect,
  useActionData,
} from "react-router-dom";
import { signIn } from "../../services";
import { JwtTokens } from "../../interfaces";
import axios from "axios";
import {
  Button,
  Form,
  FormBlock,
  FormContainer,
  Input,
  Text,
} from "../../Components/UI";

const FormSignIn = () => {
  const errors = useActionData() as {
    emailError?: string;
    passwordError?: string;
  };

  return (
    <FormContainer>
      <Form method="post">
        <FormBlock>
          <Input type="email" name="email" placeholder="Enter email" />
          <Text color="#d62424" fontSize="14px">
            {errors?.emailError}
          </Text>
        </FormBlock>
        <FormBlock>
          <Input type="password" name="password" placeholder="Password" />
          <Text color="#d62424" fontSize="14px">
            {errors?.passwordError}
          </Text>
        </FormBlock>
        <Button type="submit">Submit</Button>
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

    if (!data.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return { emailError: "Email Not Valid" };
    }

    if (!data.password.match(/^[a-zA-Z0-9]{8,22}$/)) {
      return {
        passwordError:
          "Password length must best min 8 Chracters and Max 22 Chracters",
      };
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
