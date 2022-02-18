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
  var objects = [{category: "Bars", amount: 31231},
{category: "Transport", cost: 1297},
{category: "Utilities", cost: 12300},
{category: "Bars", cost: 2000},
{category: "Transport", cost: 2500},
{category: "Education", cost: 21321}];

var newObjectsMerged = objects.reduce((object, item) => {
  var category = item.category;
  var cost = item.cost;
  if (!object.hasOwnProperty(category)) {
    object[category] = 0;
  }
  
  object[category] += cost;
  return object;
}, {});

console.log("newObjectsMerged", newObjectsMerged);
console.log(typeof objects)
// console.log(typeof monthExpenses)
  console.log( monthExpenses)

  const eachFlexSection = (data, i) => {
    const { src, name, value } = data[1];
    return (
      <FlexSection key={i}>
        <img src={src} alt={name} titile={name}/>
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