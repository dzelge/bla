import { Module } from "@nestjs/common";
import { BlaModuleBase } from "./base/bla.module.base";
import { BlaService } from "./bla.service";
import { BlaController } from "./bla.controller";
import { BlaResolver } from "./bla.resolver";

@Module({
  imports: [BlaModuleBase],
  controllers: [BlaController],
  providers: [BlaService, BlaResolver],
  exports: [BlaService],
})
export class BlaModule {}
