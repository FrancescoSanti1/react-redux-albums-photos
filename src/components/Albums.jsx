import { useGetAlbumsQuery } from "../store"
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";

export default function Albums({ user }) {

    const { data, isLoading, error } = useGetAlbumsQuery(user);

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

    return <div>
        <div>Albums by {user.name}</div>
        <div>{content}</div>
    </div>
}