import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminWalletServiceBase } from "./base/adminWallet.service.base";

@Injectable()
export class AdminWalletService extends AdminWalletServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
