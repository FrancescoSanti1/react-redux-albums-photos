import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export default function useThunk(thunk) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback((arg) => {
        setLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
    }, [dispatch, thunk]);

    return [runThunk, loading, error];
}