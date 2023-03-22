import { Oval } from 'react-loader-spinner';

const Loader = ({ color }) => (
  <Oval
    height="100%"
    width="100%"
    color={color}
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor={color}
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
);

export default Loader;
