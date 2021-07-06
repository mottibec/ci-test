import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CiRunWhereInput = {
  endedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  startedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
