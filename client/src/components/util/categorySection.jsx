import Taxi from '../images/Taxi.png';
import Sport from '../images/Sport.png';
import Home from '../images/Home.png';
import Groceries from '../images/Groceries.png';
import { ProgressStyle, FlexSection, H5styles } from '../board';

const CategorySection = ({ monthExpenses,budgetLimit}) => {
  const getTotalCost =  (obj, value) => {
    let count = 0;
    const newobj = [];
    Object.keys(obj).map( (k)=> {
      if (obj[k].category === value) {
        newobj.push(obj[k]);
      }
    })
    Object.keys(newobj).map( (s) =>{
      count = count + newobj[s].cost;
    })
    return count;
  }

  const CategoryList = [
    {
      src: Taxi,
      name: "Public transport",
      value: getTotalCost(monthExpenses, "Public transport")/budgetLimit
    },

    {
      src: Sport,
      name: "Entertainment",
      value:getTotalCost(monthExpenses, "Entertainment")/budgetLimit
    },

    {
      src: Home,
      name: "Home",
      value:getTotalCost(monthExpenses, "Home")/budgetLimit
    },

    {
      src: Groceries,
      name: "Other",
      value: getTotalCost(monthExpenses, "Other")/budgetLimit
    },
  ];
<<<<<<< HEAD
=======

  function extractKeyValue(obj) {
    let count = 0;
    Object.keys(obj).map(function (k) {
      count = count + obj[k].cost;
    }
    )
    return count;
  }
>>>>>>> 5f41c16d47ec82b74e20da0727c7abe100d106d6

  const eachFlexSection = (data, i) => {
    const { src, name, value } = data[1];
    return (
      <FlexSection key={i}>
        <img src={src} alt={name} titile={name} />
        <H5styles>{name}</H5styles>
        <ProgressStyle value={value}></ProgressStyle>
      </FlexSection>
    );
  }

  return (
    <>
      {Object.entries(CategoryList).map(eachFlexSection)}
    </>
  );
};
export default CategorySection;
