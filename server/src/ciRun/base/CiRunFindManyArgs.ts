import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CiRunWhereInput } from "./CiRunWhereInput";
import { Type } from "class-transformer";
import { CiRunOrderByInput } from "./CiRunOrderByInput";

@ArgsType()
class CiRunFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CiRunWhereInput,
  })
  @Field(() => CiRunWhereInput, { nullable: true })
  @Type(() => CiRunWhereInput)
  where?: CiRunWhereInput;

  @ApiProperty({
    required: false,
    type: CiRunOrderByInput,
  })
  @Field(() => CiRunOrderByInput, { nullable: true })
  @Type(() => CiRunOrderByInput)
  orderBy?: CiRunOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CiRunFindManyArgs };
