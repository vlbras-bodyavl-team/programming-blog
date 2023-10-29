import { FC, useState } from "react";
import { IUser } from "../../interfaces";
import s from "./UsersTable.module.scss";
import RowUser from "./RowUser/RowUser";
import RowAddUser from "./RowAddUser/RowAddUser";
import { AddButton } from "../../Components/UI";

interface IUsersTableProps {
  users: IUser[];
}

const UsersTable: FC<IUsersTableProps> = ({ users }) => {
  const [isAddingUser, setIsAddingUser] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <AddButton onClick={() => setIsAddingUser(!isAddingUser)} />
      </div>

      <table className={s.table}>
        <thead>
          <tr>
            <th>
              <div>E-mail</div>
            </th>
            <th>
              <div>Password</div>
            </th>
            <th>
              <div>Role</div>
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
