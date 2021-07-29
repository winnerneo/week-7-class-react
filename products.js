import React, { useState }from 'react';

export default function products(props) {
    return (
        <div>
            <p>{props.count }</p>
            <button onclick ={props.handleclick}>click</button>
        </div>
    );
}
