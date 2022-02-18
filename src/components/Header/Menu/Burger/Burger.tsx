import { FC } from 'react';
import styled from 'styled-components';
import { RootState, useAppDispatch, useAppSelector } from '../../../../features/app/store';
import { setMenuOpen } from '../../../../features/slice/dataSlice';


interface IProps {
    open: boolean;
}
const StyledBurger = styled.button<IProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#000000'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
        margin-left: ${({ open }) => open ? '2px' : '0'};
        margin-bottom: ${({ open }) => open ? '10px' : '0'};
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :last-child {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      margin-left: ${({ open }) => open ? '1px' : '0'};
    }
  }
  @media (min-width: 992px) {
    display: none;
  }
`;



export const Burger: FC = () => {
    const open = useAppSelector((state: RootState) => state.data.menuOpen)
    const dispatch = useAppDispatch();

    return (
        <StyledBurger open={open} onClick={() => dispatch(setMenuOpen(!open))}>
            <div></div>
            <div></div>
        </StyledBurger>



    );
}