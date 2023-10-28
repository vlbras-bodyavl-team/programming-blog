import { LoaderFunction, useLoaderData } from "react-router-dom";
import { UsersTable } from "../../Widget";
import s from "./Users.module.scss";
import { catchUnauthorizedError } from "../../utils/router";
import { getUsers } from "../../services";
import { IUser } from "../../interfaces";
import { AddButton } from "../../Components/UI";

const Users = () => {
  const users = useLoaderData() as IUser[];

  return (
    <div className={s.container}>
      <AddButton />
      <UsersTable users={users} />
    </div>
  );
};

export const usersLoader: LoaderFunction = async () => {
  try {
    const users = await getUsers();
    return users;
  } catch (error) {
    return catchUnauthorizedError(error);
  }
};

export default Users;
