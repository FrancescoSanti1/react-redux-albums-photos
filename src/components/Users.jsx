import { useEffect } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

export default function Users() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <div>
        <Button variation={"primary"}>Prova</Button>
    </div>
}