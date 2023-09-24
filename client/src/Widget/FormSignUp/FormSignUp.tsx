import { FormEvent } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { REDUCER_ACTION_TYPE, useSignUp } from "../../hooks/useSignUp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signUp } from "../../services";
import { JwtTokens } from "../../interfaces";

const FormSignUp = () => {
  const [state, dispatch] = useSignUp();
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

    if (state.confirmPassword !== state.password) {
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_PASSWORD_ERROR,
        payload: "Passwords should match",
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
      handleValidation();
      const response = await signUp(state.email, state.password);

      const data: JwtTokens = response.data;
      const { accessToken, refreshToken } = data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_EMAIL_ERROR,
          payload: error.message,
        });
      }
    }
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center"
      fluid="sm"
      style={{ height: "100vh", maxWidth: "400px" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) =>
              dispatch({
                type: REDUCER_ACTION_TYPE.SET_EMAIL,
                payload: e.target.value,
              })
            }
          />
          <Form.Text className="text-danger">{state.emailError}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) =>
              dispatch({
                type: REDUCER_ACTION_TYPE.SET_PASSWORD,
                payload: e.target.value,
              })
            }
          />
          <Form.Text className="text-danger">{state.passwordError}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) =>
              dispatch({
                type: REDUCER_ACTION_TYPE.SET_CONFIRM_PASSWORD,
                payload: e.target.value,
              })
            }
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="dark" type="submit">
            Submit
          </Button>
          <Form.Text>
            Already have an account?{" "}
            <Link to="/signin" className="link-primary">
              Sign in
            </Link>
          </Form.Text>
        </div>
      </Form>
    </Container>
  );
};

export default FormSignUp;
