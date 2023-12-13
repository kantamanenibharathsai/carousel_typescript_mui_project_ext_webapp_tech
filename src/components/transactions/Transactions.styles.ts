const transactionStyles = {
  listItem: {
    listStyleType: "none",
    // border: "2px solid orange",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 10px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    borderRadius: "5px",
  },

  imageCategoryDescripContainer: {
    display: "flex",
    alignItems: "center",
    // border: "2px solid green",
    gap: "16px",
  },

  image: {
    width: "63px",
    height: "63px",
    borderRadius: "12px",
  },

  transactionTextContainer: {
    display: "flex",
    flexDirection: "column",
    // gap: "10px",
  },

  categoryText: {
    fontFamily: "Roboto",
    fontSize: "17px",
    color: "black",
    fontWeight: 500,
  },

  descriptionText: {
    fontFamily: "Roboto",
    fontSize: "17px",
    color: "#ACACB6",
    fontWeight: 500,
  },

  amountTimeContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  amountText: {
    color: "red",
    fontFamily: "Roboto",
    fontSize: "17px",
    fontWeight: "500",
  },

  time: {
    color: "#ACACB6",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "500",
  },

  amountAddedtext: {
    color: "black",
    fontFamily: "Roboto",
    fontSize: "19px",
    fontWeight: "500",
  },

  errText: {
    color: "black",
    fontFamily: "Roboto",
    fontSize: "19px",
    fontWeight: "500",
  },
};

export default transactionStyles;
