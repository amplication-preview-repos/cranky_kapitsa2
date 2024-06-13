import { AdminWalletWhereInput } from "./AdminWalletWhereInput";
import { AdminWalletOrderByInput } from "./AdminWalletOrderByInput";

export type AdminWalletFindManyArgs = {
  where?: AdminWalletWhereInput;
  orderBy?: Array<AdminWalletOrderByInput>;
  skip?: number;
  take?: number;
};
