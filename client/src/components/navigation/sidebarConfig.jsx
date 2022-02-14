import { Home, AddBusiness, FamilyRestroom, PieChart } from '@mui/icons-material';
const styleIcon = { fontSize: "40px" };
export const sidebarConfig = [
  {
    title: 'Home',
    path: "/menu",
    icon: <Home sx={styleIcon} />
  },
  {
    title: 'Statistic',
    path: "/statistic",
    icon: <PieChart sx={styleIcon} />
  },
  {
    title: 'Family',
    path: "/family",
    icon: <FamilyRestroom sx={styleIcon} />
  },
  {
    title: 'Add Expenses',
    path: "/expenses",
    icon: <AddBusiness sx={styleIcon} />
  }
];

