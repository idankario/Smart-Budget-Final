// import { useEffect, useState, Component } from 'react';
// import Axios from 'axios';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import './convertCurency.css';
// import { CompareArrowsOutlined } from '@mui/icons-material';
// import Select from 'react-select';
// // const options2 = [
// //   { value: 'chocolate', label: 'Chocolate' },
// //   { value: 'strawberry', label: 'Strawberry' },
// //   { value: 'vanilla', label: 'Vanilla' }
// // ]


// const ConvertCurency = () => {
//   // Initializing all the state variables
//   const [info, setInfo] = useState([]);
//   const [input, setInput] = useState(0);
//   const [from, setFrom] = useState('usd');
//   const [to, setTo] = useState('ils');
//   const [options, setOptions] = useState([]);
//   const [output, setOutput] = useState(0);

//   // Calling the api whenever the dependency changes
//   useEffect(() => {
//     Axios.get(
//       `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
//     ).then((res) => {

//       const options = Object.entries(res.data[from]).map(([k, v]) => [{ value: v, label: k }]);


//       console.log(options)
//       setOptions(options)
//       setInfo(res.data[from]);
//     });
//   }, [from]);

//   // Calling the convert function whenever
//   // a user switches the currency
//   useEffect(() => {
//     setOptions(Object.keys(info));
//     convert();
//   }, [info]);

//   // Function to convert the currency
//   const convert = () => {
//     var rate = info[to];
//     setOutput(input * rate);
//   };

//   // Function to switch between two currency
//   const flip = () => {
//     let temp = from;
//     setFrom(to);
//     setTo(temp);
//   };

//   return (
//     <div className="App">
//       <div className="heading">
//         <h1>Currency converter</h1>
//       </div>
//       <div className="container">
//         <div className="left">
//           <h3>Amount</h3>
//           <input
//             type="text"
//             placeholder="Enter the amount"
//             onChange={(e) => setInput(e.target.value)}
//           />
//         </div>
//         <div className="middle">
//           <h3>From</h3>
//           <Dropdown
//             options={options}
//             onChange={(e) => {
//               setFrom(e.value);
//             }}
//             value={from}
//             placeholder="From"
//           />
//         </div>
//         <div className="switch">
//           <CompareArrowsOutlined
//             size="30px"
//             onClick={() => {
//               flip();
//             }}
//           />
//         </div>
//         <div className="right">
//           <h3>To</h3>
//           <Select
//             options={options}
//             // onChange={(e) => {
//             //   setTo(e.value);
//             // }}
//             // value={to}
//             placeholder="To"
//           />
//         </div>
//       </div>
//       <div className="result">
//         <button
//           onClick={() => {
//             convert();
//           }}
//         >
//           Convert
//         </button>
//         <h2>Converted Amount:</h2>
//         <p>{`${input} ${from} = ${output.toFixed(2)} ${to}`}</p>
//       </div>
//     </div>
//   );
// };

// export default ConvertCurency;
