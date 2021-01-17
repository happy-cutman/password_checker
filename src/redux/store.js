import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form_reducer';

export default configureStore({
    reducer: {
        form: formReducer,
    },
});