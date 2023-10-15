import { FC, useState } from "react";
import { Form, useNavigate, useNavigation, useParams } from "react-router-dom";
import {
  Title,
  Label,
  InputFormAdmin,
  TextArea,
  BorderButton,
  DarkButton,
  Preloader,
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
  const [isDeletingPost, setIsDeletingPost] = useState(false);

  const params = useParams() as { id: string };

  const navigate = useNavigate();

  const navigation = useNavigation();
  const isLoading =
    navigation.state === "submitting" ||
    navigation.state === "loading" ||
    isDeletingPost;

  const handleDeleteClick = async () => {
    try {
      setIsDeletingPost(true);

      await deletePost(params.id);

      setIsDeletingPost(false);
      navigate("/admin");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
      } else throw error;
    }
  };

  return (
    <Form method="post" className={s.container}>
      <div className={s.titleLoader}>
        <Title>Edit Post</Title>
        {isLoading && <Preloader width={24} />}
      </div>

      <Label htmlFor="title">Title:</Label>
      <InputFormAdmin
        id="title"
        placeholder="Title"
        initialValue={defaultValues?.title}
        name="title"
        style={{ width: "300px" }}
        disabled={isLoading}
        required
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
        required
      />

      <TextArea
        defaultValue={defaultValues?.content}
        placeholder="Content"
        name="content"
        disabled={isLoading}
        required
      />
      <div className={s.buttons}>
        <DarkButton disabled={isLoading}>Submit</DarkButton>
        <BorderButton
          type="button"
          onClick={handleDeleteClick}
          disabled={isLoading}
        >
          Delete
        </BorderButton>
      </div>
    </Form>
  );
};

export default FormEditPost;
