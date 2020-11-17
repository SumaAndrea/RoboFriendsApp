import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{ overflowY: 'scroll', 
                      border:'3px solid rgb(135, 73, 28)',
                      height:'500px',
                      background: 'linear-gradient(to left, rgb(235, 176, 15), rgb(251, 96, 96))' }}>
            {props.children}
        </div>
    );
};

export default Scroll;