import { Form } from "react-router-dom";
import { Title, InputFormAdmin, TextArea, Button } from "../../Components/UI";
import { useAppSelector } from "../../store/store";
import s from "./FormAdmin.module.scss";
import { ReactNode } from "react";
import { IPost } from "../../interfaces";

interface IFormAdminProps {
  title: string;
  children?: ReactNode;
  defaultValues?: IPost;
}

const FormAdmin = ({ title, defaultValues, children }: IFormAdminProps) => {
  const topics = useAppSelector((store) => store.topics.topics);

  return (
    <Form method="post" className={s.container}>
      <Title>{title}</Title>
      <div className={s.inputs}>
        <InputFormAdmin
          placeholder="Title"
          initialValue={defaultValues?.title}
          name="title"
          style={{ width: "300px" }}
        />
        <InputFormAdmin
          placeholder="Topic"
          initialValue={defaultValues?.topic}
          style={{ width: "160px" }}
          name="topic"
          dropdownItems={topics.map((topic) => topic.name)}
        />
      </div>
      <TextArea
        defaultValue={defaultValues?.content}
        placeholder="Content"
        name="content"
      />
      <Button>Submit</Button>
      {children}
    </Form>
  );
};

export default FormAdmin;
