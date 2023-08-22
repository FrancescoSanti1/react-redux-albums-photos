import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

export default function Users() {

    const dispatch = useDispatch();

    const { data, loading, error } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleUserAdd = () => {
        dispatch(addUser());
    };

    if (loading) {
        return <Skeleton times={6} className={"h-10 w-full"} />
    }
    if (error) {
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
        </div>
        {users}
    </div>
}