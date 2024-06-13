import { StudentWalletWhereInput } from "./StudentWalletWhereInput";
import { StudentWalletOrderByInput } from "./StudentWalletOrderByInput";

export type StudentWalletFindManyArgs = {
  where?: StudentWalletWhereInput;
  orderBy?: Array<StudentWalletOrderByInput>;
  skip?: number;
  take?: number;
};
