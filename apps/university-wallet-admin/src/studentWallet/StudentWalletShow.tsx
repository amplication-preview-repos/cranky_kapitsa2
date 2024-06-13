import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STUDENTWALLET_TITLE_FIELD } from "./StudentWalletTitle";

export const StudentWalletShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="locked" source="locked" />
        <TextField label="uniqueIdentifier" source="uniqueIdentifier" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="studentWalletId"
          label="Transactions"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
