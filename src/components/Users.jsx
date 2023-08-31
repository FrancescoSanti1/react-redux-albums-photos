import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/useThunk";

export default function Users() {

    const [runFetchUsers, loadingUsers, loadingError] = useThunk(fetchUsers);
    const [runAddUser, creatingUser, creatingError] = useThunk(addUser);

    const { data } = useSelector(state => state.users);

    useEffect(() => {
        runFetchUsers();
    }, []);

    const handleUserAdd = () => {
        runAddUser();
    };

    let content;
    if (loadingUsers) {
        content = <Skeleton times={6} className={"h-10 w-full"} />;
    } else if (loadingError) {
        content = <div>Error during data fetching...</div>;
    } else {
        content = data.map(user => {
            return <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        });
    }

    return <div>
        <div className="flex justify-between items-center m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button loading={creatingUser} variation={"primary"} onClick={handleUserAdd}>Add user</Button>
        </div>
        {content}
    </div>
}