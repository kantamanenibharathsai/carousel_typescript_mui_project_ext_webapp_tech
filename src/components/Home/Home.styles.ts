import { grey } from "@mui/material/colors";

const homeStyles = {
  homeContainer: {
    width: "100%",
    height: "100vh",
    // border: "1px solid red",
    boxSizing: "border-box",
    paddinng: "0",
  },

  homeChildContainer: {
    width: "90%",
    height: "100%",
    margin: "auto",
    padding: "0",
    boxSizing: "border-box",
    // border: "1px solid red",
  },

  navContainer: {
    width: "100%",
    // border: "1px solid red",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  navLogoContainer: {
    height: { xs: "50px", sm: "60px" },
    width: { xs: "50px", sm: "60px" },
    borderRadius: "100%",
    border: "1px solid #C85BFB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  navProfileImg: {
    height: { xs: "45px", sm: "52px" },
    width: { xs: "45px", sm: "52px" },
    borderRadius: "100%",
  },

  selectContainer: {
    border: "1px solid #F8F4F0",
    borderRadius: "40px",
    width: { xs: "136px", sm: "160px" },
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    cursor: "pointer",
  },

  dropIcon: {
    width: { xs: "25px", sm: "30px" },
    height: { xs: "25px", sm: "30px" },
    color: "#7f3dff",
    cursor: "pointer",
  },

  selectText: {
    fontFamily: "Roboto",
    color: "#161719",
    fontSize: { xs: "17px", sm: "20px" },
    fontWeight: "500",
    cursor: "pointer",
  },

  monthSelection: {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "10px",
    width: { xs: "136px", sm: "160px" },
    display: "flex",
    flexDirection: "column",
    padding: "10px 0px",

    right: "50%",
    position: "absolute",
    zIndex: "2",
  },

  optionEl: {
    fontFamily: "Roboto",
    color: "#161719",
    fontSize: "16px",
    fontWeight: "500",
    paddingLeft: "13px",
    paddingTop: { xs: "6px", sm: "10px" },
    paddingBottom: { xs: "6px", sm: "10px" },
    cursor: "pointer",
    "&: hover": {
      backgroundColor: "blue",
      borderRadius: "10px",
      color: "#ffffff",
    },
  },

  bellIcon: {
    width: { xs: "40px", sm: "55px" },
    height: { xs: "40px", sm: "55px" },
    color: "#7f3dff",
  },

  dropBalanceContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    // border: "2px solid red",
    marginTop: "40px",
    gap: { xs: "50px", sm: "0px" },
  },

  dropUserContainer: {
    // border: "2px solid green",
  },

  formControl: {
    // border: "1px solid green",
    width: { xs: "260px", sm: "230px !important" },
  },

  selectElement: {
    width: "100% !important",
    fontFamily: "Roboto",
    color: "#161719",
    fontSize: "16px",
    fontWeight: "500",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
    marginBottom: "10px",
  },

  nameText: {
    fontFamily: "Roboto",
    color: "#161719",
    fontSize: "16px",
    fontWeight: "500",
  },

  balanceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "0px",
    // border: "2px solid green",
    marginTop: "10px",
  },

  accountBalanceText: {
    fontFamily: "Roboto",
    color: "#91919f",
    fontSize: { xs: "19px", sm: "22px" },
    fontWeight: "500",
    // border: "2px solid green",
  },

  balanceNumber: {
    fontFamily: "Roboto",
    color: "#161719",
    fontSize: { xs: "33px", sm: "44px" },
    fontWeight: "500",
    // border: "2px solid green",
    padding: "0",
  },

  incomeExpenseContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    // border: "1px solid pink",
    marginTop: "50px",
    gap: "30px",
  },

  incomeContainer: {
    border: "0px",
    borderRadius: "20px",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00a86b",
    boxSizing: "border-box",
  },

  imageContentContainer: {
    // border: "2px solid red",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    width: "90%",
  },

  cameraImage: {
    width: "65px",
    height: "60px",
  },

  textContainer: {
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  transactionTypeText: {
    FontFamily: "Roboto",
    fontSize: "14px",
    color: "white",
    fontWeight: "500",
    // border: "2px solid yellow",
  },

  amountText: {
    FontFamily: "Roboto",
    fontSize: "17px",
    color: "white",
    fontWeight: "500",
    // border: "2px solid yellow",
  },

  expenseContainer: {
    backgroundColor: "#F73D53 !important",
    // border: "3px solid red",
    boxSizing: "border-box",
    borderRadius: "20px",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  dialogTitle: { m: 0, p: 2 },
  dialogCloseIcon: {
    position: "absolute",
    right: 8,
    top: 8,
    color: grey[500],
  },
  selectFormControl: {
    m: 1,
    minWidth: 120,
    width: "30vh",
    marginBottom: "20px",
  },

  recentTransactionsContainer: {
    width: "60%",
    // border: "2px solid red",
    margin: "auto",
    marginTop: "50px",
  },

  recentTransactionsChildContainer: {
    display: "flex",
    // border: "2px solid green",
    alignItems: "center",
    justifyContent: "space-between",
  },

  recentTransactionText: {
    FontFamily: "Roboto",
    fontSize: "19px",
    color: "black",
    fontWeight: "500",
  },

  seeAllBtn: {
    color: "#7f3dff",
    fontSize: "15px",
    fontWeight: 400,
    fontFamily: "Roboto",
    backgroundColor: "#EEE5FF !important",
    outline: "none",
    cursor: "pointer",
    padding: "8px 12px",
    borderRadius: "15px",
    textTransform: "capitalize",
  },

  unorderedList: {
    marginTop: "20px",
    // border: "2px solid pink",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
};

export default homeStyles;
