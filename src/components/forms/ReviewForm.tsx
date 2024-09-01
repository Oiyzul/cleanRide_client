const ReviewForm = () => {
  return (
    <form className="review-form">
      <textarea
        className="border rounded-md p-2"
        placeholder="Leave your feedback"
      ></textarea>
      <div className="rating">
        <input type="radio" name="rating" value="1" />
        <input type="radio" name="rating" value="2" />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
