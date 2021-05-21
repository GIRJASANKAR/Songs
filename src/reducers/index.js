import {combineReducers} from 'redux';

// as we knoew it is a static array so we don't have to give any data 
 const songsReducer=()=>{
    return[
        {title:'good_4_u',duration:'3:20'},
        {title:'Levitating',duration:'4:20'},
        {title:'Save your tears',duration:'2:20'},
        {title:'Astronaut In The Ocean',duration:'4:20'}
        
    ];
};



const selectedSongReducer=(selectedSong=null, action)=>{

if(action.type==='SONG_SELECTED'){
    return action.payload;
}
   return selectedSong;
};




 export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})