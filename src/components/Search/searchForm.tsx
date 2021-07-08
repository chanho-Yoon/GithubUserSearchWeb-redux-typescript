import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import useSearchUsers from '../../hooks/users/useSearchUsers';
import useGetTabIndex from '../../hooks/actions/useTab';
import useSetSearch from '../../hooks/search/useSetSearch';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const getTabIndex = useGetTabIndex();
  const getUsers = useSearchUsers();
  const setSearchWord = useSetSearch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (getTabIndex === 1) getUsers(value);
    if (getTabIndex === 2) setSearchWord(value);
    setValue('');
  };

  return (
    <Wraaper>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={'name enter..'}
          value={value}
          onChange={onChange}
        />
        <button type={'submit'}>
          <AiOutlineSearch />
        </button>
      </form>
    </Wraaper>
  );
};

const Wraaper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 35px;
  margin-top: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;

  form {
    display: flex;
    justify-content: center;
    width: 100%;

    input {
      width: 85%;
      padding-left: 20px;
      font-size: 1.3rem;
      border: none;
      background-color: rgba(0, 0, 0, 0);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.3rem;
      cursor: pointer;
    }
  }
`;

export default SearchForm;
