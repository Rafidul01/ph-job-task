import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/products?brand=${filterBrand}&category=${filterCategory}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [filterBrand, filterCategory]);
  console.log(products);

  const handleSearch = (e) => {
    
  };

  const handleFilter = (e) => {

  };

  const handleCategory = (e) => {
    setFilterCategory(e.target.value);
  } 

  const handleBrand = (e) => {
    setFilterBrand(e.target.value);
  };
  const handleReset = () => {
    // setFilter(null);
    // setSearch("");
    document.getElementById("handleReSet").value = "";
    document.getElementById("mySelect").selectedIndex = 0;
    
    
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">this is home</h1>

      <div className="flex flex-col-reverse md:flex-row gap-4 justify-center items-center mb-8">
        {/* filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center ">
          <select
            className="select select-bordered"
            name="serviceArea"
            id="mySelect" 
            required
            // defaultValue={filterBrand ? filterBrand : "Filter"}
            onChange={handleBrand}
            defaultValue={"brand"}
            
          >
            <option value={"brand"} disabled>Brand</option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>LG</option>
            <option>Asus</option>
            <option>All</option>
          </select>
          <select
            className="select select-bordered"
            name="serviceArea"
            id="mySelect" 
            
            required
            defaultValue="category"
            onChange={handleCategory}
          >
            <option value={"category"} disabled>Category</option>
            <option>Smartphone</option>
            <option>Laptop</option>
            <option>TV</option>
            <option>Fridge</option>
            <option>All</option>
          </select>
          <select
            className="select select-bordered"
            name="serviceArea"
            id="mySelect" 
            
            required
            defaultValue="price"
            onChange={handleFilter}
          >
            <option value={"price"} disabled>Price Range</option>
            <option>0-1000</option>
            <option>1000-2000</option>
            <option>2000-infinity</option>
          </select>
          <select
            className="select select-bordered"
            name="serviceArea"
            id="mySelect" 
            
            required
            defaultValue="price"
            onChange={handleFilter}
          >
            <option value={"price"} disabled>Sort</option>
            <option>Low to High</option>
            <option>High to Low</option>
            <option>Newest first</option>
          </select>

          {/* reset */}
        <div className="block md:hidden">
          <Link onClick={handleReset} className="btn ">
            Reset
          </Link>
        </div>
        </div>

        {/* search */}
        <div>
          <form action="" className="flex" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              name="search"
              id="handleReSet"
              className="input input-bordered w-full max-w-xs rounded-r-none border-r-0"
            />
            <button className="btn rounded-l-none bg-[#74C138] text-white hover:text-[#74C138] hover:bg-transparent">
              Search
            </button>
          </form>
        </div>

        {/* reset */}
        <div className="hidden md:block">
          <Link onClick={handleReset} className="btn ">
            Reset
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1  gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
