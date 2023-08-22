import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

export default function Users() {

    const dispatch = useDispatch();

    const { data, loading, error } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (loading) {
        return <Skeleton times={6} className={"h-10 w-full"} />
    }
    if (error) {
        return <div>Error during data fetching...</div>
    }

    return <div>
        {data.length}
    </div>
}