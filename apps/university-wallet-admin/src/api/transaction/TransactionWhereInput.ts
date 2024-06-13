import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWalletWhereUniqueInput } from "../studentWallet/StudentWalletWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  createdDate?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  studentWallet?: StudentWalletWhereUniqueInput;
  transactionType?: "Option1";
};
