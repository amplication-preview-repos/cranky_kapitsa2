/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StudentWalletService } from "../studentWallet.service";
import { StudentWalletCreateInput } from "./StudentWalletCreateInput";
import { StudentWallet } from "./StudentWallet";
import { StudentWalletFindManyArgs } from "./StudentWalletFindManyArgs";
import { StudentWalletWhereUniqueInput } from "./StudentWalletWhereUniqueInput";
import { StudentWalletUpdateInput } from "./StudentWalletUpdateInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

export class StudentWalletControllerBase {
  constructor(protected readonly service: StudentWalletService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StudentWallet })
  async createStudentWallet(
    @common.Body() data: StudentWalletCreateInput
  ): Promise<StudentWallet> {
    return await this.service.createStudentWallet({
      data: data,
      select: {
        balance: true,
        createdAt: true,
        id: true,
        locked: true,
        uniqueIdentifier: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StudentWallet] })
  @ApiNestedQuery(StudentWalletFindManyArgs)
  async studentWallets(
    @common.Req() request: Request
  ): Promise<StudentWallet[]> {
    const args = plainToClass(StudentWalletFindManyArgs, request.query);
    return this.service.studentWallets({
      ...args,
      select: {
        balance: true,
        createdAt: true,
        id: true,
        locked: true,
        uniqueIdentifier: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StudentWallet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async studentWallet(
    @common.Param() params: StudentWalletWhereUniqueInput
  ): Promise<StudentWallet | null> {
    const result = await this.service.studentWallet({
      where: params,
      select: {
        balance: true,
        createdAt: true,
        id: true,
        locked: true,
        uniqueIdentifier: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: StudentWallet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStudentWallet(
    @common.Param() params: StudentWalletWhereUniqueInput,
    @common.Body() data: StudentWalletUpdateInput
  ): Promise<StudentWallet | null> {
    try {
      return await this.service.updateStudentWallet({
        where: params,
        data: data,
        select: {
          balance: true,
          createdAt: true,
          id: true,
          locked: true,
          uniqueIdentifier: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: StudentWallet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStudentWallet(
    @common.Param() params: StudentWalletWhereUniqueInput
  ): Promise<StudentWallet | null> {
    try {
      return await this.service.deleteStudentWallet({
        where: params,
        select: {
          balance: true,
          createdAt: true,
          id: true,
          locked: true,
          uniqueIdentifier: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: StudentWalletWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        createdDate: true,
        id: true,
        status: true,

        studentWallet: {
          select: {
            id: true,
          },
        },

        transactionType: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  async connectTransactions(
    @common.Param() params: StudentWalletWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateStudentWallet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  async updateTransactions(
    @common.Param() params: StudentWalletWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateStudentWallet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  async disconnectTransactions(
    @common.Param() params: StudentWalletWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateStudentWallet({
      where: params,
      data,
      select: { id: true },
    });
  }
}
