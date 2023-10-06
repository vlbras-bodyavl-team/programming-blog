import { FormEvent } from "react";
import { REDUCER_ACTION_TYPE, useSignIn } from "../../hooks/useSignIn";
import { Link, useNavigate } from "react-router-dom";
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
  const [state, dispatch] = useSignIn();
  const navigate = useNavigate();

  const handleValidation = () => {
    let formIsValid = true;

    if (!state.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_EMAIL_ERROR,
        payload: "Email Not Valid",
      });
      return false;
    } else {
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_EMAIL_ERROR,
        payload: "",
      });
      formIsValid = true;
    }

    if (!state.password.match(/^[a-zA-Z0-9]{8,22}$/)) {
      formIsValid = false;
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_PASSWORD_ERROR,
        payload:
          "Password length must best min 8 Chracters and Max 22 Chracters",
      });

      return false;
    } else {
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_PASSWORD_ERROR,
        payload: "",
      });
      formIsValid = true;
    }

    return formIsValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const isCorrect = handleValidation();
      if (!isCorrect) return;
      const response = await signIn(state.email, state.password);

      const data: JwtTokens = response.data;
      const { accessToken, refreshToken } = data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_EMAIL_ERROR,
          payload: error.response?.data.message,
        });
      } else throw error;
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormBlock>
          <Input
            type="email"
            placeholder="Enter email"
            onChange={(e) =>
              dispatch({
                type: REDUCER_ACTION_TYPE.SET_EMAIL,
                payload: e.target.value,
              })
            }
          />
          <Text color="#d62424" fontSize="14px">
            {state.emailError}
          </Text>
        </FormBlock>
        <FormBlock>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              dispatch({
                type: REDUCER_ACTION_TYPE.SET_PASSWORD,
                payload: e.target.value,
              })
            }
          />
          <Text color="#d62424" fontSize="14px">
            {state.passwordError}
          </Text>
        </FormBlock>
        <Button>Submit</Button>
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

export default FormSignIn;
