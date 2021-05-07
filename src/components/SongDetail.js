import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) return <div>Please select song</div>
    return(
        <div id='right-con' className='container'>
            <h2>Detail for:</h2>
            <p><span>Title: </span>{song.title}</p>
            <p><span>Duration: </span>{song.duration}</p>
        </div>
    );
}

const mapStateToProps = state => {
    return { song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);