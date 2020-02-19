const defaultState = {
    btnActive: false,
};

const calcReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const { id, date, money, category } = action.payload;
            const newlist = {
                id,
                date,
                money,
                category,
            }
            return  {  
                ...state,
               newlist
            };
        default: 
            return state;
    }
}

export default calcReducer;

