import { ArgsType, Field } from "@nestjs/graphql";
import { CiRunWhereUniqueInput } from "./CiRunWhereUniqueInput";

@ArgsType()
class DeleteCiRunArgs {
  @Field(() => CiRunWhereUniqueInput, { nullable: false })
  where!: CiRunWhereUniqueInput;
}

export { DeleteCiRunArgs };
