import { FC, useState } from "react";
import s from "./RowAddUser.module.scss";
import { RolesDropdown } from "../..";
import {
  ApplyButton,
  CancelButton,
  InputSmall,
  Preloader,
} from "../../../Components/UI";
import { Roles } from "../../../types";
import { addUser } from "../../../services";
import { useNavigate } from "react-router-dom";
interface IRowAddUserProps {
  onCancelClick?: () => void;
}

const RowAddUser: FC<IRowAddUserProps> = ({ onCancelClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Roles>("admin");

  const navigate = useNavigate();

  const validateValues = () => {
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      alert("Email Not Valid");
      return false;
    }

    if (!password.match(/^[a-zA-Z0-9]{8,22}$/)) {
      alert("Password length must best min 8 Chracters and Max 22 Chracters");
      return false;
    }

    return true;
  };

  const handleApplyClick = async () => {
    try {
      setIsLoading(true);
      if (!validateValues()) {
        setIsLoading(false);
        return;
      }

      await addUser(email, password, role);
      setIsLoading(false);

      navigate("/admin/users", { replace: true });
      onCancelClick && onCancelClick();
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  return (
    <tr className={s.tr}>
      <td>
        <InputSmall
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder={"Email"}
        />
      </td>
      <td>
        <InputSmall
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder={"Password"}
        />
      </td>
      <td>
        <div className={s.rolesButtonsContainer}>
          <RolesDropdown onSelect={(value) => setRole(value)} />
          <CancelButton onClick={onCancelClick} />
          <ApplyButton onClick={handleApplyClick} />
          {isLoading ? <Preloader /> : null}
        </div>
      </td>
    </tr>
  );
};

export default RowAddUser;
