import ExpandablePanel from "./ExpandablePanel"

export default function Album({ album }) {
    const header = <div>{album.title}</div>

    return <ExpandablePanel key={album.id} header={header}>
        Photos here...
    </ExpandablePanel>
}