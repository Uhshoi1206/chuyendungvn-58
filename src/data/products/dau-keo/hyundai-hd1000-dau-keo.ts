
import { Truck } from '@/models/TruckTypes';

export const hyundaiHd1000DauKeo: Truck = {
  id: "dau-keo-hyundai-hd1000-dau-keo",
  name: "Hyundai HD1000 Đầu Kéo",
  slug: "hyundai-hd1000-dau-keo",
  brand: "Hyundai",
  price: 1450000000,
  priceText: "1.450.000.000 VNĐ",
  weightText: "32 tấn kéo",
  weight: 32,
  length: 5.9,
  width: 2.4,
  height: 2.9,
  dimensions: "5900x2400x2900 mm",
  type: "dau-keo",
  isNew: false,
  isHot: false,
  origin: "Hàn Quốc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  images: ["https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"],
  description: "Xe đầu kéo Hyundai HD1000 phù hợp cho vận chuyển mooc tầm trung, giá thành hợp lý và chất lượng ổn định.",
  detailedDescription: `Hyundai HD1000 Đầu Kéo là một trong những dòng xe đầu kéo phổ biến trên thị trường Việt Nam hiện nay. Với thiết kế hiện đại, khả năng vận hành ổn định và độ bền cao, Hyundai HD1000 Đầu Kéo là sự lựa chọn lý tưởng cho các doanh nghiệp vận tải.

Xe được trang bị động cơ hiện đại mạnh mẽ và tiết kiệm nhiên liệu, cùng với hệ thống treo chắc chắn, giúp xe vận hành êm ái trên mọi địa hình. Với sức kéo 32 tấn, chiều dài tổng thể 5.9m, Hyundai HD1000 có khả năng vận chuyển linh hoạt và hiệu quả.

Động cơ Hyundai chính hãng với công suất 340 mã lực, hộp số sàn 10 cấp mang lại khả năng vận hành mượt mà và tiết kiệm nhiên liệu. Cabin đơn thiết kế ergonomic tạo sự thoải mái cho tài xế trong những chuyến đi dài.`,
  features: [
    "Sức kéo 32 tấn",
    "Giá thành hợp lý",
    "Chất lượng Hàn Quốc",
    "Phù hợp mooc tầm trung"
  ],
  tractorSpec: {
    horsepower: 340,
    torque: "1600 Nm",
    transmission: "Số sàn 10 cấp",
    cabinType: "Cabin đơn",
    wheelbase: 3200,
    fuelTankCapacity: 250,
    maxTowingCapacity: 32000,
    axleConfiguration: "4x2"
  }
};
