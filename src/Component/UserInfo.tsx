export type Info = {
    username: string;
    email: string;
    location: string;
};

const UserInfo = ({ username, email, location }: Info) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>
                <strong>Username:</strong> {username}
            </p>
            <p>
                <strong>User Email:</strong> {email}
            </p>
            <p>
                <strong>User Location:</strong> {location}
            </p>
        </div>
    );
};

export default UserInfo;
           
     