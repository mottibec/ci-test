import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CiRunCreateInput = {
  endedAt?: Date | null;
  startedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
