import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminWalletWhereInput = {
  dailyCap?: FloatNullableFilter;
  id?: StringFilter;
  monthlyCap?: FloatNullableFilter;
  totalBalance?: FloatNullableFilter;
};
