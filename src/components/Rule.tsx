import React from 'react'

const Rule = () => {
    return (
        <div>
            <p>There will be as many cards as it is from 3 to 35, with 9 of them randomly taken off the pile.</p>
            <p>Each turn, the player can choose to not take the card and put 1 token(&#11088;) on that card, or take the card with every token that is currently on it. You start with 11 tokens</p>
            <p>At the end of the game, count the point by adding the values of your deck together, minus the number of token(&#11088;) you have.</p>
            <p>The player with least point wins.</p>
            <p>Important: If there are consecutives number, only the lowest number of them will be counted towards the total point.</p>
            <p>Number of players: 3-7</p>
        </div>
    )
}

export default Rule
