import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdminWalletService } from "./adminWallet.service";
import { AdminWalletControllerBase } from "./base/adminWallet.controller.base";

@swagger.ApiTags("adminWallets")
@common.Controller("adminWallets")
export class AdminWalletController extends AdminWalletControllerBase {
  constructor(protected readonly service: AdminWalletService) {
    super(service);
  }
}
