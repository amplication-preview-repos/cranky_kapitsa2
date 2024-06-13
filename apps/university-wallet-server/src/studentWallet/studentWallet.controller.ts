import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentWalletService } from "./studentWallet.service";
import { StudentWalletControllerBase } from "./base/studentWallet.controller.base";

@swagger.ApiTags("studentWallets")
@common.Controller("studentWallets")
export class StudentWalletController extends StudentWalletControllerBase {
  constructor(protected readonly service: StudentWalletService) {
    super(service);
  }
}
