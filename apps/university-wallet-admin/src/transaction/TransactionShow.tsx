import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { STUDENTWALLET_TITLE_FIELD } from "../studentWallet/StudentWalletTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
