import { FC, HTMLAttributes } from "react";
import { DeleteIconButton, SmallButton, Title } from "..";
import { IAdminPost } from "../../../interfaces";
import s from "./AdminPost.module.scss";
import { useAppSelector } from "../../../store/store";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../../../services";
import axios from "axios";

interface IAdminPostProps extends HTMLAttributes<HTMLDivElement> {
  post: IAdminPost;
}

const AdminPost: FC<IAdminPostProps> = ({ post, ...props }) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  const navigate = useNavigate();

  const handleDeleteClick = async () => {
    try {
      await deletePost(post.id);

      navigate(".", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
      } else throw error;
    }
  };
  return (
    <div
      className={isDark ? `${s.container} ${s.dark}` : s.container}
      {...props}
    >
      <Title>{post.title}</Title>
      <article className={s.content}>{post.content}</article>
      <div className={s.tools}>
        <div className={s.info}>
          {post.updatedBy?.email ? (
            <div className={s.updatedBy}>
              Updated by {post.updatedBy?.email}
            </div>
          ) : null}
          <div className={s.createdBy}>Created By {post.createdBy?.email}</div>
          <div className={s.createdAt}>Created At {post?.createdAt}</div>
        </div>
        <div className={s.buttons}>
          <SmallButton>
            <Link to={`/admin/edit-post/${post.id}`}>Edit Post</Link>
          </SmallButton>
          <DeleteIconButton onClick={handleDeleteClick} />
        </div>
      </div>
    </div>
  );
};

export default AdminPost;
