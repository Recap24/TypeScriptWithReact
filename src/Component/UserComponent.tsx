import { useState } from 'react';

interface UserProfileState {
    name: string;
    email: string;
    age: number;
}

const UserComponent = () => {
    const [profile, setProfile] = useState<UserProfileState>({
        name : "",
        email: "",
        age: 0
    });
const nameUpdate = (name:string) =>{
        setProfile((prevProfile) => ({ ...prevProfile, name }));
    };
const emailUpdate = (email:string) =>{
        setProfile((prevProfile) => ({ ...prevProfile, email }));
    };
const ageUpdate = (age:number) =>{
        setProfile((prevProfile) => ({ ...prevProfile, age }));
    };

    return (
      <div>
        <h2>User Profile</h2>
        <input
          type="text"
          placeholder="Name"
          value={profile.name}
          onChange={(e) => nameUpdate(e.target.value)}
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={profile.email}
          onChange={(e) => emailUpdate(e.target.value)}
        />
        <br />
        <br />

        <input
          type="number"
          placeholder="Age"
          value={profile.age > 0 ? profile.age : ""}
          onChange={(e) => ageUpdate(Number(e.target.value))}
        />
        <br />
        <br />
        <button onClick={() => setProfile({ name: "", email: "", age: 0 })}>
          Reset
        </button>
        <h3>User Details</h3>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Age: {profile.age > 0 ? profile.age : "N/A"}</p>
      </div>
    );
};

export default UserComponent;