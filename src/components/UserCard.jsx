import React from 'react';
import { Mail, Phone, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UserCard = ({ user }) => {
    return (
        <Link to={`/user/${user.id}`}>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{user.name}</h2>
                <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                        <Mail className="w-5 h-5 mr-2" />
                        <span>{user.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Phone className="w-5 h-5 mr-2" />
                        <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Building2 className="w-5 h-5 mr-2" />
                        <span>{user.company.name}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};