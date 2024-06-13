import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const AdminWalletCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="dailyCap" source="dailyCap" />
        <NumberInput label="monthlyCap" source="monthlyCap" />
        <NumberInput label="totalBalance" source="totalBalance" />
      </SimpleForm>
    </Create>
  );
};
