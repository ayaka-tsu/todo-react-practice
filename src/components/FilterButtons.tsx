type FilterButtonsProps={
    filter:string;
    setFilter:React.Dispatch<React.SetStateAction<string>>;
};
const FilterButtons = ({filter,setFilter}:FilterButtonsProps) =>{
    return(
        <>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === "すべて" ? "active" : ""} `}
              onClick={() => setFilter("すべて")}
            >
              すべて
            </button>
            <button
              className={`filter-btn ${filter === "未完了" ? "active" : ""} `}
              onClick={() => setFilter("未完了")}
            >
              未完了
            </button>
            <button
              className={`filter-btn ${filter === "着手中" ? "active" : ""} `}
              onClick={() => setFilter("着手中")}
            >
              着手中
            </button>
            <button
              className={`filter-btn ${filter === "完了" ? "active" : ""} `}
              onClick={() => setFilter("完了")}
            >
              完了
            </button>
          </div>

        </>
    );
};
export default FilterButtons