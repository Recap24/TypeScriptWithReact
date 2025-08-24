import type { AdminInfoList } from "./Type";
type AdminInfoProps = {
    admin: AdminInfoList;
};

const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
    return (
        <div>
            <h2>Admin Information</h2>
            <p>ID: {admin.id}</p>
            <p>Name: {admin.name}</p>
            <p>Email: {admin.email}</p>
            <p>Role: {admin.role}</p>
            <p>Last Login: {admin.lastLogin.toString()}</p>
        </div>
    );
};
export default AdminInfo;
