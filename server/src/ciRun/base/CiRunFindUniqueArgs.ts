import { ArgsType, Field } from "@nestjs/graphql";
import { CiRunWhereUniqueInput } from "./CiRunWhereUniqueInput";

@ArgsType()
class CiRunFindUniqueArgs {
  @Field(() => CiRunWhereUniqueInput, { nullable: false })
  where!: CiRunWhereUniqueInput;
}

export { CiRunFindUniqueArgs };
