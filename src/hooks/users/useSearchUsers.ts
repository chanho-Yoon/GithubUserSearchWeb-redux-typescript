import { useDispatch } from 'react-redux';
import { Octokit } from '@octokit/core';
import { useCallback } from 'react';
import { getUsers } from '../../modules/users';

const useSearchUsers = () => {
  const dispatch = useDispatch();
  return useCallback(
    async (searchWord: string) => {
      const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_KEY });
      const response = await octokit.request('GET /search/users', {
        q: searchWord + 'in:name',
        page: 1,
        per_page: 100,
      });
      dispatch(getUsers(response.data.items, searchWord));
    },
    [dispatch],
  );
};

export default useSearchUsers;
