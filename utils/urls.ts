export const urls = {
  auth: {
    login: "/login",
    signup: "/signup",
  },
  todo: {
    list: "/todo",
    ById: (id: string) => `/todo/${id}`,
  },
};
