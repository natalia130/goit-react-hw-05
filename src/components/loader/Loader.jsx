import { Blocks } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Blocks
            height="30"
            width="30"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
        />
    );
};

export default Loader;