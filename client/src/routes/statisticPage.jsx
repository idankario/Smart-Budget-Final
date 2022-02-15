import React from 'react';
import { Title, Main, WhiteBoard } from '../components/board';
import BottomNav from '../components/navigation/bottomNav';
import Statistic from '../components/statistic';
import { LinearProgress } from '@mui/material';

const StatisticPage = () => {
    return (
        <>
            <Main>
                <section>
                    <Title>
                        <div></div>
                        <h1>SMART <span>Budget!</span></h1>
                    </Title>
                    <Statistic />
                    <WhiteBoard>
                    <progress value="0.4"></progress>
                        <BottomNav />
                    </WhiteBoard>
                </section>
            </Main>
        </>
    );
};
export default StatisticPage;
