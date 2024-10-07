import { MaxWidthWrapper, Review } from "@/components";
import { useGetAllReviewsQuery } from "@/redux/features/reviews/reviewApi";

const ReviewPage = () => {
  const { data: reviews = [], isLoading } = useGetAllReviewsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MaxWidthWrapper className="mt-5 min-h-screen">
      <div className="">
        <h1 className="text-5xl font-semibold text-center">
          Our sweet client say
        </h1>
      </div>

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews?.data?.map((review: TReview) => {
            return <Review review={review} />;
          })}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ReviewPage;
