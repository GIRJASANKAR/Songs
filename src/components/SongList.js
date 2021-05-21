import React, { Component } from 'react';
import {connect } from 'react-redux';
import {selectSong} from '../actions'

// import SongDetail from './SongDetail'

class SongList extends Component {
  renderlist=()=>{
      return this.props.songs.map((song)=>{
          return (
                <div className="item" key={song.title}>
             <div className="right floated content">
       <button className="ui button pprimary" onClick={()=>{this.props.selectSong(song)}}>
           Select
       </button>
             </div>
             <div className="content">
           {song.title}
             </div>
                </div>
          );
      })
  }


    render(){
        
        return( <div className="ui divided list"> 
             {this.renderlist()}
             </div>
        );
    }
}


const mapStateToProp=(state)=>{
   
    return {songs:state.songs};
}

export default connect(mapStateToProp,{selectSong})(SongList);