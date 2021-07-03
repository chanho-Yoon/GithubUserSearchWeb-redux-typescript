import React from 'react';
import styled, { keyframes } from 'styled-components';
import useTabSelect from '../../hooks/actions/useTabSelect';
import useGetTabIndex from '../../hooks/actions/useTab';

const TabMenu = () => {
  const tabSelect = useTabSelect();
  const tabIdx = useGetTabIndex();
  const onClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    tabSelect(Number(e.currentTarget.dataset['index']));
  };
  return (
    <Wrapper>
      <button
        className={tabIdx === 1 ? 'active' : ''}
        data-index={1}
        onClick={onClick}
      >
        <span>유저(Name) 검색</span>
      </button>
      <button
        className={tabIdx === 2 ? 'active' : ''}
        data-index={2}
        onClick={onClick}
      >
        <span>즐겨찾기</span>
      </button>
    </Wrapper>
  );
};

const BORDER_RADIUS = '15px';

// 애니메이션 ----
const btnBackColorFade = keyframes`
       0% {
           background-color: rgba(0, 0, 0, 0);
       }
       100% {
           background-color: #00c400;
       }
   `;
//-------

const Wrapper = styled.div`
  width: 66%;
  height: 40px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;

  button {
    width: 50%;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: 1px;
    background-color: #fafafa;

    &:first-child {
      border-top-left-radius: ${BORDER_RADIUS};
      border-bottom-left-radius: ${BORDER_RADIUS};
      border-right: 1px solid #dedede;
    }

    &:last-child {
      border-top-right-radius: ${BORDER_RADIUS};
      border-bottom-right-radius: ${BORDER_RADIUS};
    }
  }

  .active {
    background-color: #00c400;
    color: white;
    animation: ${btnBackColorFade} 0.2s linear forwards;
  }
`;

export default TabMenu;
