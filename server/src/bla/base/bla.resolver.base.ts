/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteBlaArgs } from "./DeleteBlaArgs";
import { BlaFindManyArgs } from "./BlaFindManyArgs";
import { BlaFindUniqueArgs } from "./BlaFindUniqueArgs";
import { Bla } from "./Bla";
import { BlaService } from "../bla.service";

@graphql.Resolver(() => Bla)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BlaResolverBase {
  constructor(
    protected readonly service: BlaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "read",
    possession: "any",
  })
  async _blasMeta(
    @graphql.Args() args: BlaFindManyArgs
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

  @graphql.Query(() => [Bla])
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "read",
    possession: "any",
  })
  async blas(
    @graphql.Args() args: BlaFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Bla[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Bla",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Bla, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "read",
    possession: "own",
  })
  async bla(
    @graphql.Args() args: BlaFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Bla | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Bla",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Bla)
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "delete",
    possession: "any",
  })
  async deleteBla(@graphql.Args() args: DeleteBlaArgs): Promise<Bla | null> {
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
}