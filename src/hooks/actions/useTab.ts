import {useSelector} from "react-redux";
import {RootState} from "../../modules";

export default function useGetTabIndex() {
   return useSelector((state: RootState) => state.tabs['no'])
}