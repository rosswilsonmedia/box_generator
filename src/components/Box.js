import React from 'react';

const Box = props => {
    return(
        <div style={{
            height:'200px',
            width:'200px',
            borderRadius: '5px',
            marginBottom: '1em',
            backgroundColor:props.backgroundColor
        }}></div>
    )
}

export default Box;