import Taxi from '../images/Taxi.png';
import Sport from '../images/Sport.png';
import Home from '../images/Home.png';
import Groceries from '../images/Groceries.png';
import { ProgressStyle, FlexSection, H5styles } from '../board';

const CategorySection = ({ monthExpenses }) => {
  const CategoryList = [
    {
      src: Taxi,
      name: "Public Transport",
      value: "0.4"
    },

    {
      src: Sport,
      name: "Entertainment",
      value: "0.2"
    },

    {
      src: Home,
      name: "Home",
      value: "0.3"
    },

    {
      src: Groceries,
      name: "Other",
      value: "0.5"
    },
  ];

  function extractKeyValue(obj) {
    let count = 0;
    Object.keys(obj).map(function (k) {
      count = count + obj[k].cost;
    }
    )
    return count;
  }

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