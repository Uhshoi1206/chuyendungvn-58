
import { Truck } from '@/models/TruckTypes';

export const doosungChuyenChoContainer: Truck = {
  id: "mooc-doosung-chuyen-cho-container",
  name: "DOOSUNG Chuyên Chở Container",
  slug: "doosung-chuyen-cho-container",
  brand: "DOOSUNG",
  price: 750000000,
  priceText: "750.000.000 VNĐ",
  weightText: "35 tấn", 
  weight: 35,
  length: 12.2,
  width: 2.5,
  height: 1.55,
  dimensions: "12200x2500x1550 mm",
  type: "mooc",
  isNew: false,
  isHot: true,
  origin: "Hàn Quốc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-acbd2d25bb31?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618047-acbd2d25bb31?w=800&h=600&fit=crop"
  ],
  trailerType: "xương",
  description: "Mooc chuyên chở container DOOSUNG với hệ thống khóa container tự động, phù hợp cho vận chuyển container 20ft, 40ft.",
  detailedDescription: `DOOSUNG Chuyên Chở Container là giải pháp logistics hoàn hảo cho vận chuyển container từ cảng biển đến đích đến cuối cùng. Được thiết kế chuyên dụng theo tiêu chuẩn quốc tế, mooc này đảm bảo sự an toàn và hiệu quả tối đa trong vận chuyển container.

Khung xương được chế tạo từ thép cường độ cao theo công nghệ Hàn Quốc, có khả năng chịu tải 35 tấn và đạt tuổi thọ cao. Thiết kế khung được tối ưu hóa để giảm trọng lượng bản thân nhưng vẫn đảm bảo độ cứng cáp cần thiết.

Hệ thống twist lock tự động cho phép khóa/mở container một cách nhanh chóng và chính xác, tiết kiệm thời gian bốc xếp tại cảng và điểm giao hàng. Hệ thống này tương thích với tất cả các loại container tiêu chuẩn 20ft, 40ft và high cube.

Hệ thống trục 3 trục DOOSUNG với khả năng chịu tải cao và hệ thống phanh khí nén ABS đảm bảo an toàn tuyệt đối khi vận chuyển container nặng. Hệ thống treo được thiết kế đặc biệt để giảm rung động, bảo vệ hàng hóa bên trong container.

Với thiết kế chuyên dụng và chất lượng Hàn Quốc, DOOSUNG Chuyên Chở Container là lựa chọn tin cậy cho các doanh nghiệp logistics và vận tải container chuyên nghiệp.`,
  features: [
    "Chuyên chở container 20ft, 40ft",
    "Hệ thống twist lock tự động",
    "Khung gầm siêu bền",
    "Tối ưu vận chuyển cảng biển"
  ],
  trailerSpec: {
    axleCount: 3,
    containerLock: "Twist lock tự động",
    specialFeatures: ["Container 20ft", "Container 40ft", "High cube"]
  }
};
