import icon1 from '../images/1.png';
import icon2 from '../images/2.png';
import icon3 from '../images/3.png';
import icon4 from '../images/4.png';
import icon5 from '../images/5.png';
const icons = [icon1, icon2, icon3, icon4, icon5];
const iconsUsers = (index) => icons[index % 6];
export default iconsUsers;