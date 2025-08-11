
import { Truck } from '@/models/TruckTypes';

export const cimc3TrucSan: Truck = {
  id: "mooc-cimc-3-truc-san",
  name: "CIMC 3 Trục Sàn",
  slug: "cimc-3-truc-san",
  brand: "CIMC",
  price: 720000000,
  priceText: "720.000.000 VNĐ",
  weightText: "34 tấn",
  weight: 34,
  length: 12.5,
  width: 2.5,
  height: 1.5,
  dimensions: "12500x2500x1500 mm",
  type: "mooc",
  isNew: false,
  isHot: false,
  origin: "Trung Quốc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-acbd2d25bb31?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618047-acbd2d25bb31?w=800&h=600&fit=crop"
  ],
  trailerType: "sàn",
  description: "Mooc sàn CIMC 3 trục với sàn phẳng rộng rãi, phù hợp cho vận chuyển container, máy móc và hàng hóa có kích thước lớn.",
  detailedDescription: `Mooc sàn CIMC 3 trục 34 tấn là giải pháp vận chuyển kinh tế và hiệu quả cho đa dạng các loại hàng hóa có kích thước và trọng lượng lớn. Được thiết kế với sàn phẳng rộng rãi và khả năng chịu tải cao, mooc này đáp ứng nhu cầu vận chuyển từ container đến máy móc công nghiệp nặng.

Khung gầm CIMC được chế tạo từ thép cường độ cao theo tiêu chuẩn Trung Quốc, với cấu trúc dầm chính được thiết kế tối ưu để chịu tải 34 tấn. Hệ thống dầm ngang và dầm dọc được bố trí khoa học, đảm bảo phân bố tải trọng đều khắp sàn mooc và tăng độ bền cho toàn bộ kết cấu.

Sàn mooc được làm từ thép tấm dày 3mm với bề mặt chống trượt, tạo độ bám tốt cho hàng hóa. Thiết kế sàn phẳng hoàn toàn giúp tối ưu hóa không gian chứa hàng và tạo điều kiện thuận lợi cho việc bốc xếp bằng cần cẩu, xe nâng hoặc các thiết bị chuyên dụng khác.

Hệ thống trục 3 trục CIMC với mỗi trục chịu tải 13 tấn, được trang bị hệ thống phanh khí nén hiệu quả đảm bảo an toàn phanh tối ưu. Hệ thống treo lá nhíp được thiết kế để giảm rung động, bảo vệ hàng hóa và tăng tuổi thọ mooc trong quá trình vận chuyển.

Với giá thành hợp lý và khả năng vận chuyển đa dạng, CIMC 3 Trục Sàn là lựa chọn kinh tế cho các doanh nghiệp logistics cần tối ưu hóa chi phí vận hành mà vẫn đảm bảo chất lượng vận chuyển.`,
  features: [
    "Sàn phẳng rộng rãi",
    "Khả năng chịu tải cao",
    "Giá thành hợp lý",
    "Bảo trì dễ dàng"
  ],
  trailerSpec: {
    axleCount: 3,
    axleType: "Trục CIMC 13 tấn",
    axleWeight: 13000,
    kingpinLoad: 13000,
    suspensionType: "Lá nhíp",
    brakeSystem: "Phanh khí nén",
    floorType: "Sàn thép phẳng",
    floorThickness: "3mm",
    totalLength: "12.500 mm",
    wheelbase: "7.100 + 1.310 mm",
    loadingHeight: "1.300 mm"
  }
};
