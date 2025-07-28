import { createSlice } from '@reduxjs/toolkit';
import profileData from '../../data/profileData';
import { Profile } from '../../types/profile';

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileData as Profile,
  reducers: {}, // Future: can add actions like updateProfile, addProject
});

export default profileSlice.reducer;
