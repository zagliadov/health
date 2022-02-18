import { FC } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../../../features/app/store';
import { Row } from 'antd';
import styled from 'styled-components';

const Wrapper = styled(Row)`

@media (max-width: 992px) {
    display: none;
  }
`;

export const ExtraLargeMenu: FC = () => {
    const open = useAppSelector((state: RootState) => state.data.menuOpen)
    const dispatch = useAppDispatch();

    return (
        <Wrapper>

asdf
        </Wrapper>




    );
}