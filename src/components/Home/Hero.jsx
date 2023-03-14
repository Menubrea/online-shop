import Image from 'mui-image';
import hero from '../../assets/hero.png';

export default function Hero() {
  return (
    <>
      <Image src={hero} height='fit-content' maxHeight={500} fit='contain' title='page-hero' duration={1000} />
    </>
  );
}
