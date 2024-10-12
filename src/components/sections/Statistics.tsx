import MaxWidthWrapper from "../others/MaxWidthWrapper";
import { Separator } from "../ui/separator";

const Statistics = () => {
  return (
    <MaxWidthWrapper className="min-h-[40vh] flex items-center justify-between my-10">
      <div className="p-4 flex flex-col gap-5">
        <h3 className="text-7xl font-bold">40k</h3>
        <div>
          <p>
            <span className="font-semibold">Regular </span>We provide sevices to
            thousands
          </p>
          <p>
            <span className="font-semibold">Clients </span>of customers everyday
          </p>
        </div>
      </div>
      <Separator orientation="vertical" className="h-[180px] w-0.5" />
      <div className="p-4 flex flex-col gap-5">
        <h3 className="text-7xl font-bold">30+</h3>
        <div>
          <p>
            <span className="font-semibold">Active </span>There are over 30 shops
          </p>
          <p>
            <span className="font-semibold">Location </span>in Dhaka city.
          </p>
        </div>
      </div>
      <Separator orientation="vertical" className="h-[180px] w-0.5" />
      <div className="p-4">
        <h3 className="text-7xl font-bold">300+</h3>
        <div>
          <p>
            <span className="font-semibold">Expert </span>We have more than 300
            experts
          </p>
          <p>
            <span className="font-semibold">Worker</span> engineers and workers
            servicing.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Statistics;
