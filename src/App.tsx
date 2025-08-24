
import AdminInfo from "./Component/AdminInfo";
import type { AdminInfoList, Info } from "./Component/Type";
import UserInfo from "./Component/UserInfo";
const App = () => {
    const user: Info = {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    };
const admin: AdminInfoList = {
    id: 1,
    name: "Admin John Smith",
    email: "johnsmith@example.com",
    role: "Admin",
    lastLogin: new Date(),
};

    return (
      <div>
        {/* <ButtonComponent label="Click" onClick={() => console.log("clicked")} disabled={false} /> */}
        <AdminInfo  admin={admin} />
        <UserInfo user={user} />
      </div>
    );
};

export default App;