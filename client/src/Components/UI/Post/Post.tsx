import { LiHTMLAttributes, forwardRef } from "react";
import { Title } from "..";
import { IPost } from "../../../interfaces";
import s from "./Post.module.scss";

interface IPostProps extends LiHTMLAttributes<HTMLLIElement> {
  post: IPost;
}
const Post = forwardRef<HTMLLIElement, IPostProps>(
  ({ post, ...props }: IPostProps, ref) => {
    return (
      <li ref={ref} className={s.container} {...props}>
        <Title>{post.title}</Title>
        <article className={s.content}>{post.content}</article>
      </li>
    );
  }
);

export default Post;
