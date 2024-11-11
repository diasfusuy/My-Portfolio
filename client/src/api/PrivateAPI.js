import axios from 'axios';

export async function privateApiExample(token) {
    const url = '/api/private';
    if (!token) {
        throw new Error('toekn is required for protected API route: ' + token);
    }
    return axios.get(url, {
        headers: { Authorization: 'Bearer ' + token },
    });
}

const protectedAPI = {
    privateApiExample,
};

export default protectedAPI;