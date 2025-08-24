export type Admin = {
    adminName: string;
    adminEmail: string;
    location: string;
    admin: string;
};

const AdminInfo = ({ adminName, adminEmail, location, admin }: Admin) => {
    return (
        <div>
            <p>Admin Name: {adminName}</p>
            <p>Admin Email: {adminEmail}</p>
            <p>Admin Location: {location}</p>
            <p>Admin Status: {admin}</p>
        </div>
    );
};

export default AdminInfo;