export function SongList(props) {

    const songArray = [
        { artist: "The Who", title: "Won't Get Fooled Again", youtubeUrl: "https://www.youtube.com/watch?v=UDfAdHBtK_Q" },
        {
            artist: "Rush", title: "Tom Sawyer", youtubeUrl: "https://www.youtube.com/watch?v=QJ4-9tAf9UQ&list=PL26lD4FG8zwzpWUdgM9E0vYXDnLmSLj3m"
        },
        {
            artist: "The Police", title: "Spirits In the Material World", youtubeUrl: "https://www.youtube.com/watch?v=BHOevX4DlGk"
        }
    ];
    return (
        <div>
            <ul>
                <li >{songArray[0].title} - {songArray[0].artist}</li>
                <li>{songArray[1].title} - {songArray[1].artist}</li>
                <li>{songArray[2].title} - {songArray[2].artist}</li>
            </ul>
        </div>
    );
}