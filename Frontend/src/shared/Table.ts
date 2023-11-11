import { User } from "./User";

export enum TablePaths {
  Id = "Id",
  "First Name" = "First Name",
  "Last Name" = "Last Name",
  Email = "Email",
  "Date Created" = "Date Created",
}

export type TableColumns = {
  path: string;
  label: string;
  content?: (user: User) => JSX.Element;
};
