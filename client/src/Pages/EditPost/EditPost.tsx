import { FormEvent, useEffect } from "react";
import { deletePost, getPost, updatePost } from "../../services";
import { REDUCER_ACTION_TYPE, usePost } from "../../hooks/usePost";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FormAdmin } from "../../widget";
import { Button } from "../../components/UI";

const EditPost = () => {
  const [state, dispatch] = usePost();
  const params = useParams() as { id: string };
  const navigate = useNavigate();

  useEffect(() => {
    async function getPostValues() {
      const post = await getPost(params.id);
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_TITLE,
        payload: post.title,
      });
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_TOPIC,
        payload: post.topic,
      });
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_CONTENT,
        payload: post.content,
      });
    }
    getPostValues();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      await updatePost({ id: params.id, ...state });

      alert("Successfully updated");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
      } else throw error;
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deletePost(params.id);

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
      } else throw error;
    }
  };

  return (
    <>
      <FormAdmin
        state={state}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        title={"Edit Post"}
      >
        <Button type="button" onClick={handleDeleteClick}>
          Delete
        </Button>
      </FormAdmin>
    </>
  );
};

export default EditPost;
