import { FC, useState } from "react";
import { IUser } from "../../interfaces";
import { Dropdown } from "../../Components/UI";
import { DropdownOption } from "../../Components/UI/Dropdowns/Dropdown/Dropdown";
import { Roles } from "../../types";

interface IRolesDropdownProps {
  user?: IUser;
  onSelect?: (value: Roles) => Promise<void> | void;
}

const options: DropdownOption[] = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "customer",
    label: "Customer",
  },
];

const RolesDropdown: FC<IRolesDropdownProps> = ({ user, onSelect }) => {
  const [value, setValue] = useState<DropdownOption>(
    options.find((option) => option.value === user?.role) || options[0]
  );

  const handleChange = async (value: DropdownOption) => {
    setValue(value);
    onSelect && (await onSelect(value.value as Roles));
  };

  return (
    <Dropdown
      options={options}
      onChange={(value) => handleChange(value)}
      value={value}
    />
  );
};

export default RolesDropdown;
