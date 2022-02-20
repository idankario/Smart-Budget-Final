import React, { useEffect, useState } from 'react';
import { Title, Main, WhiteBoard } from '../components/board';
import BottomNav from '../components/navigation/bottomNav';
import StatisticGraph from '../components/statisticGraph';
import CategorySection from '../components/util/categorySection';
import axios from 'axios';
const StatisticPage = () => {
    const [expensesMonth, setExpenses] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios({
                    method: 'get',
                    headers: { 'x-access-token': localStorage.getItem('token') },
                    url: 'https://thesmartbudget.herokuapp.com/api/users/expenses',
                });
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    const expenses = await res.data.expenses;
                    setExpenses(expenses);
                }
            } catch (error) {
                return error.response.data;
            }
        }
        fetchData();
    }, []);

    const getTotalExpenses = (obj) => {
        let count = 0;
        Object.keys(obj).forEach((k) => {
            count = count + obj[k].cost;
        })
        return count;
    }

    return (
        <Main>
            <section>
                <Title>
                    <div></div>
                    <h1>SMART <span>Budget!</span></h1>
                </Title>
                <StatisticGraph monthExpenses={getTotalExpenses(expensesMonth)} budgetLimit={user.budgetLimit} />
                <WhiteBoard >
                    <CategorySection monthExpenses={expensesMonth} budgetLimit={user.budgetLimit} />
                    <BottomNav />
                </WhiteBoard>
            </section>
        </Main>
    );
};
export default StatisticPage;