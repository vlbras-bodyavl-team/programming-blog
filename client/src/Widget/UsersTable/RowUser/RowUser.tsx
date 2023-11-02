import { IUser } from "../../../interfaces";
import s from "./RowUser.module.scss";
import { FC, useState } from "react";
import { RolesDropdown } from "../..";
import {
  DeleteIconButton,
  EditIconButton,
  Preloader,
  SmallButton,
} from "../../../Components/UI";
import { deleteUser, updateUserRole } from "../../../services";
import { Roles } from "../../../types";
import { useNavigate } from "react-router-dom";
import { catchModeratorError } from "../../../utils";
import UpdateEmail from "../UpdateEmail/UpdateEmail";
import UpdatePassword from "../UpdatePassword/UpdatePassword";

interface IRowUserProps {
  user: IUser;
}

const RowUser: FC<IRowUserProps> = ({ user }) => {
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [isUpdatingRole, setIsUpdatingRole] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSelect = async (value: Roles) => {
    try {
      setIsLoading(true);

      await updateUserRole(user.id, value);

      setIsUpdatingRole(false);
      setIsLoading(false);

      navigate(".", { replace: true });
    } catch (error) {
      catchModeratorError(error, navigate);

      setIsLoading(false);
      setIsUpdatingRole(false);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deleteUser(user.id);
      navigate("/admin/users", { replace: true });
    } catch (error) {
      try {
        catchModeratorError(error, navigate);
      } catch (error) {
        alert("Something went wrong");
      }
    }
  };

  return (
    <tr className={s.tr}>
      <td className={s.email}>
        {isUpdatingEmail ? (
          <UpdateEmail
            setIsUpdatingEmail={setIsUpdatingEmail}
            defaultValue={user.email}
            userId={user.id}
          />
        ) : (
          <>
            <span>{user.email}</span>
            <div className={s.buttonContainer}>
              <EditIconButton onClick={() => setIsUpdatingEmail(true)} />
            </div>
          </>
        )}
      </td>
      <td>
        {isUpdatingPassword ? (
          <UpdatePassword
            userId={user.id}
            setIsUpdatingPassword={setIsUpdatingPassword}
          />
        ) : (
          <SmallButton onClick={() => setIsUpdatingPassword(true)}>
            Сhange password
          </SmallButton>
        )}
      </td>
      <td>
        {isUpdatingRole ? (
          <div className={s.dropdownAndLoading}>
            <RolesDropdown user={user} onSelect={handleSelect} />
            {isLoading && <Preloader />}
          </div>
        ) : (
          <>
            <div className={s.roleContainer}>
              <div className={s.role}>
                <span className={user.role === "admin" ? s.admin : ""}>
                  {user.role}
                </span>
                <div className={s.buttonContainer}>
                  <EditIconButton onClick={() => setIsUpdatingRole(true)} />
                </div>
              </div>
              <DeleteIconButton onClick={handleDeleteClick} />
            </div>
          </>
        )}
      </td>
    </tr>
  );
};

export default RowUser;
