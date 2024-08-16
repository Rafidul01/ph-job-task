import { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
       
    }, [])
    console.log(products);


  return (
    <div>
        
      <h1 className="text-3xl font-bold underline">this is home</h1>
      
    </div>
  );
};

export default Home;
