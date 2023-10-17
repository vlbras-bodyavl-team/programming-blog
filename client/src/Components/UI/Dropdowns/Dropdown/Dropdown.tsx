import { FC, useState } from "react";
import s from "./Dropdown.module.scss";
import arrow from "../../../../assets/images/dropdownArrow.png";

export type DropdownOption = {
  label: string;
  value: string;
};

interface IDropdownProps {
  options: DropdownOption[];
  value?: DropdownOption;
  onChange: (value: DropdownOption) => void;
}
const Dropdown: FC<IDropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={isOpen ? `${s.container} ${s.open}` : s.container}
      onClick={toggle}
      onBlur={() => setIsOpen(false)}
    >
      <span className={s.value}>{value?.label}</span>
      <img src={arrow} alt="arrow" className={s.arrow} />
      <ul className={s.options}>
        {options.map((option) => (
          <li key={option.value} onClick={() => onChange(option)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
