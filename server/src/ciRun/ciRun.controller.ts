import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CiRunService } from "./ciRun.service";
import { CiRunControllerBase } from "./base/ciRun.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("ci-runs")
@common.Controller("ci-runs")
export class CiRunController extends CiRunControllerBase {
  constructor(
    protected readonly service: CiRunService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
