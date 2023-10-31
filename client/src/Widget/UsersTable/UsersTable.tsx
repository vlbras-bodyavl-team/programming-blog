import { FC, useState } from "react";
import { IUser } from "../../interfaces";
import s from "./UsersTable.module.scss";
import RowUser from "./RowUser/RowUser";
import RowAddUser from "./RowAddUser/RowAddUser";
import { AddButton, Info } from "../../Components/UI";
import info from "../../assets/images/info.png";
import infoDark from "../../assets/images/infoDark.png";
import { useAppSelector } from "../../store/store";

interface IUsersTableProps {
  users: IUser[];
}

const information = `• Customer can only view posts\n 
                    • Moderator can view posts and users from the admin panel\n
                    • Admin can view and manipulate posts and users from the admin panel
                    `;

const UsersTable: FC<IUsersTableProps> = ({ users }) => {
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [isShowingInfo, setIsShowingInfo] = useState(false);

  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <AddButton onClick={() => setIsAddingUser(!isAddingUser)} />
      </div>

      <table className={s.table}>
        <thead>
          <tr>
            <th>
              <div>
                <span>E-mail</span>
              </div>
            </th>
            <th>
              <div>
                <span>Password</span>
              </div>
            </th>
            <th>
              <div>
                <span className={s.role}>Role</span>
                <img
                  src={isDark ? infoDark : info}
                  className={s.info}
                  onMouseEnter={() => setIsShowingInfo(true)}
                  onMouseLeave={() => setIsShowingInfo(false)}
                />
                {isShowingInfo ? <Info>{information}</Info> : null}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {isAddingUser ? (
            <RowAddUser onCancelClick={() => setIsAddingUser(false)} />
          ) : null}
          {users.map((user) => (
            <RowUser key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
