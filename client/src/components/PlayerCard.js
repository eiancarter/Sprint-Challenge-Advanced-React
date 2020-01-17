import React from 'react';

const PlayerCard = props => {
    return (
        <div className='follower-container'>
            <form className='search'>
                <input 
                    type='text'
                    placeholder='search followers...'
                />
                <button>Submit</button>
            </form>
            {/* <GitCard followers={this.state.followers} /> */}
             {props.players.map(player => (
                <div className='git-cards' key={player.id}>
                    <h2>{player.name}</h2>
                    <h3>{player.country}</h3>
                    <h3>{player.searches}</h3>
                </div>
            ))}
        </div>
    )
}

export default PlayerCard;