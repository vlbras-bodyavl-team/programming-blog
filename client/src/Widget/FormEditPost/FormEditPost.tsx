import { FC } from "react";
import { Form, useNavigate, useNavigation, useParams } from "react-router-dom";
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

  const navigation = useNavigation();
  const isLoading =
    navigation.state === "submitting" || navigation.state === "loading";

  const handleDeleteClick = async () => {
    try {
      await deletePost(params.id);

      navigate("/admin");
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
        disabled={isLoading}
      />

      <Label htmlFor="topic">Topic:</Label>
      <InputFormAdmin
        id="topic"
        placeholder="Topic"
        initialValue={defaultValues?.topic}
        style={{ width: "160px" }}
        name="topic"
        dropdownItems={topics.map((topic) => topic.name)}
        disabled={isLoading}
      />

      <TextArea
        defaultValue={defaultValues?.content}
        placeholder="Content"
        name="content"
        disabled={isLoading}
      />
      <div className={s.buttons}>
        <Button disabled={isLoading}>Submit</Button>
        <BorderButton onClick={handleDeleteClick} disabled={isLoading}>
          Delete
        </BorderButton>
      </div>
    </Form>
  );
};

export default FormEditPost;
