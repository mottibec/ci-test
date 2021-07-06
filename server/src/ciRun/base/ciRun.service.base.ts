import { PrismaService } from "nestjs-prisma";
import { Prisma, CiRun, User } from "@prisma/client";

export class CiRunServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CiRunFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CiRunFindManyArgs>
  ): Promise<number> {
    return this.prisma.ciRun.count(args);
  }

  async findMany<T extends Prisma.CiRunFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CiRunFindManyArgs>
  ): Promise<CiRun[]> {
    return this.prisma.ciRun.findMany(args);
  }
  async findOne<T extends Prisma.CiRunFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CiRunFindUniqueArgs>
  ): Promise<CiRun | null> {
    return this.prisma.ciRun.findUnique(args);
  }
  async create<T extends Prisma.CiRunCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CiRunCreateArgs>
  ): Promise<CiRun> {
    return this.prisma.ciRun.create<T>(args);
  }
  async update<T extends Prisma.CiRunUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CiRunUpdateArgs>
  ): Promise<CiRun> {
    return this.prisma.ciRun.update<T>(args);
  }
  async delete<T extends Prisma.CiRunDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CiRunDeleteArgs>
  ): Promise<CiRun> {
    return this.prisma.ciRun.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.ciRun
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
