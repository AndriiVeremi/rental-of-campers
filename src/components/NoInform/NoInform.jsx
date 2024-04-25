import { ReactComponent as Van } from '../../images/campVan.svg';

import { NotFavorits, NotFavoritsText } from './NoInform.styled';

const NoInform = ({text}) => {
 
    return (
        <NotFavorits>
        <Van style={{ width: '200px', height: '200px' }} />
        <NotFavoritsText>{text}</NotFavoritsText>
      </NotFavorits>
    )
};

export default NoInform