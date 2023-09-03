import { useAddPhotoMutation, useGetPhotosQuery } from "../store"
import Button from "./Button";

export default function Photos({ album }) {

    const [addPhoto, results] = useAddPhotoMutation();

    useGetPhotosQuery(album);

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    return <div>
        <div className="m-2 flex justify-between items-center">
            <h3 className="text-lg font-bold">Photos in {album.title}</h3>
            <Button variation={"primary"} loading={results.isLoading} onClick={handleAddPhoto}>Add photo</Button>
        </div>
    </div>
}