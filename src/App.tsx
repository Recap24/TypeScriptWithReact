import AdminInfo from "./Component/AdminInfo";
import UserInfo from "./Component/UserInfo";


const App = () => {
    
    return (
      <div>
        <h1>User Component</h1>
        <UserInfo username="JohnDoe" email="john.doe@example.com" location="USA" />
        <h1>Admin Component</h1>
        <AdminInfo adminName="AdminUser" adminEmail="admin@example.com" location="USA" admin="Yes"/>
      </div>
    );
};

export default App;