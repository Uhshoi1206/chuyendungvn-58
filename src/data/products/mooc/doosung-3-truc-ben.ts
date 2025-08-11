
import { Truck } from '@/models/TruckTypes';

export const doosung3TrucBen: Truck = {
  id: "mooc-doosung-3-truc-ben",
  name: "DOOSUNG 3 Trục Ben",
  slug: "doosung-3-truc-ben",
  brand: "DOOSUNG",
  price: 850000000,
  priceText: "850.000.000 VNĐ",
  weightText: "31 tấn",
  weight: 31,
  length: 12.5,
  width: 2.5,
  height: 3.2,
  dimensions: "12500x2500x3200 mm",
  type: "mooc",
  isNew: true,
  isHot: true,
  origin: "Hàn Quốc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"
  ],
  trailerType: "ben",
  description: "Mooc ben DOOSUNG 3 trục với khả năng tự đổ mạnh mẽ, phù hợp cho vận chuyển đất, đá, cát và các vật liệu xây dựng.",
  detailedDescription: `DOOSUNG 3 Trục Ben là giải pháp vận chuyển hoàn hảo cho ngành xây dựng và khai thác vật liệu, với khả năng tự đổ mạnh mẽ và độ bền vượt trội. Được chế tạo theo công nghệ Hàn Quốc tiên tiến, mooc ben này đáp ứng mọi nhu cầu khắt khe của công việc nặng nhọc.

Thùng ben được chế tạo từ thép tấm chống mài mòn dày 6mm, có khả năng chịu được va đập mạnh và tải trọng cao. Thiết kế thùng được tối ưu hóa để giảm trọng lượng bản thân nhưng vẫn đảm bảo độ cứng cáp cần thiết.

Hệ thống thủy lực xi lanh kép với góc nâng 45° cho phép đổ hoàn toàn trong 45 giây, tối ưu hóa thời gian làm việc. Hệ thống điều khiển thủy lực được bảo vệ kỹ lưỡng chống bụi và va đập.

Hệ thống trục DOOSUNG 3 trục x 13 tấn với phanh khí nén ABS đảm bảo khả năng chịu tải và an toàn phanh tuyệt đối. Hệ thống treo lá nhíp chắc chắn được thiết kế đặc biệt để chịu được tải trọng cao và địa hình khó khăn.

Với chất lượng Hàn Quốc và thiết kế chuyên dụng cho điều kiện Việt Nam, DOOSUNG 3 Trục Ben là lựa chọn đáng tin cậy cho các dự án xây dựng và khai thác quy mô lớn.`,
  features: [
    "Hệ thống ben thủy lực mạnh mẽ",
    "3 trục chịu tải cao",
    "Thùng ben chắc chắn",
    "Hệ thống phanh khí nén"
  ],
  trailerSpec: {
    axleCount: 3,
    axleType: "Trục DOOSUNG 13 tấn",
    axleWeight: 13000,
    kingpinLoad: 13000,
    suspensionType: "Lá nhíp",
    brakeSystem: "Phanh khí nén",
    floorType: "Thép tấm chống mài mòn",
    floorThickness: "6mm",
    totalLength: "12.500 mm",
    wheelbase: "7.100 + 1.310 mm",
    loadingHeight: "1.550 mm",
    hydraulicSystem: "Xi lanh thủy lực kép",
    liftingAngle: "45°",
    dumpingTime: "45 giây"
  }
};
