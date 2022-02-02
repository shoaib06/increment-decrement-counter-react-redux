const initialState = 0;

const changeTheNumber = (state = initialState,actions)=>{
    switch(actions.type) {
        case "INCREMENT" : return state+actions.payload;
        case "DECREMENT" : return state-1;
        default : return state;
    }
}

export default changeTheNumber;