import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTool: 'calorie',
  bmiResult: null,
  calorieResult: null,
  waterResult: null,
  activeModal: null,
};

const fitnessToolsSlice = createSlice({
  name: 'fitnessTools',
  initialState,
  reducers: {
    setActiveTool: (state, action) => {
      state.activeTool = action.payload;
    },
    openToolModal: (state, action) => {
      state.activeModal = action.payload;
    },
    closeToolModal: (state) => {
      state.activeModal = null;
    },
    calculateBmi: (state, action) => {
      const { heightCm, weightKg } = action.payload;
      const h = parseFloat(heightCm) / 100;
      const w = parseFloat(weightKg);
      if (h > 0 && w > 0 && h < 3 && w < 500) {
        const score = (w / (h * h)).toFixed(1);
        let category = 'Normal weight';
        if (score < 18.5) category = 'Underweight';
        else if (score >= 25 && score < 29.9) category = 'Overweight';
        else if (score >= 30) category = 'Obesity';
        
        state.bmiResult = { score, category };
      }
    },
  },
});

export const { setActiveTool, openToolModal, closeToolModal, calculateBmi } = fitnessToolsSlice.actions;
export default fitnessToolsSlice.reducer;
