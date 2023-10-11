import { FC } from "react";
import { SkeletonPost } from "../../Components/UI";

interface ILoadingPostsProps {
  count?: number;
}

const LoadingPosts: FC<ILoadingPostsProps> = ({ count }) => {
  return (
    <ul>
      {Array(count || 5)
        .fill("")
        .map((_, i) => (
          <li key={i}>
            <SkeletonPost />
          </li>
        ))}
    </ul>
  );
};

export default LoadingPosts;
