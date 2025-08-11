
import { Truck } from '@/models/TruckTypes';

export const cimcBonXiMang: Truck = {
  id: "mooc-cimc-bon-xi-mang",
  name: "CIMC Bồn Xi Măng",
  slug: "cimc-bon-xi-mang",
  brand: "CIMC",
  price: 950000000,
  priceText: "950.000.000 VNĐ",
  weightText: "33 tấn",
  weight: 33,
  length: 12.0,
  width: 2.5,
  height: 3.9,
  dimensions: "12000x2500x3900 mm",
  type: "mooc",
  trailerType: "bồn-xi-măng",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop",
  images: ["https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop"],
  description: "Mooc bồn chở xi măng rời CIMC với hệ thống xả khí nén, phù hợp vận chuyển xi măng và các loại bột rời.",
  detailedDescription: `CIMC Bồn Xi Măng là mooc chuyên dụng được thiết kế để vận chuyển xi măng rời và các loại bột xây dựng khác với hiệu suất cao và độ tin cậy tốt. Với công nghệ Trung Quốc và giá thành cạnh tranh, đây là giải pháp kinh tế cho ngành xây dựng và sản xuất vật liệu xây dựng.

Lòng bồn được chế tạo từ thép carbon với lớp lót inox bên trong, có khả năng chống ăn mòn tốt khi tiếp xúc với xi măng và các hóa chất trong vật liệu xây dựng. Thiết kế lòng bồn hình oval giúp tối ưu hóa dung tích chứa và giảm trọng lượng bản thân.

Hệ thống xả khí nén với máy nén khí chuyên dụng và hệ thống ống dẫn khí được phân bố đều trong lòng bồn, cho phép xả hoàn toàn xi măng trong thời gian ngắn. Hệ thống này được thiết kế để tránh tắc nghẽn và dễ dàng bảo trì.

Hệ thống lọc bụi được tích hợp để giảm thiểu ô nhiễm môi trường trong quá trình xả xi măng. Van an toàn và đồng hồ đo áp suất đảm bảo vận hành an toàn và kiểm soát được quá trình làm việc.

Với dung tích lớn 35m³ và khả năng vận hành ổn định, CIMC Bồn Xi Măng là lựa chọn phù hợp cho các nhà máy xi măng, công ty xây dựng và các doanh nghiệp cần vận chuyển vật liệu xây dựng rời với chi phí hợp lý.`,
  features: ["Chở xi măng rời", "Hệ thống xả khí nén", "Bồn inox chống ăn mòn", "Hiệu suất cao"],
  origin: "Trung Quốc",
  tankSpec: {
    capacity: 35000,
    capacityText: "35 m³",
    material: "Thép carbon + lót inox",
    dischargingSystem: "Khí nén"
  }
};
