import { FC, useState } from "react";
import {
  InputSmall,
  CancelButton,
  ApplyButton,
  Preloader,
} from "../../../Components/UI";
import s from "./UpdatePassword.module.scss";
import { useNavigate } from "react-router-dom";
import { validatePassword } from "../../../utils/validation";
import { updateUserPassword } from "../../../services";
import { catchModeratorError } from "../../../utils";

interface IUpdatePasswordProps {
  setIsUpdatingPassword: (value: boolean) => void;
  defaultValue?: string;
  userId: string;
}

const UpdatePassword: FC<IUpdatePasswordProps> = ({
  setIsUpdatingPassword,
  defaultValue,
  userId,
}) => {
  const [password, setPassword] = useState(defaultValue || "");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleApplyClick = async () => {
    const passwordError = validatePassword(password);
    if (passwordError) {
      alert(passwordError.passwordError);
      return;
    }
    try {
      setIsLoading(true);

      await updateUserPassword(userId, password);

      alert("Password successfully updated");

      setIsUpdatingPassword(false);
      setIsLoading(false);

      navigate(".", { replace: true });
    } catch (error) {
      catchModeratorError(error);
    }
  };

  return (
    <div className={s.container}>
      <InputSmall
        placeholder="Enter new password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <CancelButton onClick={() => setIsUpdatingPassword(false)} />
      <ApplyButton onClick={handleApplyClick} />
      {isLoading && <Preloader width={25} />}
    </div>
  );
};

export default UpdatePassword;
