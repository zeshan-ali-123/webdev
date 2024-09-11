const calculateAvgRating = reviews=>{
    const totlRating = reviews?.reduce((acc,item)=>acc + item.rating,0);
    const avgRating =
    totlRating === 0
    ? ""
    : totlRating === 1
    ? totlRating
    : (totlRating/ reviews?.length).toFixed(1);
  return {
    totlRating,
    avgRating,
  };  
};
 
export default calculateAvgRating;