import { Title, InputFormAdmin, TextArea, Button } from "../../Components/UI";
import { PostState, ReducerAction } from "../../hooks/usePost";
import { REDUCER_ACTION_TYPE } from "../../hooks/usePost";
import { useAppSelector } from "../../store/store";
import s from "./FormAdmin.module.scss";
import { Dispatch, FormEvent, ReactNode } from "react";

interface IFormAdminProps {
  title: string;
  state: PostState;
  dispatch: Dispatch<ReducerAction>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children?: ReactNode;
}

const FormAdmin = ({
  title,
  state,
  dispatch,
  handleSubmit,
  children,
}: IFormAdminProps) => {
  const topics = useAppSelector((store) => store.topics.topics);

  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <Title>{title}</Title>
      <div className={s.inputs}>
        <InputFormAdmin
          placeholder="Title"
          style={{ width: "300px" }}
          value={state.title}
          setValue={(value) => {
            dispatch({
              type: REDUCER_ACTION_TYPE.SET_TITLE,
              payload: value,
            });
          }}
        />
        <InputFormAdmin
          placeholder="Topic"
          style={{ width: "160px" }}
          value={state.topic}
          setValue={(value) => {
            dispatch({
              type: REDUCER_ACTION_TYPE.SET_TOPIC,
              payload: value,
            });
          }}
          dropdownItems={topics.map((topic) => topic.name)}
        />
      </div>
      <TextArea
        placeholder="Content"
        value={state.content}
        onChange={(e) =>
          dispatch({
            type: REDUCER_ACTION_TYPE.SET_CONTENT,
            payload: e.currentTarget.value,
          })
        }
      />
      <Button>Submit</Button>
      {children}
    </form>
  );
};

export default FormAdmin;
