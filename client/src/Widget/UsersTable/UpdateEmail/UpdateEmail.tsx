import { FC, useState } from "react";
import {
  InputSmall,
  CancelButton,
  ApplyButton,
  Preloader,
} from "../../../Components/UI";
import s from "./UpdateEmail.module.scss";
import { validateEmail } from "../../../utils/validation";
import { updateUserEmail } from "../../../services";
import { catchModeratorError } from "../../../utils";
import { useNavigate } from "react-router-dom";

interface IUpdateEmailProps {
  setIsUpdatingEmail: (value: boolean) => void;
  defaultValue?: string;
  userId: string;
}
const UpdateEmail: FC<IUpdateEmailProps> = ({
  setIsUpdatingEmail,
  userId,
  defaultValue,
}) => {
  const [email, setEmail] = useState(defaultValue || "");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleApplyClick = async () => {
    const emailError = validateEmail(email);
    if (emailError) {
      alert(emailError.emailError);
      return;
    }
    try {
      setIsLoading(true);

      await updateUserEmail(userId, email);

      alert("Email successfully updated");

      setIsUpdatingEmail(false);
      setIsLoading(false);

      navigate(".", { replace: true });
    } catch (error) {
      try {
        catchModeratorError(error, navigate);
      } catch (error) {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className={s.container}>
      <InputSmall
        placeholder="Enter new email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CancelButton onClick={() => setIsUpdatingEmail(false)} />
      <ApplyButton onClick={handleApplyClick} />
      {isLoading && <Preloader width={25} />}
    </div>
  );
};

export default UpdateEmail;
