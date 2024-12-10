import { Form, useNavigation } from "react-router-dom";
import {
  Title,
  InputFormAdmin,
  TextArea,
  Label,
  DarkButton,
  Preloader,
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
      <div className={s.titleLoader}>
        <Title>Add Post</Title>
        {isLoading && <Preloader width={24} />}
      </div>

      <Label htmlFor="title">Title:</Label>
      <InputFormAdmin
        id="title"
        placeholder="Title"
        name="title"
        style={{ width: "300px" }}
        disabled={isLoading}
        required
      />

      <Label htmlFor="topic">Topic:</Label>
      <InputFormAdmin
        id="topic"
        placeholder="Topic"
        style={{ width: "160px" }}
        name="topicName"
        dropdownItems={topics.map((topic) => topic.name)}
        disabled={isLoading}
        required
      />

      <TextArea
        placeholder="Content"
        name="content"
        disabled={isLoading}
        required
      />
      <div className={s.buttons}>
        <DarkButton disabled={isLoading}>Create</DarkButton>
      </div>
    </Form>
  );
};

export default FormAddPost;
