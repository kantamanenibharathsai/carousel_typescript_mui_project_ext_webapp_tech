import { createContext } from "react";

import {
  usersArray,
  UsersObj,
  TransactionDepositObj,
  TransactionExpenseObj,
} from "../data/data";

interface Context {
  allUsers: UsersObj[];
  allUsersFunc: (
    transactionObj: TransactionExpenseObj | TransactionDepositObj
  ) => void;
  currentUserId: number;
  currentUserIdFunc: (id: number) => void;
}

export const BankContext = createContext<Context>({
  allUsers: [],
  allUsersFunc: (
    transactionObj: TransactionDepositObj | TransactionExpenseObj
  ) => {},
  currentUserId: usersArray[0].userId,
  currentUserIdFunc: (id: number) => {},
});
