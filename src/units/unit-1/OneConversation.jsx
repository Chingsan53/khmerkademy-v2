import Conversation from "../Conversation.unit";
import oneConversationA from "./oneConvoA.json";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { saveLessonProgress, fetchAllProgress } from "../../firebaseService";
import { useEffect, useState } from "react";
const OneConversation = ({ user, lessonId }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (user) {
      fetchAllProgress(user.uid, lessonId).then(setProgress);
    }
  }, [user, lessonId]);

  const navigate = useNavigate();
  const handleNext = () => {
    if (user) {
      // Check if user exists before using it
      saveLessonProgress(user.uid, lessonId, progress);
      navigate("/unit-1");
    } else {
      console.error("User is not logged in");
      // Optionally, redirect to login page or show an error message
    }
  };
  return (
    <div className="">
      <Conversation data={oneConversationA} handleNext={handleNext} />
    </div>
  );
};
export default OneConversation;
