import { IPost } from "../../../interfaces";
import s from "./Post.module.scss";

interface IPostProps {
  post: IPost;
}
const Post = ({ post }: IPostProps) => {
  return (
    <li className={s.container}>
      <h3 className={s.title}>{post.title}</h3>
      <article className={s.content}>{post.content}</article>
    </li>
  );
};

export default Post;
