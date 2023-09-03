import { useAddAlbumMutation, useGetAlbumsQuery } from "../store"
import Skeleton from "./Skeleton";
import Button from "./Button";
import Album from "./Album";

export default function Albums({ user }) {

    const { data, isFetching, error } = useGetAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    let content;
    if (isFetching) {
        content = <Skeleton times={3} className={"h-10 w-full"}></Skeleton>
    } else if (error) {
        content = <div>Error during loading albums...</div>
    } else {
        content = data.map(album => <Album key={album.id} album={album} />);
    }

    const handleClick = () => {
        addAlbum(user);
    }

    return <div>
        <div className="m-2 flex justify-between items-center">
            <h3 className="text-lg font-bold">Albums of {user.name}</h3>
            <Button loading={results.isLoading} variation={"primary"} onClick={handleClick}>Add album</Button>
        </div>
        <div>{content}</div>
    </div>
}