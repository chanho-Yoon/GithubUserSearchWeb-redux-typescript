import React, {useState} from 'react';
import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai'

const SearchForm = () => {
   const [value, setValue] = useState('');

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   }
   const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();

   }

   return (
      <Wraaper>
         <form onSubmit={onSubmit}>
            <input type="text" placeholder={"name enter.."} value={value} onChange={onChange} />
            <button type={"submit"}>
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
    width: 50%;
    height: 50px;
    margin-top: 20px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;

    form {
        display: flex;
        justify-content: center;
        width: 100%;

        input {
            width: 85%;
            padding-left: 20px;
            font-size: 1.8rem;
            border: none;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 15%;
            font-size: 2.5rem;
        }
    }
`

export default SearchForm;