import { useAddAlbumMutation, useGetAlbumsQuery } from "../store"
import Skeleton from "./Skeleton";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

export default function Albums({ user }) {

    const { data, isLoading, error } = useGetAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    let content;
    if (isLoading) {
        content = <Skeleton times={3}></Skeleton>
    } else if (error) {
        content = <div>Error during loading albums...</div>
    } else {
        content = data.map(album => {
            const header = <div>{album.title}</div>
            return <ExpandablePanel key={album.id} header={header}>
                Photos here...
            </ExpandablePanel>
        })
    }

    const handleClick = () => {
        addAlbum(user);
    }

    return <div>
        <div>
            Albums by {user.name}
            <Button variation={"primary"} onClick={handleClick}>Add album</Button>
        </div>
        <div>{content}</div>
    </div>
}