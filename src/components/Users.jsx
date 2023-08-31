import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

export default function Users() {

    const [loadingUsers, setLoadingUsers] = useState(false);
    const [loadingError, setLoadingError] = useState(null);
    const [creatingUsers, setCreatingUsers] = useState(false);
    const [creatingError, setCreatingError] = useState(null);

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.users);

    useEffect(() => {
        setLoadingUsers(true);
        dispatch(fetchUsers())
            .unwrap()
            .catch((err) => setLoadingError(err))
            .finally(() => setLoadingUsers(false));
    }, []);

    const handleUserAdd = () => {
        setCreatingUsers(true);
        dispatch(addUser())
            .unwrap()
            .catch((err) => setCreatingError(err))
            .finally(() => setCreatingUsers(false));
    };

    if (loadingUsers) {
        return <Skeleton times={6} className={"h-10 w-full"} />
    }
    if (loadingError) {
        return <div>Error during data fetching...</div>
    }

    const users = data.map(user => {
        return <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                {user.name}
            </div>
        </div>
    });

    return <div>
        <div className="flex justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button variation={"primary"} onClick={handleUserAdd}>Add user</Button>
            {creatingUsers && <div>Adding a user...</div>}
            {creatingError && <div>Something went wrong!</div>}
        </div>
        {users}
    </div>
}