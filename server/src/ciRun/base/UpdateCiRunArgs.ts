import { ArgsType, Field } from "@nestjs/graphql";
import { CiRunWhereUniqueInput } from "./CiRunWhereUniqueInput";
import { CiRunUpdateInput } from "./CiRunUpdateInput";

@ArgsType()
class UpdateCiRunArgs {
  @Field(() => CiRunWhereUniqueInput, { nullable: false })
  where!: CiRunWhereUniqueInput;
  @Field(() => CiRunUpdateInput, { nullable: false })
  data!: CiRunUpdateInput;
}

export { UpdateCiRunArgs };
