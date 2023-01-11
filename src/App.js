
import './App.css';
//order li me7tejtou drag and drop
import {
  DndContext,
  closestCenter
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { useState } from 'react';
import { SortableItem } from './SortableItem';

function App() {
  const [languages, setLanguages] = useState(['javascript','python','Typescript'])
  return (
    <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    >
    <h3 className='App'>The best programming languages</h3>
    <SortableContext 
    items={languages}
    strategy={verticalListSortingStrategy}
    >
      {/* component use the userSortable hook */}
      {languages.map(language => <SortableItem key={language} id={language}/>)}
    </SortableContext>
    </DndContext>
  );
  function handleDragEnd(event){
    console.log("Drag end called")
    const {active, over} = event;
    console.log("Active: " +active.id)
    console.log("Over: "+over.id)

    if(active.id !== over.id)
    {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex))
        return arrayMove(items, activeIndex, overIndex)
      });
    }
  }
}

export default App;
