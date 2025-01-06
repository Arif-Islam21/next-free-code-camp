import Meals from "../components/Meals";
import styles from "./styles.module.css";

export const metadata = {
  title: "Next meal app",
  description: "Meal ordering by Arif",
};

const mealPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center my-3">Choose your meals</h1>
      <p className={styles.textlarge}>Choose your meals to search...</p>
      <Meals />
    </div>
  );
};

export default mealPage;
