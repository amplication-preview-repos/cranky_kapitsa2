import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const AdminWalletEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="dailyCap" source="dailyCap" />
        <NumberInput label="monthlyCap" source="monthlyCap" />
        <NumberInput label="totalBalance" source="totalBalance" />
      </SimpleForm>
    </Edit>
  );
};
