import { Home, AddBusiness, FamilyRestroom, PieChart,AccountCircle} from '@mui/icons-material';
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
  },
  
  {
    title: 'Account',
    path: "/account",
    icon: <AccountCircle sx={styleIcon} />
  }
];

