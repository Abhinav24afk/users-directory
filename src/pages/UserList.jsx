import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/userSlice.js';
import { UserCard } from '../components/UserCard';
import { SearchBar } from '../components/SearchBar';
import { AddUserForm } from '../components/AddUserForm';
import { AlertCircle, UserPlus } from 'lucide-react';

const UserList = () => {
    const dispatch = useDispatch();
    const { filteredUsers, status, error } = useSelector((state) => state.users);
    const [isAddUserOpen, setIsAddUserOpen] = useState(false);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-red-50 p-4 rounded-md flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                    <span className="text-red-700">{error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">User Directory</h1>
                <button
                    onClick={() => setIsAddUserOpen(true)}
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    <UserPlus className="w-5 h-5 mr-2" />
                    Add User
                </button>
            </div>

            <SearchBar />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>

            {isAddUserOpen && <AddUserForm onClose={() => setIsAddUserOpen(false)} />}
        </div>
    );
};

export default UserList



