// First Product Reducer

const FirstInitialState={
    Products:[]
}
export const GetDataReducer = (state=FirstInitialState, action) =>{
      switch(action.type){
        case "GET_DATA": return {...state, Products:action.payload};
        default: return state;
      }
} 




// Second ProductReducer
const MemberListInitialState={
  MemberData:[]
}

export const MemberDataReducer = (state=MemberListInitialState, action) =>{
  
    switch(action.type){
        case "MEMBER_DATA": return {...state, MemberData:action.payload};
        default: return state;
    }
};


// Reducer for Recognise page

const ReInitialState={
  Recog_Data:[]
}
export const RecogReducer=(state=ReInitialState, action)=>{
  switch(action.type){
     case"RECOG_DATA": return{...state, Recog_Data:action.payload};
     default: return state;
  };
};


// Reducer for GrandLodge Data

const GrInitialState={
    GrandLodgeProduct:[],
  
}

export const GrandLodgeReducer=(state=GrInitialState, action)=>{
  
   switch(action.type){
     
      case "GRAND_LODGE_DATA":return{...state, GrandLodgeProduct:action.payload};
      
      default: return state; 
   };
};


