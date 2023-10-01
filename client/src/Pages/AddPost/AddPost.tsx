import { FormEvent } from "react";
import { Button, Input, TextArea, Title } from "../../components/UI";
import s from "./AddPost.module.scss";
import { addPost } from "../../services";
import { REDUCER_ACTION_TYPE, usePost } from "../../hooks/usePost";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";

const AddPost = () => {
  const [state, dispatch] = usePost();
  const navigate = useNavigate();
  const topics = useAppSelector((store) => store.topics.topics);

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
    <form onSubmit={handleSubmit} className={s.container}>
      <Title>Add Post</Title>
      <div className={s.inputs}>
        <Input
          placeholder="Title"
          style={{ width: "300px" }}
          onChange={(e) =>
            dispatch({
              type: REDUCER_ACTION_TYPE.SET_TITLE,
              payload: e.currentTarget.value,
            })
          }
        />
        <Input
          placeholder="Topic"
          style={{ width: "160px" }}
          onChange={(e) =>
            dispatch({
              type: REDUCER_ACTION_TYPE.SET_TOPIC,
              payload: e.currentTarget.value,
            })
          }
          dropdownItems={topics.map((topic) => topic.name)}
        />
      </div>
      <TextArea
        placeholder="Content"
        onChange={(e) =>
          dispatch({
            type: REDUCER_ACTION_TYPE.SET_CONTENT,
            payload: e.currentTarget.value,
          })
        }
      />
      <Button>Submit</Button>
    </form>
  );
};

export default AddPost;
