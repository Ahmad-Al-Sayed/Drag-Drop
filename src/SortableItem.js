import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


import React from 'react'

export function SortableItem(props) {
  //props.id
  //javascript

  const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
  } = useSortable({id:props.id})

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  return (
    <div className="w3-panel w3-card" ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <p className="App">{props.id}</p>
    </div>
  )
}
