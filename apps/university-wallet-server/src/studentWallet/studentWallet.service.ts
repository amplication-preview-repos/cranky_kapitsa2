import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentWalletServiceBase } from "./base/studentWallet.service.base";

@Injectable()
export class StudentWalletService extends StudentWalletServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
