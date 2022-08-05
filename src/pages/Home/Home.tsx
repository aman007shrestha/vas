import HomeRight from '../../components/HomeComponents/Right';
import HomeLeft from '../../components/HomeComponents/Left';
import { Wrapper } from './Home.styles';

/**
 *
 * @returns View Divided into Left and right
 * @LEFT Either Platform Info Or Statistics
 * @RIGHT Either Login/Register Form or User Info
 */
export const Home = () => {
  return (
    <Wrapper>
      <HomeLeft />
      <HomeRight />
    </Wrapper>
  );
};
