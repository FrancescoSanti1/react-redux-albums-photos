import { useAddPhotoMutation, useGetPhotosQuery } from "../store"
import Button from "./Button";
import Photo from "./Photo";
import Skeleton from "./Skeleton";

export default function Photos({ album }) {

    const [addPhoto, results] = useAddPhotoMutation();

    const { data, error, isFetching } = useGetPhotosQuery(album);

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    let content;
    if (isFetching) {
        content = <Skeleton times={4} className={"h-8 w-8"} />
    } else if (error) {
        content = <div>Error during fetching photos...</div>
    } else {
        content = data.map(photo => <Photo key={photo.id} photo={photo} />)
    }

    return <div>
        <div className="m-2 flex justify-between items-center">
            <h3 className="text-lg font-bold">Photos in {album.title}</h3>
            <Button variation={"primary"} loading={results.isLoading} onClick={handleAddPhoto}>Add photo</Button>
        </div>
        <div className="mx-8 flex flex-wrap justify-start">{content}</div>
    </div>
}