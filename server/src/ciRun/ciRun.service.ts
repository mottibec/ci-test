import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CiRunServiceBase } from "./base/ciRun.service.base";

@Injectable()
export class CiRunService extends CiRunServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
