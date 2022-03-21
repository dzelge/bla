import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BlaServiceBase } from "./base/bla.service.base";

@Injectable()
export class BlaService extends BlaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
