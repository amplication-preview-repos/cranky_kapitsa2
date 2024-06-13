import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STUDENTWALLET_TITLE_FIELD } from "../studentWallet/StudentWalletTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdDate" source="createdDate" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="StudentWallet"
          source="studentwallet.id"
          reference="StudentWallet"
        >
          <TextField source={STUDENTWALLET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="transactionType" source="transactionType" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
