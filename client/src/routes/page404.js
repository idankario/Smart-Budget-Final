import { Link } from 'react-router-dom';
import { ButtonOrange } from '../component/util/buttonOrange';

export default function Page404() {
  return (
    <>
      <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/page_not_found_su7k.svg" alt="404">
      </img>
      <h4>
        Oopps! The page you were looking doesn't exist.
      </h4>
      <ButtonOrange component={Link} to="../">
        Go to home page
      </ButtonOrange>
    </>
  );
}
