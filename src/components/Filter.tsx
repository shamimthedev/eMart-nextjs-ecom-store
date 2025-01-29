const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl font-medium bg-[#EBEDED] text-xs"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl font-medium bg-[#EBEDED] text-xs"
        >
          <option>Category</option>
          <option value="New Arrival">New Arrival</option>
          <option value="popular">Popular</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl font-medium bg-[#EBEDED] text-xs"
        >
          <option>Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className="">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl font-medium bg-[#EBEDED] text-xs"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
