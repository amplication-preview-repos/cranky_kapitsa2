import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StudentWalletWhereInput = {
  balance?: FloatNullableFilter;
  id?: StringFilter;
  locked?: BooleanNullableFilter;
  transactions?: TransactionListRelationFilter;
  uniqueIdentifier?: StringNullableFilter;
};
