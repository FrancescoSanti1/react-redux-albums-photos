export default function Photo({ photo }) {

    return <div>
        <img src={photo.url} alt="Random photo" className="h-20 w-20" />
    </div>
}