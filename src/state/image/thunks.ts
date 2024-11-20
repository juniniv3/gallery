import {Dispatch} from 'redux';
import {loadingImages, setImagesSearch} from './imageSlice';
import {loadImages} from '../../Firebase/useCases';

export const startNewImage = () => {
  return async (dispatch: Dispatch) => {
    const newImage = {
      name: 'New Image',
      description: 'Description',
      Date: new Date().toISOString(),
    };

    dispatch({type: 'image/new', payload: newImage});
  };
};

export const startLoadingImages = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingImages());
    const imagesQueryResponse = await loadImages();
    dispatch(setImagesSearch(imagesQueryResponse));
  };
};
