import moment from "moment";
import { pb } from "../database/connection";

type getUsersByCredentialsType = (
  username: string,
  password: string
) => Promise<IUser | undefined>;
export const getUsersByCredentials: getUsersByCredentialsType = async (
  username,
  password
) => {
  try {
    return await pb
      .collection("users")
      .getFirstListItem(`username="${username}" && password="${password}"`);
  } catch {
    return undefined;
  }
};

type signupUserType = (_: FormData, token: string) => Promise<boolean>;
export const signupUser: signupUserType = async (data, token) => {
  try {
    const newUser = await pb.collection("users").create(data);
    console.log(newUser);

    const expiration = moment().add(30, "minutes").unix();

    await pb
      .collection("sessions")
      .create({ userId: newUser.id, token, expiration });
    return true;
  } catch {
    return false;
  }
};

type loginUserType = (userId: string, token: string) => Promise<boolean>;
export const loginUser: loginUserType = async (userId, token) => {
  try {
    const expiration = moment().add(30, "minutes").unix();

    await pb.collection("sessions").create({ userId, token, expiration });
    return true;
  } catch {
    return false;
  }
};

type authorizationType = (token: string) => Promise<string | boolean>;
export const authorization: authorizationType = async (token) => {
  try {
    const session: ISession = await pb
      .collection("sessions")
      .getFirstListItem(`token="${token}"`);
    if (!session) return false;

    const user = await pb
      .collection("users")
      .getFirstListItem(`id="${session.userId}"`);
    if (!user) return false;

    const valid = moment(session.expiration * 1000).isAfter(moment());

    if (!valid) {
      await pb.collection("sessions").delete(session.id);
      return false;
    }

    console.log(session.userId);

    return session.userId;
  } catch {
    return false;
  }
};
