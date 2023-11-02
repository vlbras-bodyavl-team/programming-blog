import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../store/store";
import s from "./SearchBar.module.scss";
import useDebounce from "../../../hooks/useDebounce";

interface ISearchBarProps {
  onSearch: (value: string) => void;
  initialValue?: string;
}

const SearchBar: FC<ISearchBarProps> = ({ onSearch, initialValue }) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  const [searchValue, setSearchValue] = useState(initialValue || "");

  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    onSearch(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <input
      type="text"
      placeholder="Search..."
      className={isDark ? `${s.input} ${s.dark}` : s.input}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchBar;
