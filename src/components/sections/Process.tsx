import {
    ChartCandlestick,
    Check,
    ChevronRight,
    Disc,
    ReplaceAll
} from "lucide-react";
import MaxWidthWrapper from "../others/MaxWidthWrapper";

const Process = () => {
  return (
    <section className="min-h-[55vh] flex flex-col items-center justify-center bg-process bg-cover">
      <MaxWidthWrapper className="flex flex-col gap-10 text-white bg-black/30 py-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="uppercase text-5xl font-bold">Our Process</h1>
          <div className="w-10 h-1 bg-white my-2"></div>
          <p className="text-sm">We know your time is valuable</p>
        </div>
        <div className="flex justify-between w-2/3 mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-20">
              <div className="w-16 h-16 rounded-full border flex items-center justify-center text-white">
                <span className="border-2 border-white rounded-full p-1">
                  <Check />
                </span>
              </div>
              <div className="border-2 rounded-full p-0.5 w-9 h-9 flex items-center text-white">
                <ChevronRight size={30} />
              </div>
            </div>
            <p>1. Booking</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-20">
              <div className="w-16 h-16 rounded-full border flex items-center justify-center text-white">
                <span className="border-2 border-white rounded-full p-1">
                  <ReplaceAll absoluteStrokeWidth />
                </span>
              </div>
              <div className="border-2 rounded-full p-0.5 w-9 h-9 flex items-center text-white">
                <ChevronRight size={30} />
              </div>
            </div>
            <p>2. Inspection</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-20">
              <div className="w-16 h-16 rounded-full border flex items-center justify-center text-white">
                <span className="border-2 border-white rounded-full p-1">
                  <ChartCandlestick absoluteStrokeWidth />
                </span>
              </div>
              <div className="border-2 rounded-full p-0.5 w-9 h-9 flex items-center text-white">
                <ChevronRight size={30} />
              </div>
            </div>
            <p>3. Valuation</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-20">
              <div className="w-16 h-16 rounded-full border flex items-center justify-center text-white">
                <Disc size={40} strokeWidth={1.5} />
              </div>
            </div>
            <p>4. Completion</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Process;
