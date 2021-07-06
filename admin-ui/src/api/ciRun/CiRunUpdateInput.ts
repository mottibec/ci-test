import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CiRunUpdateInput = {
  endedAt?: Date | null;
  startedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
