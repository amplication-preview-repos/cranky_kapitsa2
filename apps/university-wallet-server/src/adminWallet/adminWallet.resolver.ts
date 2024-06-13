import * as graphql from "@nestjs/graphql";
import { AdminWalletResolverBase } from "./base/adminWallet.resolver.base";
import { AdminWallet } from "./base/AdminWallet";
import { AdminWalletService } from "./adminWallet.service";

@graphql.Resolver(() => AdminWallet)
export class AdminWalletResolver extends AdminWalletResolverBase {
  constructor(protected readonly service: AdminWalletService) {
    super(service);
  }
}
