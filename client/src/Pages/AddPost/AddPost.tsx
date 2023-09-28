import { FormEvent } from "react";
import { Button, Input, TextArea, Title } from "../../components/UI";
import s from "./AddPost.module.scss";

const AddPost = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <Title>Add Post</Title>
      <div className={s.inputs}>
        <Input placeholder="Title" style={{ width: "300px" }} />
        <Input placeholder="Topic" style={{ width: "160px" }} />
      </div>
      <TextArea placeholder="Content" />
      <Button>Submit</Button>
    </form>
  );
};

export default AddPost;
