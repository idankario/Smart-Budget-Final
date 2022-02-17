import React from 'react';
import { Title, Main, WhiteBoard,ProgressStyle,FlexSection,Pstyles} from '../components/board';
import BottomNav from '../components/navigation/bottomNav';
import Statistic from '../components/statistic';
import Taxi from '../components/images/Taxi.png';
import Sport from '../components/images/Sport.png';
import Home from '../components/images/Home.png';
import Groceries from '../components/images/Groceries.png';
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
                    <FlexSection>
                    <img src={Taxi}/>
                    <Pstyles>Public transport</Pstyles>
                    <ProgressStyle value="0.2"></ProgressStyle>
                    </FlexSection>
                    <FlexSection>
                    <img src={Sport}/>
                    <Pstyles>Entertainment</Pstyles>
                    <ProgressStyle value="0.6"></ProgressStyle>
                    </FlexSection>
                    <FlexSection>
                    <img src={Home}/>
                    <Pstyles>Home</Pstyles>
                    <ProgressStyle value="0.9"></ProgressStyle>
                    </FlexSection>
                    <FlexSection>
                    <img src={Groceries}/>
                    <Pstyles>Food</Pstyles>
                    <ProgressStyle value="0.4"></ProgressStyle>
                    </FlexSection>
                        <BottomNav />
                    </WhiteBoard>
                </section>
            </Main>
        </>
    );
};
export default StatisticPage;
