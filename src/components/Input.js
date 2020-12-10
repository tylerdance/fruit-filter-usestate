function Input(props) {
    return(
        <div className="App">
            <label htmlFor="fruit-filter">Filter these fruits: </label>
            <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
        </div>
    )
}

export default Input;



// import React, { Component } from 'react';

// class Input extends Component {
//     constructor(props) {
//         super()
//         this.state = {

//         }
//     }
    

//     render() {
//         return(
//             <div className="App">
//                 <label htmlFor="fruit-filter">Filter these fruits: </label>
//                 <input type="text" value={this.props.value} onChange={this.props.onChange} name="fruit-filter" />
//             </div>
//         )
//     }
// }

// export default Input;