import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = ({images}) => {

  return (
    <Carousel width="290px" showThumbs={false} infiniteLoop={true} >
     {images && images.map((item ,idx) => <img key={idx} src={item} alt={item} />)}
    </Carousel>
  );
};

export default Slider
