import { Form, useNavigation } from "react-router-dom";
import {
  Title,
  InputFormAdmin,
  TextArea,
  Button,
  Label,
} from "../../Components/UI";
import { useAppSelector } from "../../store/store";
import s from "./FormAddPost.module.scss";

const FormAddPost = () => {
  const topics = useAppSelector((store) => store.topics.topics);

  const navigation = useNavigation();
  const isLoading =
    navigation.state === "submitting" || navigation.state === "loading";

  return (
    <Form method="post" className={s.container}>
      <Title>Add Post</Title>

      <Label htmlFor="title">Title:</Label>
      <InputFormAdmin
        id="title"
        placeholder="Title"
        name="title"
        style={{ width: "300px" }}
        disabled={isLoading}
      />

      <Label htmlFor="topic">Topic:</Label>
      <InputFormAdmin
        id="topic"
        placeholder="Topic"
        style={{ width: "160px" }}
        name="topic"
        dropdownItems={topics.map((topic) => topic.name)}
        disabled={isLoading}
      />

      <TextArea placeholder="Content" name="content" disabled={isLoading} />
      <div className={s.buttons}>
        <Button disabled={isLoading}>Create</Button>
      </div>
    </Form>
  );
};

export default FormAddPost;
