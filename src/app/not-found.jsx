"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="flex justify-center pt-10 ">
          <div>
            <p className="mb-8 text-9xl font-black text-secondary-300">404</p>
            <p className="text-xl font-bold text-secondary-700 mb-8">
              صفحه ای که دنبالش بودید، پیدا نشد
            </p>
            <button
              onClick={moveBack}
              className="flex items-center gap-x-2 bg-secondary-0 py-2 px-4 rounded-md font-bold text-secondary-700"
            >
              <ArrowRightIcon className="w-6 h-6 text-primary-900" />
              <span> برگشت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
