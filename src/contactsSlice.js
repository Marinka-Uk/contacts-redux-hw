import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        
        const exists = state.some(
          c => c.name.trim().toLowerCase() === action.payload.name.trim().toLowerCase()
        );
        if (!exists) state.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    removeContact(state, action) {
      const id = action.payload;
      return state.filter(c => c.id !== id);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
