import { Module } from "@nestjs/common";
import { CiRunModuleBase } from "./base/ciRun.module.base";
import { CiRunService } from "./ciRun.service";
import { CiRunController } from "./ciRun.controller";
import { CiRunResolver } from "./ciRun.resolver";

@Module({
  imports: [CiRunModuleBase],
  controllers: [CiRunController],
  providers: [CiRunService, CiRunResolver],
  exports: [CiRunService],
})
export class CiRunModule {}
