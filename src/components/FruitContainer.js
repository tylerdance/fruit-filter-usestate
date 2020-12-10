import React, { Component, useState } from 'react';
import List from './List'
import Input from './Input'

function FruitContainer(props) {
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits)
    const [filterValue, setFilterValue] = useState('')

    const handleFilterChange = (e) => {
        e.preventDefault()
        const filteredValue = e.target.value
        const filteredFruitList = props.fruits.filter((fruit) => {
            return fruit.toLowerCase().includes(filteredValue.toLowerCase()
            )
        })
        setFruitsToDisplay(filteredFruitList)
        setFilterValue(filteredValue)
    }

    return(
        <div>
            <div>
                <Input value={filterValue} onChange={handleFilterChange}/>
                <List fruits={fruitsToDisplay} />
            </div>
        </div>
    )
}

export default FruitContainer;


// class FruitContainer extends Component {
//     constructor(props) {
//         super()
//         this.state = {
//             // initialize the fruit list to the full list passed into props
//             // initialize filter value to an empty string
//             fruitsToDisplay: props.fruits,
//             filterValue: '',
//         }
//     }
    
//     handleFilterChange = (e) => {
//         e.preventDefault();
//         let filterValue = e.target.value;
//         // remove fruits that dont contain the filter value
//         const filterFruitList = this.props.fruits.filter(fruit => {
//             return fruit.toLowerCase().includes(filterValue.toLowerCase())

//             // if (fruit.toLowerCase() === filterValue.toLowerCase()) {
//             //     return true;
//             // }
//         })

//         this.setState({ 
//             fruitsToDisplay: filterFruitList,
//             filterValue,
//         })
//     }

//     render() {
//         // Inside of Input component, to access props, I will say props.value
//         // Inside of List component, to access props, I will say props.fruits
//         console.log(this.state.fruitsToDisplay);
//         console.log('---');
//         console.log(this.props.fruits);
//         return(
//             <div>
//                 <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
//                 <List fruits={this.state.fruitsToDisplay} />
//             </div>
//         )
//     }
// }

// export default FruitContainer;