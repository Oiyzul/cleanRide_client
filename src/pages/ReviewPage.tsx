import { MaxWidthWrapper } from "@/components";
import { useGetAllReviewsQuery } from "@/redux/features/reviews/reviewApi";
import { motion } from "framer-motion";
const ReviewPage = () => {
  const { data: reviews = [], isLoading } = useGetAllReviewsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MaxWidthWrapper className="mt-5">
      <div className="">
        <h1 className="text-5xl font-semibold text-center">
          Our sweet client say
        </h1>
      </div>

      <div className="my-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-2 flex flex-col md:flex-row gap-5 flex-wrap">
            {reviews?.data?.slice(0, 2).map((review: TReview) => {
              return (
                <motion.div
                  key={review._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1"
                >
                  <div className="bg-white p-2 h-[180px] border rounded-md">
                    <div className="flex gap-5 p-0">
                      <img
                        src="/carwash.jpg"
                        alt=""
                        className="w-32 h-36 object-cover rounded-2xl"
                      />
                      <div className="flex flex-col justify-between">
                        <p>{review.feedback.substring(0, 120)}</p>
                        <div>
                          <p className="font-semibold">{review.customerName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ReviewPage;
