import { AdminWallet as TAdminWallet } from "../api/adminWallet/AdminWallet";

export const ADMINWALLET_TITLE_FIELD = "id";

export const AdminWalletTitle = (record: TAdminWallet): string => {
  return record.id?.toString() || String(record.id);
};
