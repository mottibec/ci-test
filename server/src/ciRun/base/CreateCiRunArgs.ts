import { ArgsType, Field } from "@nestjs/graphql";
import { CiRunCreateInput } from "./CiRunCreateInput";

@ArgsType()
class CreateCiRunArgs {
  @Field(() => CiRunCreateInput, { nullable: false })
  data!: CiRunCreateInput;
}

export { CreateCiRunArgs };
