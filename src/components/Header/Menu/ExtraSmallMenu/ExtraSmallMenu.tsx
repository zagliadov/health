import { FC } from 'react';
import { RootState, useAppSelector } from '../../../../features/app/store';
import styled from 'styled-components';

interface IOpen {
    open: boolean;
}
const Wrapper = styled.div<IOpen>`
    display:  ${({ open }) => open ? 'block' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    z-index: 3;
    width: 100%;
    height: 100%;
    padding: 10px;
`;
const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`;
const Link = styled.a`
    padding-left: 25px;
    padding-right: 25px;
    font-size: 20px;
    text-decoration: none;

`;

export const ExtraSmallMenu: FC = () => {
    const open = useAppSelector((state: RootState) => state.data.menuOpen)


    return (
        <Wrapper open={open}>
            <Menu>
                <Link href="#">How it works</Link>
                <Link href="#">Solution</Link>
                <Link href="#">Tech</Link>
                <Link href="#">News</Link>
                <Link href="#">About us</Link>
                <Link href="#">Contact</Link>
                <Link href="#">Sign in</Link>
            </Menu>
        </Wrapper>




    );
}