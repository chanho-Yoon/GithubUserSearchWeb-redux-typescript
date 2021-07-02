import {useCallback} from "react";
import useGetLocalDatas from "./useGetLocalDatas";

export default function useGetIndexLocalData() {
   const getLocalDatas = useGetLocalDatas()
   return useCallback((id: number) => {
      const localDatas = getLocalDatas();
      return localDatas?.some((data: { id: number; }) => data.id === id
      );
   }, [])
}