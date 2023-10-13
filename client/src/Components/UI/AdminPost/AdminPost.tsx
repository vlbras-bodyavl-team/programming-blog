import { FC, HTMLAttributes } from "react";
import { Title } from "..";
import { IAdminPost } from "../../../interfaces";
import s from "./AdminPost.module.scss";

interface IAdminPostProps extends HTMLAttributes<HTMLDivElement> {
  post: IAdminPost;
}

const AdminPost: FC<IAdminPostProps> = ({ post, ...props }) => {
  return (
    <div className={s.container} {...props}>
      <Title>{post.title}</Title>
      <article className={s.content}>{post.content}</article>
      <div className={s.tools}>
        <div className={s.info}></div>
        <div className={s.buttons}></div>
      </div>
    </div>
  );
};

export default AdminPost;
