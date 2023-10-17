import { FC } from "react";
import { IUser } from "../../interfaces";
import s from "./UsersTable.module.scss";
import RowUser from "./RowUser/RowUser";

interface IUsersTableProps {
  users: IUser[];
}

const UsersTable: FC<IUsersTableProps> = ({ users }) => {
  return (
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
        {users.map((user) => (
          <RowUser key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
