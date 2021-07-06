import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateCiRunArgs } from "./CreateCiRunArgs";
import { UpdateCiRunArgs } from "./UpdateCiRunArgs";
import { DeleteCiRunArgs } from "./DeleteCiRunArgs";
import { CiRunFindManyArgs } from "./CiRunFindManyArgs";
import { CiRunFindUniqueArgs } from "./CiRunFindUniqueArgs";
import { CiRun } from "./CiRun";
import { User } from "../../user/base/User";
import { CiRunService } from "../ciRun.service";

@graphql.Resolver(() => CiRun)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class CiRunResolverBase {
  constructor(
    protected readonly service: CiRunService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CiRun",
    action: "read",
    possession: "any",
  })
  async _ciRunsMeta(
    @graphql.Args() args: CiRunFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [CiRun])
  @nestAccessControl.UseRoles({
    resource: "CiRun",
    action: "read",
    possession: "any",
  })
  async ciRuns(
    @graphql.Args() args: CiRunFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CiRun[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CiRun",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => CiRun, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CiRun",
    action: "read",
    possession: "own",
  })
  async ciRun(
    @graphql.Args() args: CiRunFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CiRun | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "CiRun",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => CiRun)
  @nestAccessControl.UseRoles({
    resource: "CiRun",
    action: "create",
    possession: "any",
  })
  async createCiRun(
    @graphql.Args() args: CreateCiRunArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CiRun> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "CiRun",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"CiRun"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => CiRun)
  @nestAccessControl.UseRoles({
    resource: "CiRun",
    action: "update",
    possession: "any",
  })
  async updateCiRun(
    @graphql.Args() args: UpdateCiRunArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CiRun | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "CiRun",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"CiRun"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CiRun)
  @nestAccessControl.UseRoles({
    resource: "CiRun",
    action: "delete",
    possession: "any",
  })
  async deleteCiRun(
    @graphql.Args() args: DeleteCiRunArgs
  ): Promise<CiRun | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CiRun",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: CiRun,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
