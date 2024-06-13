import { Module } from "@nestjs/common";
import { StudentWalletModuleBase } from "./base/studentWallet.module.base";
import { StudentWalletService } from "./studentWallet.service";
import { StudentWalletController } from "./studentWallet.controller";
import { StudentWalletResolver } from "./studentWallet.resolver";

@Module({
  imports: [StudentWalletModuleBase],
  controllers: [StudentWalletController],
  providers: [StudentWalletService, StudentWalletResolver],
  exports: [StudentWalletService],
})
export class StudentWalletModule {}
