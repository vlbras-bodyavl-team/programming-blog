import { ITopic } from "../../../interfaces";
import s from "./Topic.module.scss";
import { LiHTMLAttributes, useState } from "react";
import { useAppSelector } from "../../../store/store";
import { HashLink } from "react-router-hash-link";
import { useParams } from "react-router-dom";

interface ITopicProps extends LiHTMLAttributes<HTMLLIElement> {
  topic: ITopic;
  handlePostClick: () => void;
}
const Topic = ({ topic, handlePostClick, ...props }: ITopicProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const { id } = useParams<{ id: string }>();

  return (
    <li
      className={isOpen ? `${s.mainContainer} ${s.open}` : s.mainContainer}
      {...props}
    >
      <div
        className={isOpen ? `${s.container} ${s.open}` : s.container}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={id === topic.id ? `${s.name} ${s.current}` : s.name}>
          {topic.name}
        </div>
        <div className={s.arrow}>
          <svg
            width="44"
            height="36"
            viewBox="0 0 44 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M22.4 22.4625C22.16 22.4625 21.9272 22.425 21.7016 22.35C21.476 22.275 21.2888 22.175 21.14 22.05L12.86 15.15C12.53 14.875 12.365 14.525 12.365 14.1C12.365 13.675 12.53 13.325 12.86 13.05C13.19 12.775 13.61 12.6375 14.12 12.6375C14.63 12.6375 15.05 12.775 15.38 13.05L22.4 18.9L29.42 13.05C29.75 12.775 30.17 12.6375 30.68 12.6375C31.19 12.6375 31.61 12.775 31.94 13.05C32.27 13.325 32.435 13.675 32.435 14.1C32.435 14.525 32.27 14.875 31.94 15.15L23.66 22.05C23.48 22.2 23.285 22.3065 23.075 22.3695C22.865 22.4325 22.64 22.4635 22.4 22.4625Z"
              fill={isOpen ? "#FF0000" : isDarkMode ? "#FDFDFD" : "black"}
            />
          </svg>
        </div>
      </div>
      <ul className={s.posts}>
        {topic.posts.map((post, index) => (
          <li key={index}>
            <HashLink
              smooth
              scroll={(el: HTMLElement) => el.scrollIntoView()}
              onClick={handlePostClick}
              to={`/topic/${topic.id}/posts#${index}`}
              className={s.post}
            >
              {post.title}
            </HashLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Topic;
