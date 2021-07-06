import { User } from "../user/User";

export type CiRun = {
  createdAt: Date;
  endedAt: Date | null;
  id: string;
  startedAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};
