import s from "./SkeletonPost.module.scss";

const SkeletonPost = () => {
  return (
    <div className={s.container}>
      <div className={s.title}></div>
      <div className={s.content}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SkeletonPost;
