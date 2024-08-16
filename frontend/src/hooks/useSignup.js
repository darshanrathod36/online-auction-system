import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import validator from 'validator'; // Import the validator library

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, userName, password, confirmPassword, phone, address, gender }) => {
        const success = handleInputError({ fullName, userName, password, confirmPassword, phone, address, gender });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName, userName, password, confirmPassword, phone, address, gender })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            console.log(data);
            toast.success('Signup successful');

            // Store user data in local storage
            localStorage.setItem('chat-user', JSON.stringify(data));
            // Store user data in auth context
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputError({ fullName, userName, password, confirmPassword, phone, address, gender }) {
     if (!fullName || !userName || !password || !confirmPassword || !phone || !address || !gender) {
        toast.error('Please fill in all fields');
        return false;
    }
    
    if (!validator.isEmail(userName)) {
        toast.error('Invalid email format');
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        toast.error('Phone number must contain exactly 10 digits');
        return false;
    }

     if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return false;
    }
   
   
 
    return true;
}
