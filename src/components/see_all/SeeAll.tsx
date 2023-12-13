import { Box, Typography } from "@mui/material";
import React from "react";
import seeAllStyles from "./Seeall.styles";
import {
  TransactionDepositObj,
  TransactionExpenseObj,
  UsersObj,
} from "../../data/data";
import { BankContext } from "../../context/AppContext";
import TransactionItem from "../transactions/Transactions";

const SeeAll = () => {
  const { allUsers, currentUserId } = React.useContext(BankContext);

  return (
    <Box sx={seeAllStyles.seeAllContainer}>
      <Box sx={seeAllStyles.seeAllChildContainer}>
        <Typography component="h2" sx={seeAllStyles.allTransactionsText}>
          All Transactions By UserName
        </Typography>
        <Box sx={seeAllStyles.unorderedList}>
          {allUsers
            .find((eachUser: UsersObj) => eachUser.userId === currentUserId)
            ?.transactionsList.map(
              (
                eachTransaction: TransactionDepositObj | TransactionExpenseObj
              ) => (
                <TransactionItem
                  key={eachTransaction.transactionId}
                  transactionObj={eachTransaction}
                />
              )
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default SeeAll;
