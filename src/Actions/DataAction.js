import axios from "axios";

export const fetchAllData = () => async (dispatch) => {
  try {
    dispatch({ type: "DATA_REQUEST" });

    const { data } = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment/"
    );

    dispatch({ type: "DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DATA_FAILURE" });
  }
};

export const selectData =
  (group, allTickets, order) => async (dispatch) => {
    try {
      dispatch({ type: "SELECT_DATA_REQUEST" });

      let user = false;
      let mySet = new Set();
      let arr = [],
        selectedData = [];
      let sta = true;
      if (group === "status") {
        allTickets.forEach((elem) => {
          mySet.add(elem.status);
        });
        mySet.add("Todo");
        mySet.add("In progress");
        mySet.add("Backlog");
        mySet.add("Done");
        mySet.add("canceled");
        arr = [...mySet];

        arr.forEach((elem, index) => {
          let arr = allTickets.filter((fElem) => {
            return elem === fElem.status;
          });
          selectedData.push({
            [index]: {
              title: elem,
              value: arr,
              sta: sta,
            },
          });
        });
      } else if (group === "user") {
        user = true;
        allTickets?.allUser?.forEach((elem, index) => {
          arr = allTickets?.allTickets?.filter((Felem) => {
            return elem.id === Felem.userId;
          });

          selectedData.push({
            [index]: {
              title: elem.name,
              value: arr,
              sta: false,
            },
          });
        });
      } else {
        let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

        prior_list.forEach((elem, index) => {
          arr = allTickets.filter((fElem) => {
            return index === fElem.priority;
          });

          selectedData.push({
            [index]: {
              title: elem,
              value: arr,
              sta: sta,
            },
          });
        });
      }

      if (order === "title") {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
        });
      }

      if (order === "priority") {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => b.priority - a.priority);
        });
      }

      dispatch({
        type: "SELECT_DATA_SUCCESS",
        payload: { selectedData, user },
      });
    } catch (error) {
      dispatch({ type: "SELECT_DATA_FAILURE", payload: error.message });
    }
  };
