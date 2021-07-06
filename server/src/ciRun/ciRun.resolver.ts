import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CiRunResolverBase } from "./base/ciRun.resolver.base";
import { CiRun } from "./base/CiRun";
import { CiRunService } from "./ciRun.service";

@graphql.Resolver(() => CiRun)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class CiRunResolver extends CiRunResolverBase {
  constructor(
    protected readonly service: CiRunService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
