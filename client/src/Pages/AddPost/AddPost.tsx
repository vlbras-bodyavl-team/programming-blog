import { FormEvent } from "react";
import { addPost } from "../../services";
import { usePost } from "../../hooks/usePost";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormAdmin } from "../../widget";

const AddPost = () => {
  const [state, dispatch] = usePost();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      await addPost(state);

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
      } else throw error;
    }
  };
  return (
    <FormAdmin
      state={state}
      dispatch={dispatch}
      handleSubmit={handleSubmit}
      title="Add Post"
    />
  );
};

export default AddPost;
