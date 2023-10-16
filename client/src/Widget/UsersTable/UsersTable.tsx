import { FC } from "react";
import { IUser } from "../../interfaces";
import s from "./UsersTable.module.scss";

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
          <tr key={user.id}>
            <td className={s.email}>{user.email}</td>
            <td>********</td>
            <td className={s.role}>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
