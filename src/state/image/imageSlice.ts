import {createSlice} from '@reduxjs/toolkit';

interface Image {
  id: string;
  url: string;
  name: string;
  description: string;
}

export interface ImagesState {
  images: Image[];
  loading: boolean;
}

const initialState: ImagesState = {
  images: [],
  loading: false,
};

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    loadingImages(state) {
      state.loading = true;
    },
    clearImagesSearch(state) {
      state.images = [];
    },
    setImagesSearch(state, {payload}) {
      console.log(payload);
      state.images = payload.data;
    },
  },
});

export const {loadingImages, setImagesSearch} = imageSlice.actions;
export default imageSlice.reducer;
