const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {
                Array(10).fill("").map((arr,index)=> <div key={index} className="shimmer-card"></div>)           
            }
        </div>
    )
}
export default Shimmer;