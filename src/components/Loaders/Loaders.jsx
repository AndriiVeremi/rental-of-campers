import { BallTriangle } from 'react-loader-spinner';
import { WrapperLoaders } from './Loaders.styled';

const Loaders = () => {
  return (
    <WrapperLoaders>
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="#e44848"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </WrapperLoaders>
  );
}

export default Loaders;