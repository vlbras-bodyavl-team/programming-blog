import { forwardRef } from "react";
import { Title } from "..";
import { IPost } from "../../../interfaces";
import s from "./Post.module.scss";

interface IPostProps {
  post: IPost;
}
const Post = forwardRef<HTMLLIElement, IPostProps>(
  ({ post }: IPostProps, ref) => {
    return (
      <li ref={ref} className={s.container}>
        <Title>{post.title}</Title>
        <article className={s.content}>{post.content}</article>
      </li>
    );
  }
);

export default Post;
