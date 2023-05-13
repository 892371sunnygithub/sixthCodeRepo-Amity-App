// Action for fake Api

export const FirstProductAction = (Products) =>{
    return{
        type:"GET_DATA",
        payload:Products,
    }
};


// Action for Real Api

export const MemberListAction= (MemberData) =>{
   
    return{
        type:"MEMBER_DATA",
        payload:MemberData,
    }
};


// Action For Get ChildData

export const RecogniseAction=(Payload)=>{
    return{
       type:"RECOG_DATA",
       payload:Payload,
    };
};

// Action for GrandLodge Data

export const GrandLodgeAction=(Product)=>{
    return{
        type:"GRAND_LODGE_DATA",
        payload:Product,
    };
};












