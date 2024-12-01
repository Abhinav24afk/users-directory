import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowLeft, Mail, Phone, Globe, Building2, MapPin } from 'lucide-react';

const UserDetail = () => {
    const { id } = useParams();
    const user = useSelector((state) =>
        state.users.users.find(u => u.id === Number(id))
    );

    if (!user) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">User not found</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Users
            </Link>

            <div className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{user.name}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                        <div className="flex items-center text-gray-600">
                            <Mail className="w-5 h-5 mr-3" />
                            <span>{user.email}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Phone className="w-5 h-5 mr-3" />
                            <span>{user.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Globe className="w-5 h-5 mr-3" />
                            <span>{user.website}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Company Details</h2>
                        <div className="flex items-start text-gray-600">
                            <Building2 className="w-5 h-5 mr-3 mt-1" />
                            <div>
                                <p className="font-medium">{user.company.name}</p>
                                <p className="text-sm">{user.company.catchPhrase}</p>
                                <p className="text-sm">{user.company.bs}</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Address</h2>
                        <div className="flex items-start text-gray-600">
                            <MapPin className="w-5 h-5 mr-3 mt-1" />
                            <div>
                                <p>{user.address.street}, {user.address.suite}</p>
                                <p>{user.address.city}, {user.address.zipcode}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail