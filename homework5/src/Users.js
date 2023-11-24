import useAxios from "./useAxios";

const Users = () => {

    const { data: users, loading, error, handleRemove } = useAxios('users');

    if (loading) {
        return <h1>Loading...</h1>
    };

    if (error) {
        return <h1>Error...</h1>
    };

    return (
        <div>
            <h1>User List</h1>
            <div className="users">
                {users.map((user) => (
                    <div className="user" key={user.id}>
                        <h3>Name: {user.firstName}</h3>
                        <h3>Last name: {user.lastName}</h3>
                        <h3>Age: {user.age}</h3>
                        <button>Edit</button>
                        <button onClick={handleRemove}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Users;