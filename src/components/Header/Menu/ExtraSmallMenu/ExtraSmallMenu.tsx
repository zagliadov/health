import { FC } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../../../features/app/store';
import { setMenuOpen } from '../../../../features/slice/dataSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

`;

export const ExtraSmallMenu: FC = () => {
    const open = useAppSelector((state: RootState) => state.data.menuOpen)
    const dispatch = useAppDispatch();

    return (
        <Wrapper>
            asdf
        </Wrapper>




    );
}