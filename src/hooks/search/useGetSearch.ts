import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function useGetSearch() {
  return useSelector((state: RootState) => state.search);
}
