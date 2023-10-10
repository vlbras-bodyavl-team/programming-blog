import { FC } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import {
  Title,
  Label,
  InputFormAdmin,
  TextArea,
  Button,
  BorderButton,
} from "../../Components/UI";
import { IPost } from "../../interfaces";
import s from "./FormEditPost.module.scss";
import { useAppSelector } from "../../store/store";
import { deletePost } from "../../services";
import axios from "axios";

interface IFormEditPost {
  defaultValues?: IPost;
}

const FormEditPost: FC<IFormEditPost> = ({ defaultValues }) => {
  const topics = useAppSelector((store) => store.topics.topics);
  const params = useParams() as { id: string };
  const navigate = useNavigate();

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
    <Form method="post" className={s.container}>
      <Title>Edit Post</Title>

      <Label htmlFor="title">Title:</Label>
      <InputFormAdmin
        id="title"
        placeholder="Title"
        initialValue={defaultValues?.title}
        name="title"
        style={{ width: "300px" }}
      />

      <Label htmlFor="topic">Topic:</Label>
      <InputFormAdmin
        id="topic"
        placeholder="Topic"
        initialValue={defaultValues?.topic}
        style={{ width: "160px" }}
        name="topic"
        dropdownItems={topics.map((topic) => topic.name)}
      />

      <TextArea
        defaultValue={defaultValues?.content}
        placeholder="Content"
        name="content"
      />
      <div className={s.buttons}>
        <Button>Submit</Button>
        <BorderButton onClick={handleDeleteClick}>Delete</BorderButton>
      </div>
    </Form>
  );
};

export default FormEditPost;
