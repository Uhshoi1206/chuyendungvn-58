
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from '@/models/TruckTypes';
import SectionTitle from '@/components/SectionTitle';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface BrandCategoriesProps {
  trucks: Truck[];
}

const BrandCategories = ({ trucks }: BrandCategoriesProps) => {
  // Tạo danh sách thương hiệu duy nhất từ sản phẩm có sẵn - hỗ trợ mảng thương hiệu
  const getUniqueBrands = () => {
    const brandSet = new Set<string>();
    trucks.forEach(truck => {
      if (Array.isArray(truck.brand)) {
        truck.brand.forEach(b => {
            if (b && b.trim()) {
                brandSet.add(b.trim());
            }
        });
      } else {
        if (truck.brand && truck.brand.trim()) {
            brandSet.add(truck.brand.trim());
        }
      }
    });
    
    // Chuyển đổi Set thành mảng và sắp xếp theo thứ tự alphabet
    return Array.from(brandSet).sort().map((brand, index) => ({
      id: index + 1,
      name: brand
    }));
  };

  const brands = getUniqueBrands();

  // Mapping logo cho từng thương hiệu
  const getBrandLogo = (brandName: string) => {
    const logoMap: Record<string, string> = {
      'Hyundai': 'https://logos-world.net/wp-content/uploads/2021/03/Hyundai-Logo.png',
      'THACO': 'https://thaco.com.vn/wp-content/uploads/2020/02/thaco-logo.png',
      'Isuzu': 'https://logos-world.net/wp-content/uploads/2021/04/Isuzu-Logo.png',
      'Hino': 'https://logos-world.net/wp-content/uploads/2021/04/Hino-Logo.png',
      'Dongfeng': 'https://logos-world.net/wp-content/uploads/2022/04/Dongfeng-Logo.png',
      'JAC': 'https://logos-world.net/wp-content/uploads/2022/04/JAC-Motors-Logo.png',
      'Mitsubishi': 'https://logos-world.net/wp-content/uploads/2020/04/Mitsubishi-Logo.png',
      'Fuso': 'https://logos-world.net/wp-content/uploads/2021/04/Mitsubishi-Fuso-Logo.png',
      'Daewoo': 'https://logos-world.net/wp-content/uploads/2021/03/Daewoo-Logo.png',
      'Foton': 'https://logos-world.net/wp-content/uploads/2022/04/Foton-Logo.png',
      'Iveco': 'https://logos-world.net/wp-content/uploads/2021/04/Iveco-Logo.png',
      'Mercedes-Benz': 'https://logos-world.net/wp-content/uploads/2020/04/Mercedes-Benz-Logo.png',
      'Volvo': 'https://logos-world.net/wp-content/uploads/2020/04/Volvo-Logo.png',
      'Scania': 'https://logos-world.net/wp-content/uploads/2021/04/Scania-Logo.png',
      'MAN': 'https://logos-world.net/wp-content/uploads/2021/04/MAN-Logo.png',
      'Soosan': 'https://seeklogo.com/images/S/soosan-heavy-industries-logo-1433C40292-seeklogo.com.png'
    };

    return logoMap[brandName] || `https://via.placeholder.com/120x60/f0f0f0/666?text=${encodeURIComponent(brandName)}`;
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Thương Hiệu Nổi Tiếng"
          description="Chúng tôi phân phối đa dạng các loại phương tiện thương mại (xe tải, xe cẩu, mooc, xe đầu kéo) từ những thương hiệu uy tín, đảm bảo chất lượng và độ tin cậy."
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.length > 0 ? (
            brands.map(brand => (
              <Link 
                key={brand.id} 
                to={`/danh-muc-xe?brand=${brand.name}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center border border-gray-100 hover:border-primary/20 group min-h-[120px]"
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <OptimizedImage
                    src={getBrandLogo(brand.name)}
                    alt={`Logo ${brand.name}`}
                    className="max-w-[120px] max-h-[60px] object-contain group-hover:scale-105 transition-transform duration-300"
                    fallback={`https://via.placeholder.com/120x60/f0f0f0/666?text=${encodeURIComponent(brand.name)}`}
                    useCase="thumbnail"
                  />
                  <span className="text-sm font-medium text-gray-600 mt-2 group-hover:text-primary transition-colors">
                    {brand.name}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Chưa có thương hiệu nào trong danh mục
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandCategories;
