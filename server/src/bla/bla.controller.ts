import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlaService } from "./bla.service";
import { BlaControllerBase } from "./base/bla.controller.base";

@swagger.ApiTags("blas")
@common.Controller("blas")
export class BlaController extends BlaControllerBase {
  constructor(
    protected readonly service: BlaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
