
import { Home, AddBusiness, FamilyRestroom, PieChart } from '@mui/icons-material';
const styleIcon = { fontSize: "40px" };
export const sidebarConfig = [
  {
    title: 'Home',
    path: "../",
    icon: <Home sx={styleIcon} />
  },
  {
    title: 'Statistic',
    path: "/statistic",
    icon: <PieChart sx={styleIcon} />
  },
  {
    title: 'Family',
    path: "/homepageft",
    icon: <FamilyRestroom sx={styleIcon} />
  },
  {
    title: 'Add Expenses',
    path: "/homepagefff",
    icon: <AddBusiness sx={styleIcon} />
  }
];

