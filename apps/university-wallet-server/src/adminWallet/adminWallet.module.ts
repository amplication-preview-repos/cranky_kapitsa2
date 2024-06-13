import { Module } from "@nestjs/common";
import { AdminWalletModuleBase } from "./base/adminWallet.module.base";
import { AdminWalletService } from "./adminWallet.service";
import { AdminWalletController } from "./adminWallet.controller";
import { AdminWalletResolver } from "./adminWallet.resolver";

@Module({
  imports: [AdminWalletModuleBase],
  controllers: [AdminWalletController],
  providers: [AdminWalletService, AdminWalletResolver],
  exports: [AdminWalletService],
})
export class AdminWalletModule {}
