import {createSelector} from 'reselect';

export const getLoading = state => {
  return state.loading || {};
};

export const getLoadingModel = name => {
  return createSelector(getLoading, ({models}) => {
    return models[name] || false;
  });
};

export const getLoadingEffect = name => {
  return createSelector(getLoading, ({effects}) => {
    return effects[name] || false;
  });
};
