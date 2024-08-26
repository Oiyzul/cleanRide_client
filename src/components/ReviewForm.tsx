const ReviewForm = () => {
  return (
    <section className="reviews bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="review-form">
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
      </div>

      <div className="overall-rating">
        <h3>
          Overall Rating: <span id="average-rating">4.5</span>
        </h3>
      </div>

      <div className="recent-reviews"></div>

      <a href="#" className="text-blue-500">
        See All Reviews
      </a>
    </section>
  );
};

export default ReviewForm;
