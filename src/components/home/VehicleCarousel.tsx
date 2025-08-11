
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Truck } from '@/models/TruckTypes';
import TruckItem from '../TruckItem';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface VehicleCarouselProps {
  vehicles: Truck[];
  title: string;
  description: string;
  viewAllUrl: string;
  viewAllText: string;
}

const VehicleCarousel: React.FC<VehicleCarouselProps> = ({
  vehicles,
  title,
  description,
  viewAllUrl,
  viewAllText,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Tính toán số trang dựa trên số lượng sản phẩm và số lượng sản phẩm mỗi trang
  useEffect(() => {
    const calculatePages = () => {
      const containerWidth = containerRef.current?.clientWidth || 0;
      let columns = 4; // Mặc định hiển thị 4 sản phẩm một hàng

      // Responsive: Hiển thị 4 sản phẩm trên tất cả các thiết bị
      // Mobile/Tablet: 4 sản phẩm theo dạng 1 cột (4 dòng)
      // Desktop: 4 sản phẩm theo dạng 4 cột (1 dòng)
      columns = 4;

      setItemsPerPage(columns);
      setTotalPages(Math.ceil(vehicles.length / columns));
    };

    calculatePages();
    window.addEventListener('resize', calculatePages);

    return () => {
      window.removeEventListener('resize', calculatePages);
    };
  }, [vehicles.length]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // Lấy các sản phẩm cho trang hiện tại
  const currentVehicles = vehicles.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Kiểm tra có cần hiển thị điều hướng hay không (chỉ khi có nhiều hơn một trang)
  const showNavigation = totalPages > 1;

  return (
    <section className="py-8 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold relative inline-block mb-2">
            {title}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Grid responsive: 1 cột trên mobile/tablet (4 dòng), 4 cột trên desktop (1 dòng) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentVehicles.map((vehicle, index) => (
              <div 
                key={vehicle.id} 
                className="product-hover"
                style={{ 
                  animation: `fadeSlideIn 0.3s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <TruckItem truck={vehicle} />
              </div>
            ))}
          </div>

          {/* Navigation buttons - giống như trong BlogSection carousel */}
          {showNavigation && (
            <>
              <button
                onClick={goToPrevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white h-8 w-8 rounded-full flex items-center justify-center shadow-sm border border-gray-200"
                aria-label="Xem sản phẩm trước đó"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              
              <button
                onClick={goToNextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white h-8 w-8 rounded-full flex items-center justify-center shadow-sm border border-gray-200"
                aria-label="Xem sản phẩm tiếp theo"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        <div className="text-center mt-6">
          <Link
            to={viewAllUrl}
            className="inline-block border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary/10 transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            {viewAllText} <ChevronRight className="inline-block h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VehicleCarousel;
