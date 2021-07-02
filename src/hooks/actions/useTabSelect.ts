import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {tabClickNumber} from "../../modules/tabs";


export default function useTabSelect() {
   const dispatch = useDispatch();
   return useCallback((idx: number) => {
      dispatch(tabClickNumber(idx));
   }, [dispatch])
}