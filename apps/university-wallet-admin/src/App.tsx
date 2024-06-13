import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdminWalletList } from "./adminWallet/AdminWalletList";
import { AdminWalletCreate } from "./adminWallet/AdminWalletCreate";
import { AdminWalletEdit } from "./adminWallet/AdminWalletEdit";
import { AdminWalletShow } from "./adminWallet/AdminWalletShow";
import { StudentWalletList } from "./studentWallet/StudentWalletList";
import { StudentWalletCreate } from "./studentWallet/StudentWalletCreate";
import { StudentWalletEdit } from "./studentWallet/StudentWalletEdit";
import { StudentWalletShow } from "./studentWallet/StudentWalletShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UniversityWallet"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AdminWallet"
          list={AdminWalletList}
          edit={AdminWalletEdit}
          create={AdminWalletCreate}
          show={AdminWalletShow}
        />
        <Resource
          name="StudentWallet"
          list={StudentWalletList}
          edit={StudentWalletEdit}
          create={StudentWalletCreate}
          show={StudentWalletShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
