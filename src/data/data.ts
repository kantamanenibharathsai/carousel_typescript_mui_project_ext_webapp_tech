export interface TransactionExpenseObj {
  transactionId: number;
  category: string;
  description: string;
  expenseAmount: number;
  depositAmount: undefined;
  transDate: Date;
  transactionError: string;
}

export interface TransactionDepositObj {
  transactionId: number;
  depositAmount: number;
  category: undefined;
  description: undefined;
  expenseAmount: undefined;
  transDate: Date;
  transactionError: string;
}

export interface UsersObj {
  userId: number;
  userName: string;
  profileImg: string;
  transactionsList: (TransactionDepositObj | TransactionExpenseObj)[];
}

interface MonthsObj {
  monthId: number;
  monthName: string;
}

export const monthsArray: MonthsObj[] = [
  { monthId: 1, monthName: "January" },
  { monthId: 2, monthName: "February" },
  { monthId: 3, monthName: "March" },
  { monthId: 4, monthName: "April" },
  { monthId: 5, monthName: "May" },
  { monthId: 6, monthName: "June" },
  { monthId: 7, monthName: "July" },
  { monthId: 8, monthName: "August" },
  { monthId: 9, monthName: "September" },
  { monthId: 10, monthName: "October" },
  { monthId: 11, monthName: "November" },
  { monthId: 12, monthName: "December" },
];

export const usersArray: UsersObj[] = [
  {
    userId: 1,
    userName: "bharath",
    profileImg:
      "https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg",
    transactionsList: [],
  },
  {
    userId: 2,
    userName: "sai",
    profileImg:
      "https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1700083146404-NFDMB0B4SI9DYK4MQYE0/Cillian+Executive+Headshot.jpg?format=750w",
    transactionsList: [],
  },
  {
    userId: 3,
    userName: "kantamaneni",
    profileImg:
      "https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1636100249202-5NY98C6ASRIFFPO9GZTU/Tom+Professional+Business+Headshot.jpg?format=500w",
    transactionsList: [],
  },
];
