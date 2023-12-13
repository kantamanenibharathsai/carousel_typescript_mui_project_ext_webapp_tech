import { Box, Typography } from "@mui/material";
import React from "react";
import transactionStyles from "./Transactions.styles";
import { TransactionDepositObj, TransactionExpenseObj } from "../../data/data";
import shopping from "../../assets/shopping.png";
import subscription from "../../assets/subscription.png";
import food from "../../assets/food.png";
import { BankContext } from "../../context/AppContext";
interface MyComponentProps {
  transactionObj: TransactionExpenseObj | TransactionDepositObj;
  transErrMsg?: string;
}

const TransactionItem: React.FC<MyComponentProps> = ({
  transactionObj,
  transErrMsg,
}) => {
  const formatTime = (now: Date) => {
    const hours: string = (now.getHours() % 12 || 12)
      .toString()
      .padStart(2, "0");
    const minutes: string = now.getMinutes().toString().padStart(2, "0");
    const seconds: string = now.getSeconds().toString().padStart(2, "0");
    const meridiem: string = +hours >= 12 ? "PM" : "AM";
    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  };

  const { allUsers, currentUserId } = React.useContext(BankContext);

  const getImage = (category: string) => {
    switch (true) {
      case category === "Shopping":
        return shopping;
      case category === "Subscription":
        return subscription;
      default:
        return food;
    }
  };

  return (
    <Box component="li" sx={transactionStyles.listItem}>
      {transactionObj.category !== undefined ? (
        <>
          <Box sx={transactionStyles.imageCategoryDescripContainer}>
            {!transactionObj.transactionError && (
              <>
                <Box
                  component="img"
                  src={getImage(transactionObj.category)}
                  alt="image"
                  sx={transactionStyles.image}
                />
                <Box sx={transactionStyles.transactionTextContainer}>
                  <Typography sx={transactionStyles.categoryText}>
                    {transactionObj.category}
                  </Typography>
                  <Typography sx={transactionStyles.descriptionText}>
                    {transactionObj.description}
                  </Typography>
                </Box>
              </>
            )}
            {transactionObj.transactionError && (
              <Typography sx={transactionStyles.errText}>
                {transErrMsg}{" "}
                <Box component="span" sx={{ color: "red" }}>
                  {
                    allUsers.find(
                      (eachuser) => eachuser.userId === currentUserId
                    )?.userName
                  }
                </Box>
              </Typography>
            )}
          </Box>
          <Box sx={transactionStyles.amountTimeContainer}>
            <Typography component="p" sx={transactionStyles.amountText}>
              -${transactionObj.expenseAmount}
            </Typography>
            <Typography component="p" sx={transactionStyles.time}>
              {formatTime(transactionObj.transDate)}
            </Typography>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            ...transactionStyles.imageCategoryDescripContainer,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography sx={transactionStyles.amountAddedtext}>
            Amount Added By{" "}
            <Box
              component="span"
              sx={{ ...transactionStyles.amountAddedtext, color: "green" }}
            >
              {
                allUsers.find((eachuser) => eachuser.userId === currentUserId)
                  ?.userName
              }
            </Box>
          </Typography>
          <Box sx={transactionStyles.amountTimeContainer}>
            <Typography
              component="p"
              sx={{ ...transactionStyles.amountText, color: "green" }}
            >
              ${transactionObj.depositAmount}
            </Typography>
            <Typography component="p" sx={transactionStyles.time}>
              {formatTime(transactionObj.transDate)}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TransactionItem;
