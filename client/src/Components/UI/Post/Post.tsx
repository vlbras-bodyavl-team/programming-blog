import { HTMLAttributes } from "react";
import { Title } from "..";
import { IPost } from "../../../interfaces";
import s from "./Post.module.scss";
import { convertHtmlPost } from "../../../utils/convert-html-post";

interface IPostProps extends HTMLAttributes<HTMLDivElement> {
  post: IPost;
}
const Post = ({ post, ...props }: IPostProps) => {
  return (
    <div className={s.container} {...props}>
      <Title>{post.title}</Title>
      <article className={s.content}>{convertHtmlPost(post.content)}</article>
    </div>
  );
};
export default Post;
