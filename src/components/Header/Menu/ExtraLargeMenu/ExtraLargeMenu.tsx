import { FC } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../../../features/app/store';
import { Row } from 'antd';
import styled from 'styled-components';

const Wrapper = styled(Row)`
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media (max-width: 992px) {
        display: none;
    }
`;
const Link = styled.a`
    padding-left: 25px;
    padding-right: 25px;
    font-size: 20px;
    text-decoration: none;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid black;
        background: #000000;
        border-radius: 20%;
    }
`;

export const ExtraLargeMenu: FC = () => {
    const open = useAppSelector((state: RootState) => state.data.menuOpen)
    const dispatch = useAppDispatch();

    return (
        <Wrapper>
            <Link href="#">How it works</Link>
            <Link href="#">Solution</Link>
            <Link href="#">Tech</Link>
            <Link href="#">News</Link>
            <Link href="#">About us</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Sign in</Link>
        </Wrapper>




    );
}