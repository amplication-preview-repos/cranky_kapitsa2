import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AdminWalletList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AdminWallets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="dailyCap" source="dailyCap" />
        <TextField label="ID" source="id" />
        <TextField label="monthlyCap" source="monthlyCap" />
        <TextField label="totalBalance" source="totalBalance" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
