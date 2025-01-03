import Meals from "../components/Meals";

const mealPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center my-3">Choose your meals</h1>
      <p className="text-center my-2">Choose your meals to search...</p>
      <Meals />
    </div>
  );
};

export default mealPage;
