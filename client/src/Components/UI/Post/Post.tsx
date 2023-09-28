import { Title } from "..";
import { IPost } from "../../../interfaces";
import s from "./Post.module.scss";

interface IPostProps {
  post: IPost;
}
const Post = ({ post }: IPostProps) => {
  return (
    <li className={s.container}>
      <Title>{post.title}</Title>
      <article className={s.content}>{post.content}</article>
    </li>
  );
};

export default Post;
