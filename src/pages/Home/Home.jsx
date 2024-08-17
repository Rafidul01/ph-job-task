import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterPriceRange, setFilterPriceRange] = useState("0-100000");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    fetch(
      `https://job-task-server-ebon.vercel.app/products?brand=${filterBrand}&category=${filterCategory}&price=${filterPriceRange}&sort=${sort}&search=${search}&page=${currentPage}&limit=5`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      });
  }, [filterBrand, filterCategory, filterPriceRange, sort, currentPage, search]);
  console.log(products);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const search = form.get("search");
    setSearch(search);
    console.log(search);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };

  const handlePriceRange = (e) => {
    setFilterPriceRange(e.target.value);
    setCurrentPage(1);
  };

  const handleCategory = (e) => {
    setFilterCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleBrand = (e) => {
    setFilterBrand(e.target.value);
    setCurrentPage(1);
  };

  

  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-320px)]">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#74C138]">Products</h1>

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
            <option value={"brand"} disabled>
              Brand
            </option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>LG</option>
            <option>Asus</option>
          </select>
          <select
            className="select select-bordered"
            name="serviceArea"
            id="mySelect"
            required
            defaultValue="category"
            onChange={handleCategory}
          >
            <option value={"category"} disabled>
              Category
            </option>
            <option>Smartphone</option>
            <option>Laptop</option>
            <option>TV</option>
            <option>Fridge</option>
          </select>
          <select
            className="select select-bordered"
            name="serviceArea"
            id="mySelect"
            required
            defaultValue="price"
            onChange={handlePriceRange}
          >
            <option value={"price"} disabled>
              Price Range
            </option>
            <option>0-1000</option>
            <option>1000-2000</option>
            <option>2000-3000</option>
            <option>3000-5000</option>
            <option>5000-10000</option>
          </select>
          <select
            className="select select-bordered"
            name="serviceArea"
            id="mySelect"
            required
            defaultValue="price"
            onChange={handleSort}
          >
            <option value={"price"} disabled>
              Sort
            </option>
            <option>Low to High</option>
            <option>High to Low</option>
            <option>Newest first</option>
          </select>

          {/* reset */}
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
      </div>

      {
        products.length === 0 ? <h1 className="mt-36 text-2xl font-bold text-center mb-8 text-black">No Products Found...!</h1> : null
      }


      <div className="grid grid-cols-1  gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center mt-4">
      <button className="btn bg-green-300" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        {"<<"}Previous
      </button>
      
      <span >
      {
      Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          
          className={`btn mx-[5px]  border border-green-400 rounded-full ${page === currentPage ? "bg-green-400 text-white" : "bg-transparent text-black"}`}
          
        >
          {page}
        </button>
      ))
    }
      </span>
      <button className="btn bg-green-300" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next{">>"}
      </button>
    </div>
    </div>
    
  );
};

export default Home;
