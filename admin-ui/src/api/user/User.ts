import { CiRun } from "../ciRun/CiRun";

export type User = {
  ciRuns?: Array<CiRun>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
