import { configureStore } from '@reduxjs/toolkit';
import { lawyerReducer } from './reducers/LawyerReducer';
import { firmReducer } from './reducers/FirmReducer';

export const store = configureStore({
    reducer: {
        lawyers: lawyerReducer,
        firms: firmReducer,
    },
});


