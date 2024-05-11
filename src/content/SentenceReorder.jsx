import React, { useState } from "react";
import {
  DndContext,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
  useSortable,
  sortableKeyboardCoordinates,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./SentenceReorder.css";
import { useNavigate } from "react-router-dom";

const DraggableWord = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    margin: 5,
    padding: 30,
    border: "1px solid gray",
    borderRadius: "10px",
    cursor: "grab",
    background: "white",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {id}
    </div>
  );
};

const SentenceReorder = () => {
  const reorderedWords = [
    {
      id: 1,
      initialWords: ["ខ្ញុំ  khnom", "ទេវី  Tevy", "ឈ្មោះ  chamous", "ថា  tha"],
      correctOrder: ["ខ្ញុំ  khnom", "ឈ្មោះ  chamous", "ថា  tha", "ទេវី  Tevy"],
      englishWords: "My name is Tevy.",
    },
    {
      id: 2,
      initialWords: [
        "អ្នក nak",
        "អ្វី avey",
        "តើ Ter",
        "ឈ្មោះ chmus",
        "មាន man",
      ],
      correctOrder: [
        "តើ Ter",
        "អ្នក nak",
        "មាន man",
        "ឈ្មោះ chmus",
        "អ្វី avey",
      ],
      englishWords: "What is your name?",
    },
    {
      id: 3,
      initialWords: ["សុខ sok", "ទេ te", "អ្នក nak", "សប្បាយ sabay", "តើ Ter"],
      correctOrder: ["តើ Ter", "អ្នក nak", "សុខ sok", "សប្បាយ sabay", "ទេ te"],
      englishWords: "How are you doing?",
    },
    {
      id: 4,
      initialWords: [
        "មក mok",
        "ពី pi",
        "អ្នក nak",
        "ប្រទេស protes",
        "តើ Ter",
        "ណា na",
      ],
      correctOrder: [
        "តើ Ter",
        "អ្នក nak",
        "មក mok",
        "ពី pi",
        "ប្រទេស protes",
        "ណា na",
      ],
      englishWords: "How are you doing?",
    },
    {
      id: 5,
      initialWords: [
        "សប្បាយ sabay",
        "ទេ te",
        "សុខ sok",
        "ជា jea",
        "ធម្មតា thomada",
        "ខ្ញុំ Khnom",
      ],
      correctOrder: [
        "ខ្ញុំ Khnom",
        "សុខ sok",
        "សប្បាយ sabay",
        "ជា jea",
        "ធម្មតា thomada",
        "ទេ te",
      ],
      englishWords: "How are you doing?",
    },
  ];
  const firstWord = reorderedWords[0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState(reorderedWords[currentIndex].initialWords);
  const [correctOrder, setCorrectOrder] = useState(
    reorderedWords[currentIndex].correctOrder
  );
  const [isComplete, setIsComplete] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setWords((currentWords) => {
        const oldIndex = currentWords.indexOf(active.id);
        const newIndex = currentWords.indexOf(over.id);
        return arrayMove(currentWords, oldIndex, newIndex);
      });
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < reorderedWords.length) {
      setCurrentIndex(nextIndex);
      setWords(reorderedWords[nextIndex].initialWords);
      setCorrectOrder(reorderedWords[nextIndex].correctOrder);
    } else {
      setIsComplete(true);
    }
  };
  const checkOrder = () => {
    if (JSON.stringify(words) === JSON.stringify(correctOrder)) {
      alert("Correct! Well done!");
    } else {
      alert("Incorrect, try again!");
    }
  };

  const Navigate = useNavigate();

  if (isComplete) {
    return (
      <div className="congratulations">
        <button onClick={() => Navigate("/unit-1")} className="button-8">
          Back to Lessons
        </button>
      </div>
    );
  }

  return (
    <div
      className="sentence-reorder-main"
      style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
    >
      <h1>Reorder the Sentence</h1>

      <div className="prompt-reorder"></div>
      <div className="each-sentence-reordered">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          {/* <div className="each-word-reorderd"> */}
          <SortableContext
            items={words}
            strategy={horizontalListSortingStrategy}
          >
            {words.map((word) => (
              <DraggableWord key={word} id={word} />
            ))}{" "}
          </SortableContext>
          {/* </div> */}
        </DndContext>
      </div>
      <div className="button-container">
        <button className="button-8" onClick={checkOrder}>
          Check Sentence
        </button>
        <button className="button-8" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SentenceReorder;
