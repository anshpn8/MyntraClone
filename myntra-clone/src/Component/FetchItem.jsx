import { fetchStatusActions } from "../store/fetchStatusSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store => store.fetchStatus));
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.fetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone())
        dispatch(fetchStatusActions.fetchingFinished())
        dispatch(itemsActions.addInitialItem(items[0]));
      });
  });

  return;
};
export default FetchItem;5
