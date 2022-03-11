import { getAverageColor } from '../../../node_modules/fast-average-color';

getAverageColor('./1078157.jpg').then(color => {
  console.log(color);
});