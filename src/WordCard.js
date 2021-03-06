import React, {useState} from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
 }
}
export default function WordCard(props){
    
    const [state, setState] = useState(prepareStateFromWord(props.value));
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({...state, guess})
        if(guess.length === state.word.length){
            console.log(`${guess}`)
            console.log(`${state.word}`)
            if(guess.toUpperCase() === state.word){
            console.log('yeah!')
            setState({...state, guess: '', completed: true})
        }else{
            console.log('reset')
            setState({...state, guess: '', attempt: state.attempt + 1})
        }
    }
    }
 return (
 <div className="Cardbox">

    <div className="cardlist">
{ Array.from(state.chars).map((c, i) => <CharacterCard attempt={state.attempt} value={c} key={i} activationHandler={activationHandler}/>
) } </div> 
        <div className="count">
        Attempt: {state.attempt}
     </div>
     <div className="win">
     {state.completed===true? "YouWin":""}
     </div>
 </div>
 );
}
