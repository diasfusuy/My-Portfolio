import { LogoutButton } from './Login';
import { useAuth } from '../context/AuthProvider';

function ProfileRow({ label, value }) {
    return (
        <div>
            <label>{label}</label>
            <input type='text' value={value}/>
        </div>
    );
};

function Profile() {
    const { user, logout } = useAuth();
    console.log('=== debug: user: ', user);
    return (
        <div>
            <h1>Your Profile</h1>
            <p>Private route. Only visible if you are logged in.</p>
            <div>
                <ProfileRow label='Name' value={user.name} />
                <ProfileRow label='Email' value={user.email} />
                <ProfileRow label='Role' value={user.role} />
                <span>
                    <LogoutButton onClick={logout} />
                </span>
            </div>
        </div>
    );
};

export default Profile;