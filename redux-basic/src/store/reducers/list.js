import { SAVE } from "../actions";

const initialState = {
    values: []
};

const reducer = (state =  initialState, action)=>{
    const{ values } = state;
    const{ type, payload} = action;

    switch(type){
      case SAVE:
            return{
                ...state,
                values: [
                ...values,
                {
                    num: payload.value,
                    key: new Date().toISOString(),
                },
            ],
                
            };
            default:
            return state;
    }
};

export default reducer;