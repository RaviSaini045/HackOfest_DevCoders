export default function ShimmerProject() {
  return (
    <>
      <div className="flex p-4 items-center border shadow-md my-2  bg-kaddu-200  w-full">
        <div>
          <div className="mx-2 w-48 h-48 md:mx-4 md:w-72 md:h-72 md:max-h-72 rounded-xl  bg-slate-300 ">
          </div>

        </div>

        <div className="flex flex-col justify-center items-start">
          <div className="my-4">
            <h1 className="break-all w-32 h-4 bg-gray-300"></h1>
          </div>
          <div className="flex place-items-center">
            <p className="break-all w-32 h-4 bg-gray-300 "></p>
          </div>
        </div>
      </div>
    </>
  );
}
