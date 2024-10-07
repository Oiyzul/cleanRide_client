import { motion } from "framer-motion";

const Review = ({ review }: { review: TReview }) => {
  return (
    <div className="bg-white">
      <motion.div
        key={review._id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="min-h-[192px] p-2 border rounded-md shadow-lg">
          <div className="flex justify-between gap-3 mb-2">
            <div className="flex gap-4">
              <img
                src="/carwash.jpg"
                alt=""
                className="w-12 h-12 object-cover rounded-full"
              />
              <div className="leading-tight">
                <h3 className="font-semibold leading-tight">
                  {review.customerName}
                </h3>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`cursor-pointer text-2xl ${
                        review.rating >= star
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {new Date(review.createdAt).toDateString()}
            </p>
          </div>
          <div className="h-full flex flex-col justify-between">
            <p>{review.feedback}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Review;
