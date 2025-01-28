import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN  */}
      <div className="bg-pink-50 4 p-4 flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="font-semibold text-4xl leading-[48px] text-gray-700">Grab up to 50% off on selected products!</h1>
          <button className="rounded-3xl bg-pinki text-white w-max py-3 px-5 text-sm">Buy Now</button>
        </div>
        <div className="w-1/3 relative">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
