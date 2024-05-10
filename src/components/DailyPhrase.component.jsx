import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DailyPhrase.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import styles from "./DailyPhrase.css";
const DailyPhrase = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  //useEffect to fetch data from firebase

  useEffect(() => {
    const fetchDailyWords = async () => {
      const today = new Date().getDay();
      const q = query(collection(db, "categories"), where("id", "==", today));
      try {
        const querySnapshot = await getDocs(q);
        const categories = [];
        querySnapshot.forEach((doc) => {
          categories.push(doc.data());
        });
        setCurrentCategory(categories[0]);
      } catch (err) {
        setError("Failed to fetch data");
        console.log(err);
      }
    };
    fetchDailyWords();
  }, []);

  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = today.getDay();
  const dayName = days[dayIndex];

  return (
    <>
      <header className="header">
        <h1>New Phrase/Word for {dayName}</h1>
      </header>

      <main className="main">
        <section className="categorySection">
          {currentCategory ? (
            <article className="category">
              <h2 className="title">{currentCategory.title}</h2>
              <p className="translation">{currentCategory.translation}</p>
              <p className="pronunciation">{currentCategory.pronunciation}</p>
            </article>
          ) : (
            <p>Loading or no data available</p>
          )}
        </section>
      </main>

      <Outlet />
    </>
  );
};

export default DailyPhrase;
