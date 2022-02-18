import { FC } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../../features/app/store';
import { setMenuOpen } from '../../../features/slice/dataSlice';
import { Burger } from '../Menu/Burger/Burger';
import { ExtraLargeMenu } from '../Menu/ExtraLargeMenu/ExtraLargeMenu';


export const Menu: FC = () => {
    const open = useAppSelector((state: RootState) => state.data.menuOpen)
    const dispatch = useAppDispatch();

    return (
        <>
            <Burger />
            <ExtraLargeMenu />

        </>




    );
}