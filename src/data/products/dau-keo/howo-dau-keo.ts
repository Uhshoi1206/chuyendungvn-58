
import { Truck } from '@/models/TruckTypes';

export const howoDauKeo: Truck = {
  id: "dau-keo-howo-dau-keo",
  name: "HOWO Đầu Kéo",
  slug: "howo-dau-keo",
  brand: "HOWO",
  price: 1250000000,
  priceText: "1.250.000.000 VNĐ",
  weightText: "35 tấn kéo",
  weight: 35,
  length: 6.0,
  width: 2.5,
  height: 3.1,
  dimensions: "6000x2500x3100 mm",
  type: "dau-keo",
  isNew: false,
  isHot: true,
  origin: "Trung Quốc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  images: ["https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"],
  description: "Xe đầu kéo HOWO với giá thành hợp lý, sức kéo tốt, phù hợp cho các doanh nghiệp vận tải cần tối ưu chi phí.",
  detailedDescription: `HOWO Đầu Kéo là lựa chọn kinh tế và thực tế cho các doanh nghiệp vận tải cần tối ưu hóa chi phí đầu tư mà vẫn đảm bảo hiệu suất làm việc. Với công nghệ Trung Quốc được cải tiến liên tục và giá thành cạnh tranh, HOWO đã trở thành thương hiệu được nhiều chủ xe tin dùng.

Động cơ HOWO 371 mã lực với mô-men xoắn 1800 Nm mang lại sức kéo mạnh mẽ, đủ khả năng vận chuyển các mooc tải trọng lớn. Hộp số sàn 12 cấp được thiết kế chắc chắn với các tỷ số truyền phù hợp cho cả đường đô thị và đường dài.

Cabin đơn được thiết kế đơn giản nhưng đầy đủ tiện nghi cần thiết như điều hòa, ghế ngồi thoải mái và hệ thống âm thanh. Khoang lái rộng rãi tạo sự thoải mái cho tài xế trong những chuyến đi dài. Hệ thống phanh khí nén an toàn và hiệu quả.

Với mạng lưới phụ tùng rộng khắp và chi phí bảo dưỡng thấp, HOWO Đầu Kéo là lựa chọn thông minh cho các doanh nghiệp cần xe có tính kinh tế cao. Khả năng chịu tải 35 tấn phù hợp với đa số nhu cầu vận chuyển container và mooc tại Việt Nam.`,
  features: [
    "Giá thành hợp lý",
    "Sức kéo 35 tấn",
    "Phụ tùng sẵn có",
    "Chi phí vận hành thấp"
  ],
  tractorSpec: {
    horsepower: 371,
    torque: "1800 Nm",
    transmission: "Số sàn 12 cấp",
    cabinType: "Cabin đơn",
    wheelbase: 3625,
    fuelTankCapacity: 300,
    maxTowingCapacity: 35000,
    axleConfiguration: "6x4"
  }
};
