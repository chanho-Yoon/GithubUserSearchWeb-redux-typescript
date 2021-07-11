import styled from 'styled-components';

const ListLiStyle = styled.li`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 15px 0;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 0 5px 0;
  }
  &:first-child {
    margin-top: 15px;
  }
  .first_word {
    position: absolute;
    top: 15px;
    left: -40px;
    width: 10px;
    padding: 0 20px 0 0;
    border-right: 5px solid #00c400;
    font-size: 1.5rem;
  }
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  span {
    width: 350px;
    padding-left: 20px;
    font-size: 1.5rem;
  }

  button {
    display: flex;
    align-items: center;
    font-size: 4rem;
    cursor: pointer;
    color: lightgray;

    &.active {
      color: #00c400;
    }
  }
`;

export default ListLiStyle;
