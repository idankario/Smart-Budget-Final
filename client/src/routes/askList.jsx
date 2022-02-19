import React from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import { Card, CardMedia , Typography, CardContent} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BottomNav from '../components/navigation/bottomNav';
// const Asklist = () => {
//     const [users, setUsers] = useState({});
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       let res = await axios({
    //         method: 'get',
    //         headers: { 'x-access-token': localStorage.getItem('token') },
    //         url: 'http://localhost:8000/api/users/leon',
    //       });
    //       if (res.data.token) {
    //         localStorage.setItem('token', res.data.token);
    //         setUsers((({ token, ...o }) => o)(res.data));
    //       }
    //     } catch (error) {
    //       return error.response.data;
    //     }
    //   }
    //   fetchData();
    // }, []);
  
    // const eachcard = (user, index) => {
    //   return (
    //     <div style={{paddingBottom:"30px"}}>
    //     <Card sx={{ width: 400, height: 130, borderRadius: "21px",backgroundColor:'#884EA0'}}>
    //         <CardContent>
    //             <Typography align='left' sx={{paddingLeft:"30px",paddingBottom:"10px",fontWeight:700,fontSize:"38px",lineHeight:"20px",color:"#ECB22F",fontFamily:"cursive"}}>
    //             {user[1].fullName}
    //             </Typography>
    //             <Typography align='left' sx={{paddingLeft:"140px",fontWeight:700,fontSize:"20px",lineHeight:"127.7%",color:"#ECB22F",opacity:0.8,fontFamily:"cursive"}}>
    //                 Ask for 400$
    //             </Typography>
    //             <span>
    //             <Button sx={{width: "1px", height: "30px" }}><CheckIcon/></Button>
    //             <Button sx={{width: "10px", height: "30px" }} ><DeleteForeverIcon/></Button>
    //         </span>
    //         </CardContent>
    //     </Card>
    //     </div>
    //   );
    // }

const AskPage = () => {
  return (
    <Main>
      <section>
        <Title>
          <div></div>
          <h1>loan<span>List!</span></h1>
        </Title>
        <FamilyImage></FamilyImage>
        <WhiteBoard>
       
            <Button component={Link} to="/family" >
            Back home!
          </Button>
        </WhiteBoard>
    
          <BottomNav />
      </section>
    </Main>
  );
};
export default AskPage;