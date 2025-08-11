
import { Truck } from '@/models/TruckTypes';

export const isuzuGigaDauKeo: Truck = {
  id: "dau-keo-isuzu-giga-dau-keo",
  name: "Isuzu Giga Đầu Kéo",
  slug: "isuzu-giga-dau-keo",
  brand: "Isuzu",
  price: 1650000000,
  priceText: "1.650.000.000 VNĐ",
  weightText: "38 tấn kéo",
  weight: 38,
  length: 6.1,
  width: 2.5,
  height: 3.0,
  dimensions: "6100x2500x3000 mm",
  type: "dau-keo",
  isNew: true,
  isHot: false,
  origin: "Nhật Bản",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  images: ["https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"],
  description: "Xe đầu kéo Isuzu Giga với công nghệ Nhật Bản tiên tiến, độ bền cao và tiết kiệm nhiên liệu vượt trội.",
  detailedDescription: `Isuzu Giga Đầu Kéo thể hiện đỉnh cao công nghệ xe đầu kéo của Nhật Bản, được thiết kế để đáp ứng nhu cầu vận tải hạng nặng với hiệu suất cao và độ tin cậy vượt trội. Đây là lựa chọn hàng đầu cho các doanh nghiệp vận tải chuyên nghiệp đòi hỏi chất lượng cao.

Động cơ Isuzu 6UZ1-TCN 380 mã lực với công nghệ Common Rail và turbo tăng áp mang lại hiệu suất vượt trội cùng khả năng tiết kiệm nhiên liệu đáng kinh ngạc. Mô-men xoắn 1860 Nm đảm bảo sức kéo mạnh mẽ ngay cả với tải trọng tối đa 38 tấn.

Hộp số sàn 16 cấp Isuzu MXY6Q được thiết kế chuyên dụng cho xe hạng nặng, với các tỷ số truyền được tối ưu hóa cho cả vận hành trong thành phố và đường dài. Hệ thống ly hợp khô đơn bền bỉ và dễ bảo dưỡng.

Cabin ngủ rộng rãi được thiết kế theo tiêu chuẩn Nhật Bản với đầy đủ tiện nghi như điều hòa tự động, ghế khí nén, giường ngủ thoải mái và hệ thống giải trí. Hệ thống phanh khí nén với ABS và hỗ trợ phanh điện tử đảm bảo an toàn tuyệt đối.

Với uy tín về chất lượng và dịch vụ hậu mãi chuyên nghiệp của Isuzu, Giga Đầu Kéo là đầu tư dài hạn thông minh cho doanh nghiệp vận tải cao cấp.`,
  features: [
    "Công nghệ Nhật Bản",
    "Tiết kiệm nhiên liệu",
    "Độ bền cao",
    "Sức kéo 38 tấn"
  ],
  tractorSpec: {
    horsepower: 380,
    torque: "1860 Nm",
    transmission: "Số sàn 16 cấp",
    cabinType: "Cabin ngủ",
    wheelbase: 3815,
    fuelTankCapacity: 380,
    maxTowingCapacity: 38000,
    axleConfiguration: "6x4"
  }
};
