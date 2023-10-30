import { IUser } from "../../../interfaces";
import s from "./RowUser.module.scss";
import pencil from "../../../assets/images/pencil.png";
import pencilWhite from "../../../assets/images/pencilWhite.png";
import { FC, useState } from "react";
import { RolesDropdown } from "../..";
import { DeleteIconButton, Preloader } from "../../../Components/UI";
import { deleteUser, updateUserRole } from "../../../services";
import { Roles } from "../../../types";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/store";

interface IRowUserProps {
  user: IUser;
}

const RowUser: FC<IRowUserProps> = ({ user }) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  const [isUpdatingRole, setIsUpdatingRole] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSelect = async (value: Roles) => {
    setIsLoading(true);

    await updateUserRole(user.id, value);

    setIsUpdatingRole(false);
    setIsLoading(false);
    navigate("/admin/users", { replace: true });
  };

  const handleDeleteClick = async () => {
    try {
      await deleteUser(user.id);
      navigate("/admin/users", { replace: true });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <tr className={s.tr}>
      <td className={s.email}>{user.email}</td>
      <td>********</td>
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
                <img
                  src={isDark ? pencilWhite : pencil}
                  alt=""
                  onClick={() => setIsUpdatingRole(true)}
                />
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
