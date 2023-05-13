import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const TestDrag = () => {
    const data=[
        {
            name:'one',
            id:'1',
        },
        {
            name:'two',
            id:'2',
        },
        {
            name:'three',
            id:'3',
        },
        {
            name:'four',
            id:'4',
        },

        {
            name:'five',
            id:'5',
        }
    ]
    const[list, setList]= useState(data);
    
    
const reorder=(list,startIndex,endIndex)=>{
    const result=Array.from(list);
    const[removed]=result.splice(startIndex,1);
    result.splice(endIndex,0,removed);
 
    return result;
 }
    const onEnd=(result)=>{
        if(!result.destination){
            return;
         } 
           const reorderedItems=reorder(list, result.source.index, result.destination.index);
        //    console.log(reorderedItems);
           setList(reorderedItems);
        
    }
  return (
    
    <DragDropContext onDragEnd={onEnd}>
        <Droppable droppableId="12345678">
           {
            (provided,snapshot)=>(
                <div ref={provided.innerRef} {...provided.droppableProps} >
                  {
                    list.map((item, index)=>(
                        <Draggable
                        draggableId={item.id.toString()}
                        key={item.id}
                        index={index}
                        >
                           {
                            (provided, snapshot)=>(
                                <div 
                                
                                
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                
                                ref={provided.innerRef}
                                >
                                <div className=''>
                                <div className="bg-info mt-2 p-2">
                                  {item.name}
                                  </div>
                                  </div>  
                                </div>
                            )
                           }
                        </Draggable>
                    ))
                  }
                  {provided.placeholder}
                </div>
            )
           }
        </Droppable>
    </DragDropContext>
  )
}

export default TestDrag