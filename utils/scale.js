import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const BASE_WIDTH = 375;

const scale = (size) => {
  const factor = width / BASE_WIDTH;
  return size * Math.min(factor, 1.2);
};

export default scale;