import { useAddUserMutation, useGetUsersQuery } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import User from "./User";

export default function Users() {

    const { data, isFetching, error } = useGetUsersQuery();
    const [addUser, results] = useAddUserMutation();

    const handleUserAdd = () => {
        addUser();
    };

    let content;
    if (isFetching) {
        content = <Skeleton times={6} className={"h-10 w-full"} />;
    } else if (error) {
        content = <div>Error during data fetching...</div>;
    } else {
        content = data.map(user => <User key={user.id} user={user} />);
    }

    return <div>
        <div className="flex justify-between items-center m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button loading={results.isLoading} variation={"primary"} onClick={handleUserAdd}>Add user</Button>
        </div>
        {content}
    </div>
}