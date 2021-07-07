import React, { useReducer } from 'react';

import Box from './Box';
 
const initialState = {
    color: {
        value: '',
        error: null
    },
    boxes: []
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    }
};
 
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e, error) {
        const {name, value} = e.target
        dispatch({
            type: name,
            payload: {value, error}
        });
    }

    const handleColor = (e) => {
        let error=null;
        if(e.target.value.length>0 && e.target.value.length<3){
            error = '*color must be at least three characters';
        }
        handleChange(e, error);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(state.color.error==null && state.color.value.length>0){
            const backgroundColor=state.color.value;
            const boxList=state.boxes;
            boxList.push(backgroundColor);
            dispatch({
                type: 'boxes',
                payload: boxList
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* {JSON.stringify(state)} */}
            <div>
                <label>Color:</label>
                <input
                    type="text"
                    name="color"
                    value={state.color.value}
                    onChange={handleColor}
                />
                {
                    state.color.error ?
                    <p style={{color:'red'}}>{state.color.error}</p>:
                    ''
                }
            </div>
            <input
                type='submit'
                value='Create'
            />
            <div>
                {
                    state.boxes.map((backgroundColor) => {
                        return <Box backgroundColor={backgroundColor}/>
                    })
                }
            </div>
        </form>
    );
}