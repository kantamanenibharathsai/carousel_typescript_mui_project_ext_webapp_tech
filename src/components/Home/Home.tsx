import React, { useContext, useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Input,
  DialogActions,
  Button,
  InputAdornment,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import homeStyles from "./Home.styles";
import cameraImg from "../../assets/greenCamera.png";
import redCameraImg from "../../assets/redCamera.png";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { BankContext } from "../../context/AppContext";
import {
  usersArray,
  UsersObj,
  TransactionDepositObj,
  TransactionExpenseObj,
  monthsArray,
} from "../../data/data";
import TransactionItem from "../transactions/Transactions";

interface IState {
  dropIcon: boolean;
  dropText: string;
  isIncomePopUpOpened: boolean;
  isExpensesPopUpOpened: boolean;
  category: string;
  description: string;
  expensesAmount: number;
  totalAmount: number;
  incomeAmount: number;
  transactionIdNum: number;
  transactionErrMsg: string;
}

const Home = () => {
  const [selectDropIcon, setSelectDropIcon] =
    useState<IState["dropIcon"]>(false);
  const [selectDropText, setSelectDropText] =
    useState<IState["dropText"]>("January");
  const [isIncomePopUpOpened, setIsIncomPopUpOpened] =
    useState<IState["isIncomePopUpOpened"]>(false);
  const [category, setCategory] = useState<IState["category"]>("");
  const [description, setDescription] = useState<IState["description"]>("");
  const [expensesAmount, setExpensesAmount] =
    useState<IState["expensesAmount"]>(0);
  const [incomeAmount, setIncomeAmount] = useState<IState["incomeAmount"]>(0);
  const [isExpensesPopUpOpened, setIsExpensesPopUpOpened] =
    useState<IState["isExpensesPopUpOpened"]>(false);
  const [totalAmount, setTotalAmount] = useState<IState["totalAmount"]>(0);
  const [transactionIdNum, setTransactionIdnum] =
    useState<IState["transactionIdNum"]>(1);
  const [transactionErrMsg, setTransactionErrMsg] =
    useState<IState["transactionErrMsg"]>("");

  const { allUsers, currentUserId, currentUserIdFunc, allUsersFunc } =
    useContext(BankContext);

  const handleDropIcon = () => {
    setSelectDropIcon(!selectDropIcon);
  };

  const handleDropText = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    setSelectDropText((e.target as HTMLParagraphElement).textContent ?? "");
  };

  const handleChangeUser = (e: SelectChangeEvent<number>) => {
    console.log(typeof e.target.value);
    currentUserIdFunc(e.target.value);
  };

  const handleExpensesClose = () => {
    setIsExpensesPopUpOpened(false);
  };

  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setExpensesAmount(+e.target.value);
  };

  const onSubmitBtnClick = (
    category: string,
    description: string,
    amount: number
  ) => {
    let newTransactionObj: TransactionExpenseObj;
    if (expensesAmount <= totalAmount) {
      setTransactionErrMsg("");
      newTransactionObj = {
        transactionId: transactionIdNum,
        category,
        description,
        expenseAmount: expensesAmount,
        depositAmount: undefined,
        transDate: new Date(),
        transactionError: "",
      };
      allUsersFunc(newTransactionObj);
      setTotalAmount(totalAmount - expensesAmount);
      setTransactionIdnum(transactionIdNum + 1);
      setCategory("");
      setDescription("");
      setExpensesAmount(0);
    } else {
      setTransactionErrMsg("Transaction Failed due to insufficient balance");
      const newTransactionFObj: TransactionExpenseObj = {
        transactionId: transactionIdNum,
        category,
        description,
        expenseAmount: expensesAmount,
        depositAmount: undefined,
        transDate: new Date(),
        transactionError: "Transaction Faliled due to insufficient balance",
      };
      setTransactionIdnum(transactionIdNum + 1);
      allUsersFunc(newTransactionFObj);
    }
  };

  const handleIncomePopup = () => {
    setIsIncomPopUpOpened(true);
  };

  const handleExpensesPopup = () => {
    if (totalAmount > 0) setIsExpensesPopUpOpened(true);
  };

  const handleIncomeClose = () => {
    setIsIncomPopUpOpened(false);
  };

  const onIncomeSubmitBtnClick = (amount: number) => {
    const newDepositObj: TransactionDepositObj = {
      transactionId: transactionIdNum,
      depositAmount: incomeAmount,
      category: undefined,
      description: undefined,
      expenseAmount: undefined,
      transDate: new Date(),
      transactionError: "",
    };
    allUsersFunc(newDepositObj);
    console.log(amount);
    setTotalAmount(totalAmount + amount);
    setTransactionIdnum(transactionIdNum + 1);
    setIncomeAmount(amount);
  };

  return (
    <Box sx={homeStyles.homeContainer}>
      <Box sx={homeStyles.homeChildContainer}>
        <Box component="nav" sx={homeStyles.navContainer}>
          <Box sx={homeStyles.navLogoContainer}>
            <Avatar
              alt=""
              src={
                usersArray.find((eachUser) => eachUser.userId === currentUserId)
                  ?.profileImg
              }
              sx={homeStyles.navProfileImg}
            />
          </Box>
          <Box sx={homeStyles.selectContainer}>
            {selectDropIcon === false ? (
              <KeyboardArrowDownIcon
                sx={homeStyles.dropIcon}
                onClick={handleDropIcon}
              />
            ) : (
              <KeyboardArrowUpIcon
                sx={homeStyles.dropIcon}
                onClick={handleDropIcon}
              />
            )}
            <Typography sx={homeStyles.selectText}>{selectDropText}</Typography>
          </Box>
          <NotificationsIcon sx={homeStyles.bellIcon} />
        </Box>
        {selectDropIcon && (
          <Box sx={homeStyles.monthSelection}>
            {monthsArray.map((eachMonthObj) => (
              <Typography
                key={eachMonthObj.monthId}
                sx={homeStyles.optionEl}
                component="p"
                onClick={(e) => handleDropText(e)}
              >
                {eachMonthObj.monthName}
              </Typography>
            ))}
          </Box>
        )}
        <Box sx={homeStyles.dropBalanceContainer}>
          <Box sx={homeStyles.dropUserContainer}>
            <FormControl fullWidth sx={homeStyles.formControl}>
              <InputLabel id="demo-simple-select-label">User</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentUserId}
                label="Age"
                onChange={(e) => handleChangeUser(e)}
                sx={homeStyles.selectElement}
              >
                <MenuItem value={usersArray[0].userId} sx={homeStyles.menuItem}>
                  <Box sx={homeStyles.navLogoContainer}>
                    <Avatar
                      alt=""
                      src={usersArray[0].profileImg}
                      sx={homeStyles.navProfileImg}
                    />
                  </Box>
                  <Typography sx={homeStyles.nameText}>
                    {usersArray[0].userName}
                  </Typography>
                </MenuItem>
                <MenuItem value={usersArray[1].userId} sx={homeStyles.menuItem}>
                  <Box sx={homeStyles.navLogoContainer}>
                    <Avatar
                      alt=""
                      src={usersArray[1].profileImg}
                      sx={homeStyles.navProfileImg}
                    />
                  </Box>
                  <Typography sx={homeStyles.nameText}>
                    {usersArray[1].userName}
                  </Typography>
                </MenuItem>
                <MenuItem value={usersArray[2].userId} sx={homeStyles.menuItem}>
                  <Box sx={homeStyles.navLogoContainer}>
                    <Avatar
                      alt=""
                      src={usersArray[2].profileImg}
                      sx={homeStyles.navProfileImg}
                    />
                  </Box>
                  <Typography sx={homeStyles.nameText}>
                    {usersArray[2].userName}
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={homeStyles.balanceContainer}>
            <Typography component="p" sx={homeStyles.accountBalanceText}>
              Account Balance
            </Typography>
            <Typography component="p" sx={homeStyles.balanceNumber}>
              $ {totalAmount}
            </Typography>
          </Box>
        </Box>
        <Box sx={homeStyles.incomeExpenseContainer}>
          <Box sx={homeStyles.incomeContainer} onClick={handleIncomePopup}>
            <Box sx={homeStyles.imageContentContainer}>
              <Box
                component="img"
                alt="image"
                sx={homeStyles.cameraImage}
                src={cameraImg}
              />
              <Box sx={homeStyles.textContainer}>
                <Typography component="p" sx={homeStyles.transactionTypeText}>
                  Income
                </Typography>
                {/* <Typography component="p" sx={homeStyles.transactionTypeText}>
                  $5000
                </Typography> */}
              </Box>
            </Box>
          </Box>
          <Button
            type="button"
            sx={homeStyles.expenseContainer}
            onClick={handleExpensesPopup}
            disabled={totalAmount === 0}
          >
            <Box sx={homeStyles.imageContentContainer}>
              <Box
                component="img"
                alt="image"
                sx={homeStyles.cameraImage}
                src={redCameraImg}
              />
              <Box sx={homeStyles.textContainer}>
                <Typography component="p" sx={homeStyles.transactionTypeText}>
                  Expenses
                </Typography>
                {/* <Typography component="p" sx={homeStyles.transactionTypeText}>
                  $1200
                </Typography> */}
              </Box>
            </Box>
          </Button>
        </Box>
        <Dialog
          onClose={handleExpensesClose}
          aria-labelledby="customized-dialog-title"
          open={isExpensesPopUpOpened}
        >
          <DialogTitle sx={homeStyles.dialogTitle} id="customized-dialog-title">
            Add Expenses
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleExpensesClose}
            sx={homeStyles.dialogCloseIcon}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <FormControl variant="standard" sx={homeStyles.selectFormControl}>
              <InputLabel id="demo-simple-select-standard-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={(e) => {
                  handleCategoryChange(e);
                }}
                label="Category"
              >
                <MenuItem value="Shopping">Shopping</MenuItem>
                <MenuItem value="Food">Food</MenuItem>
                <MenuItem value="Subscription">Subscription</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ display: "block", marginBottom: "20px" }}
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Description
              </InputLabel>
              <Input
                sx={{ width: "31vh" }}
                id="standard-adornment-amount"
                onChange={(e) => {
                  handleDescriptionChange(e);
                }}
                value={description}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ display: "block" }}>
              <InputLabel htmlFor="standard-adornment-amount">
                Amount
              </InputLabel>
              <Input
                sx={{ width: "31vh" }}
                type="number"
                id="standard-adornment-amount"
                onChange={(e) => {
                  handleAmountChange(e);
                }}
                value={expensesAmount}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => {
                onSubmitBtnClick(category, description, +expensesAmount);
              }}
            >
              Submit
            </Button>
            <Button onClick={handleExpensesClose}>Close</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          onClose={handleIncomeClose}
          aria-labelledby="customized-dialog-title"
          open={isIncomePopUpOpened}
        >
          <DialogTitle sx={homeStyles.dialogTitle} id="customized-dialog-title">
            Add Income
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleIncomeClose}
            sx={homeStyles.dialogCloseIcon}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <FormControl variant="standard" sx={{ display: "block" }}>
              <InputLabel htmlFor="standard-adornment-amount">
                Amount
              </InputLabel>
              <Input
                sx={{ width: "31vh" }}
                type="number"
                id="standard-adornment-amount"
                onChange={(event) => {
                  setIncomeAmount(+event.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <CurrencyRupeeIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => {
                onIncomeSubmitBtnClick(incomeAmount);
              }}
            >
              Submit
            </Button>
            <Button onClick={handleIncomeClose}>Close</Button>
          </DialogActions>
        </Dialog>
        <Box sx={homeStyles.recentTransactionsContainer}>
          <Box sx={homeStyles.recentTransactionsChildContainer}>
            <Typography component="p" sx={homeStyles.recentTransactionText}>
              Recent Transaction
            </Typography>
            <Button type="button" sx={homeStyles.seeAllBtn}>
              sort
            </Button>
            <Button type="button" sx={homeStyles.seeAllBtn}>
              See All
            </Button>
          </Box>
          <Box component="ul" sx={homeStyles.unorderedList}>
            {allUsers
              .find((eachUser: UsersObj) => eachUser.userId === currentUserId)
              ?.transactionsList.map(
                (
                  eachTransactionobj:
                    | TransactionDepositObj
                    | TransactionExpenseObj
                ) => (
                  <TransactionItem
                    key={eachTransactionobj.transactionId}
                    transactionObj={eachTransactionobj}
                    transErrMsg={transactionErrMsg}
                  />
                )
              )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
