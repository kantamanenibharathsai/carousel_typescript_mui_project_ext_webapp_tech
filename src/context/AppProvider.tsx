import React, { useState } from "react";

import { BankContext } from "./AppContext";
import {
  usersArray,
  UsersObj,
  TransactionExpenseObj,
  TransactionDepositObj,
} from "../data/data";

interface IState {
  allUsers: UsersObj[];
  currentUserId: number;
}

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [allUsers, setAllUsers] = useState<IState["allUsers"]>(usersArray);
  const [currentUserId, setCurrentuserId] = useState<IState["currentUserId"]>(
    usersArray[0].userId
  );

  const allUsersFunc = (
    transactionObj: TransactionExpenseObj | TransactionDepositObj
  ): void => {
    setAllUsers((prevUsers) => {
      return prevUsers.map((eachUserObj: UsersObj) => {
        if (eachUserObj.userId === currentUserId) {
          console.log(currentUserId);
          return {
            ...eachUserObj,
            transactionsList: [...eachUserObj.transactionsList, transactionObj],
          };
        }
        return eachUserObj;
      });
    });
  };

  const currentUserIdFunc = (id: number) => {
    setCurrentuserId(id);
  };

  return (
    <BankContext.Provider
      value={{
        allUsers: allUsers,
        allUsersFunc,
        currentUserId,
        currentUserIdFunc,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};

export default AppProvider;
