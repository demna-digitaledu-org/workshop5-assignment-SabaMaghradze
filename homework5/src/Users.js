import useAxios from "./useAxios";
import axios from "axios";

const Users = () => {

    const { data: users, setData, loading, error } = useAxios('users');

    if (loading) {
        return <h1>Loading...</h1>
    };

    if (error) {
        return <h1>Error...</h1>
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/users/${id}`);
            const response = await axios.get(`http://localhost:3001/users`);
            setData(response.data);
        } catch (error) {
            console.log(`Error: ${error}`);
        };
    };

    return (
        <div>
            <h1>User List</h1>
            <div className="users">
                {users.map((user) => (
                    <div className="user" key={user._id}>
                        <h3>Name: {user.firstName}</h3>
                        <h3>Last name: {user.lastName}</h3>
                        <h3>Age: {user.age}</h3>
                        <button>Edit</button>
                        <button onClick={() => deleteUser(user._id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;