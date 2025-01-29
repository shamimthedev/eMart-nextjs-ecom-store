import Add from "@/src/components/Add";
import CustomizeProduct from "@/src/components/CustomizeProduct";
import ProductImages from "@/src/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG  */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-4xl font-medium">Product name</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          molestiae hic possimus officia repudiandae voluptatibus assumenda
          corrupti dolorem ipsum omnis.
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h2 className="text-xl text-gray-500 line-through">$49</h2>
          <h3 className="font-medium text-2xl">$59</h3>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProduct />
        <Add />
        <div className="h-[2px] bg-gray-100"></div>
        <div className="text-sm">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            laborum exercitationem ab repellat repudiandae quos voluptate
            assumenda, tempora blanditiis qui?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            laborum exercitationem ab repellat repudiandae quos voluptate
            assumenda, tempora blanditiis qui?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            laborum exercitationem ab repellat repudiandae quos voluptate
            assumenda, tempora blanditiis qui?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
