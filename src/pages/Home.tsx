import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const ITEMS_PER_PAGE = 9;

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Products fetched from API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Current page products sliced
  const paginated = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="mt-24 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <main className="mt-16 px-4 py-8">
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Explore Our Products</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Clean and consistent product layout. Browse and click for more!
        </p>
      </section>

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.image}
              price={p.price}
            />
          ))}
        </div>

        {/* Pagination */}
        {loading ? (
          <div className="mt-24 flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {paginated.map((product) => (
                <Card key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-10 gap-3">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50 text-white"
              >
                Prev
              </button>
              <span className="text-sm">{currentPage} / {totalPages}</span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50 text-white"
              >
                Next
              </button>
            </div>
          </>
        )}

      </section>
    </main>
  );
};

export default Home;
