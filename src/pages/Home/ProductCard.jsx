import PropTypes from "prop-types";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
const ProductCard = ({product}) => {
  const {
    productName,
    productImage,
    description,
    price,
    brandName,
    categoryName,
    ratings,
    creationDate,
    
  } = product;



  return (
    <div className="card lg:card-side bg-base-100 shadow-xl font-poppins relative border border-[#74C138] ">
      <figure className="lg:w-1/3 lg:h-[300px]">
        <img src={productImage} alt="Album" className="h-full w-full" />
      </figure>
      <div className="notice w-16 h-6 rounded-r-3xl absolute top-5 left-0 bg-[#74C138] flex items-center justify-center gap-1 text-white">
        <FaStar /> {ratings}
      </div>
      <div className="card-body lg:w-2/3">
        <h2 className="font-bold text-xl text-center">{productName}</h2>
        <p className="text-center text-xs md:text-sm opacity-80 ">
          {description}
        </p>
        <hr className="border-[#74C138]" />
        <hr className="border-[#74C138]" />
        <h1 className="text-base">
          {" "}
          <span className="font-bold ">
            <CiLocationOn className="inline h-6 w-5 text-[#3891c1]" />
            Brand Name :
          </span>{" "}
          {brandName}{" "}
        </h1>
        <h1 className="text-base flex items-center">
          {" "}
          <span className="font-bold">
            <TbCoinTaka className="inline h-6 w-5 text-[#3891c1]" />
            Price :
          </span>{" "}
          {price}{" "} <FaDollarSign />
        </h1>
        
        <div className="flex items-center gap-3 flex-col md:flex-row   ">
          <div>
            <h1 className="text-base">
              <span className="font-bold ">
                <CgProfile className="inline h-6 w-5 text-[#3891c1]" /> Category
                :
              </span>{" "}
              {categoryName}
            </h1>
            <p className="">
              {" "}
              <span className="font-bold ">
                <MdEmail className="inline h-6 w-5 text-[#3891c1]" /> Date and Time:
              </span>{" "}
              {creationDate}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
