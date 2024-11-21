interface IPocketBaseTodoList extends ListResult {
  items: ITodo[];
}

interface IChildren {
  children: React.JSX.Element | React.JSX.Element[] | React.ReactNode;
}

interface AxiosErrorResponse {
  error?: string;
}

interface IModal {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  id?:string
}
