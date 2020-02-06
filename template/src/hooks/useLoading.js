import {useSelector} from 'react-redux';
import * as selectors from '../redux/selectors';

export const useLoadingEffect = name => {
  return useSelector(selectors.getLoadingEffect(name));
};

export const useLoadingModel = name => {
  return useSelector(selectors.getLoadingModel(name));
};
