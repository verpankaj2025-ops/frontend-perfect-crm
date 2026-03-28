import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

const initialData = {
  new: [
    { id: "1", name: "Rahul Sharma", tag: "New" },
    { id: "2", name: "Amit Singh", tag: "Hot" }
  ],
  contacted: [
    { id: "3", name: "Neha Verma", tag: "Follow-up" }
  ],
  interested: [],
  closed: [],
};

const columns = {
  new: "New Leads",
  contacted: "Contacted",
  interested: "Interested",
  closed: "Closed",
};

export default function LeadsPipeline() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const source = result.source.droppableId;
    const dest = result.destination.droppableId;

    const sourceItems = [...data[source]];
    const [moved] = sourceItems.splice(result.source.index, 1);

    const destItems = [...data[dest]];
    destItems.splice(result.destination.index, 0, moved);

    setData({
      ...data,
      [source]: sourceItems,
      [dest]: destItems,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Leads Pipeline</h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-4 gap-4">
          {Object.keys(columns).map((col) => (
            <Droppable droppableId={col} key={col}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-2xl min-h-[400px]"
                >
                  <div className="flex justify-between mb-4">
                    <h3 className="text-white">{columns[col]}</h3>
                    <span className="text-xs bg-white/10 px-2 rounded">
                      {data[col].length}
                    </span>
                  </div>

                  {data[col].map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white/10 p-3 mb-2 rounded text-white"
                        >
                          {item.name}
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
