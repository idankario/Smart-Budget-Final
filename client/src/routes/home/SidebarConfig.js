
import {Home,AddBusiness,FamilyRestroom,PieChart} from '@mui/icons-material';
const styleIcon = {fontSize:"40px"};
export const sidebarConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: <Home sx={styleIcon}/>
  },
  {
    title: 'Statistic',
    path: '/dashboard/user',
    icon: <PieChart sx={styleIcon}/>
  },
  {
    title: 'Family',
    path: '/dashboard/blog',
    icon:<FamilyRestroom sx={styleIcon}/>
  },
  {
    title: 'Add Expenses',
    path: '/login',
    icon:<AddBusiness sx={styleIcon}/>
  }
];

