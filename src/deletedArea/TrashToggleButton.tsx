type TrashToggleButtonProps={
    isTrashOpen: boolean;
    setIsTrashOpen:React.Dispatch<
    React.SetStateAction<
    boolean>>
}
const TrashToggleButton=({
    setIsTrashOpen,
    isTrashOpen,
}:TrashToggleButtonProps)=>{
    return(
        <>
                    <button
              className="trash-toggle-btn"
              onClick={() => setIsTrashOpen(!isTrashOpen)}
            >
              {isTrashOpen ? "非表示" : "表示"}
            </button>

        </>
    )
}
export default TrashToggleButton