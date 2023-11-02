import { LoaderFunction, useLoaderData } from "react-router-dom";
import { UsersTable } from "../../Widget";
import s from "./Users.module.scss";
import { catchUnauthorizedError } from "../../utils/router";
import { getUsers, getUsersWithEmail } from "../../services";
import { IUser } from "../../interfaces";

const Users = () => {
  const users = useLoaderData() as IUser[];

  return (
    <div className={s.container}>
      <UsersTable users={users} />
    </div>
  );
};

export const usersLoader: LoaderFunction = async ({ request }) => {
  try {
    const email = new URL(request.url).searchParams.get("email");
    if (email) {
      const users = await getUsersWithEmail(email);
      return users;
    }
    const users = await getUsers();
    return users;
  } catch (error) {
    return catchUnauthorizedError(error);
  }
};

export default Users;
