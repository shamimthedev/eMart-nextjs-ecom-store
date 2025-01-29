import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative w-full h-96 bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl mt-8 font-light tracking-wide">
            Category name
          </h2>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative w-full h-96 bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl mt-8 font-light tracking-wide">
            Category name
          </h2>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative w-full h-96 bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl mt-8 font-light tracking-wide">
            Category name
          </h2>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative w-full h-96 bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl mt-8 font-light tracking-wide">
            Category name
          </h2>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative w-full h-96 bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl mt-8 font-light tracking-wide">
            Category name
          </h2>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative w-full h-96 bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl mt-8 font-light tracking-wide">
            Category name
          </h2>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative w-full h-96 bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl mt-8 font-light tracking-wide">
            Category name
          </h2>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative w-full h-96 bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl mt-8 font-light tracking-wide">
            Category name
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
