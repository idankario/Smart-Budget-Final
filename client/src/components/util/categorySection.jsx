import React from 'react';
import Taxi from '../images/Taxi.png';
import Sport from '../images/Sport.png';
import Home from '../images/Home.png';
import Groceries from '../images/Groceries.png';
import { ProgressStyle, FlexSection, H5styles } from '../board';

// eslint-disable-next-line react/prop-types
function CategorySection({ monthExpenses, budgetLimit }) {
  const getTotalCost = (obj, value) => {
    let count = 0;
    const newobj = [];
    Object.keys(obj).forEach((k) => {
      if (obj[k].category === value) {
        newobj.push(obj[k]);
      }
    });
    Object.keys(newobj).forEach((s) => {
      count += newobj[s].cost;
    });
    return count;
  };

  const CategoryList = [
    {
      src: Taxi,
      name: 'Public transport',
      value: getTotalCost(monthExpenses, 'Public transport') / budgetLimit,
    },

    {
      src: Sport,
      name: 'Entertainment',
      value: getTotalCost(monthExpenses, 'Entertainment') / budgetLimit,
    },

    {
      src: Home,
      name: 'Home',
      value: getTotalCost(monthExpenses, 'Home') / budgetLimit,
    },

    {
      src: Groceries,
      name: 'Other',
      value: getTotalCost(monthExpenses, 'Other') / budgetLimit,
    },
  ];

  const eachFlexSection = (data, i) => {
    const { src, name, value } = data[1];
    return (
      <FlexSection key={i}>
        <img src={src} alt={name} titile={name} />
        <H5styles>{name}</H5styles>
        <ProgressStyle value={value} />
      </FlexSection>
    );
  };
  return <>{Object.entries(CategoryList).map(eachFlexSection)}</>;
}
export default CategorySection;
