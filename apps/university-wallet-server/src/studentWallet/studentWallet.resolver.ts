import * as graphql from "@nestjs/graphql";
import { StudentWalletResolverBase } from "./base/studentWallet.resolver.base";
import { StudentWallet } from "./base/StudentWallet";
import { StudentWalletService } from "./studentWallet.service";

@graphql.Resolver(() => StudentWallet)
export class StudentWalletResolver extends StudentWalletResolverBase {
  constructor(protected readonly service: StudentWalletService) {
    super(service);
  }
}
