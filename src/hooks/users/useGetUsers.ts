import {useSelector} from "react-redux";
import {RootState} from "../../modules";

export default function useGetUsers() {
   return useSelector((state: RootState) => state.users)
}