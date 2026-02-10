export function SongList(props) {
    return (
        <div>
            <ul>
                <l  >{songArray[0].title} - {songArray[0].artist}</li>
                <li>{songArray[1].title} - {songArray[1].artist}</li>
                <li>{songArray[2].title} - {songArray[2].artist}</li>
            </ul>
        </div>
    );
}