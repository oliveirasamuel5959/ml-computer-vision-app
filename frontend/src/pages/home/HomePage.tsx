import axios from "axios";
import { useState, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar";
import { formatMoney } from "../../utils/money";

export function HomePage() {
  const API_URL = "http://localhost:8000/";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <>
      <title>Home</title>

      <Sidebar>
        {/* Page Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <p className="text-lg font-semibold text-blue-600">
            Pull Request
          </p>
        </div>

        {/* Product Grid */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 border border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gray-800 rounded-t-xl overflow-hidden">
                <img
                  src={`${API_URL}${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <p className="text-sm font-medium text-gray-100 line-clamp-2">
                  {product.name}
                </p>

                {/* Rating */}
                <div className="flex items-center text-xs text-gray-400">
                  ⭐ {product.rating.stars}
                  <span className="ml-1">
                    ({product.rating.count})
                  </span>
                </div>

                {/* Price */}
                <p className="text-lg font-semibold text-green-500">
                  ${formatMoney(product.priceCents)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Sidebar>
    </>
  );
}
