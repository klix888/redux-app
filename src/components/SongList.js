import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectedSong from '../actions';

class SongList extends Component {
    render() {
        return (
                <div className='container left-con'>
                    <h2>SongList</h2>
                    {this.props.songs.map(song => (
                        <div className='item' key={song.title}>
                            <div className='left'>{song.title}</div>
                            <div className='right'>
                                <button 
                                className='btn btn-primary btn-sm'
                                onClick={() => this.props.selectedSong(song)}
                                >Select
                                 </button>
                            </div>
                        </div>
                    ))}
                    
                </div>
        );
    }
}

const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectedSong })(SongList);