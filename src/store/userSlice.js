import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
});

const initialState = {
    users: [],
    filteredUsers: [],
    status: 'idle',
    error: null,
    searchQuery: '',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
            state.filteredUsers = state.users.filter(
                user =>
                    user.name.toLowerCase().includes(action.payload.toLowerCase()) ||
                    user.email.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        addUser: (state, action) => {
            state.users.unshift(action.payload);
            state.filteredUsers = state.users.filter(user =>
                user.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
                state.filteredUsers = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Failed to fetch users';
            });
    },
});

export const { setSearchQuery, addUser } = usersSlice.actions;
export default usersSlice.reducer;