interface Props {
  selectedTarget: string;
  setSelectedTarget: (target: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FilterButtons = ({
  selectedTarget,
  setSelectedTarget,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="mb-6 flex space-x-5">
        <button
          className={` ${
            selectedTarget === "women"
              ? "text-primary font-bold underline underline-offset-8"
              : "text-secondary font-semibold"
          }`}
          onClick={() => setSelectedTarget("women")}
        >
          For Women
        </button>
        <button
          className={` ${
            selectedTarget === "men"
              ? "text-primary font-bold underline underline-offset-8"
              : "text-secondary font-semibold"
          }`}
          onClick={() => setSelectedTarget("men")}
        >
          For Men
        </button>
      </div>
      <div className="flex space-x-10 text-secondary">
        <button
          className={`px-5 py-2 font-semibold ${
            selectedCategory === "clothing" ? "bg-gray-300 " : "bg-transparent"
          }`}
          onClick={() => setSelectedCategory("clothing")}
        >
          Clothing
        </button>
        <button
          className={`px-5 py-2 font-semibold ${
            selectedCategory === "shoes" ? "bg-gray-300 " : "bg-transparent"
          }`}
          onClick={() => setSelectedCategory("shoes")}
        >
          Shoes
        </button>
        <button
          className={`px-5 py-2 font-semibold ${
            selectedCategory === "accessory" ? "bg-gray-300 " : "bg-transparent"
          }`}
          onClick={() => setSelectedCategory("accessory")}
        >
          Accessory
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
