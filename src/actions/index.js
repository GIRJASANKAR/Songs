// Action creator
export const selectSong=(song)=>{
    // return an action i.e, a plain javascript function.
return{
    type:'SONG_SELECTED',
    payload:song
}



}