import React, { useEffect, useState } from 'react';
import { Title, Main, WhiteBoard } from '../components/board';
import BottomNav from '../components/navigation/bottomNav';
import StatisticGraph from '../components/statisticGraph';
import CategorySection from '../components/util/categorySection';

import axios from 'axios';
const StatisticPage = () => {
    const [expensesMonth, setExpenses] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios({
                    method: 'get',
                    headers: { 'x-access-token': localStorage.getItem('token') },
                    url: 'http://localhost:8000/api/users/expenses',
                });
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    const expenses = res.data.expenses;
                    setExpenses(expenses);

                }
            } catch (error) {
                return error.response.data;
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Main>
                <section>
                    <Title>
                        <div></div>
                        <h1>SMART <span>Budget!</span></h1>
                    </Title>
                    <StatisticGraph monthExpenses={expensesMonth} />
                    <WhiteBoard >
                        <CategorySection monthExpenses={expensesMonth} />
                        <BottomNav />
                    </WhiteBoard>
                </section>
            </Main>
        </>
    );
};
export default StatisticPage;
