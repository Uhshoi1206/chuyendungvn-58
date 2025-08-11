
import { Truck } from '@/models/TruckTypes';

export const xeTaiGanCauSoosan10Tan: Truck = {
  id: "xe-cau-xe-tai-gan-cau-soosan-10-tan",
  name: "Xe Tải Gắn Cẩu Soosan 10 Tấn",
  slug: "xe-tai-gan-cau-soosan-10-tan",
  brand: "Soosan",
  price: 1450000000,
  priceText: "1.450.000.000 VNĐ",
  weightText: "10 tấn",
  weight: 10,
  length: 8.0,
  width: 2.3,
  height: 3.3,
  dimensions: "8000x2300x3300 mm",
  type: "xe-cau",
  isNew: false,
  isHot: true,
  origin: "Hàn Quốc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop"
  ],
  craneType: "cẩu-gắn-xe",
  description: "Xe tải gắn cẩu Soosan 10 tấn kết hợp vận chuyển và nâng hạ, tối ưu hiệu quả công việc và tiết kiệm chi phí vận hành.",
  detailedDescription: `Xe Tải Gắn Cẩu Soosan 10 Tấn là giải pháp tối ưu kết hợp hoàn hảo giữa khả năng vận chuyển và nâng hạ trong một phương tiện duy nhất. Được thiết kế thông minh với công nghệ Hàn Quốc tiên tiến, xe này mang lại hiệu quả công việc cao và tiết kiệm chi phí vận hành đáng kể cho doanh nghiệp.

Khung gầm xe tải được gia cường đặc biệt để chịu được trọng lượng của hệ thống cẩu và tải trọng nâng. Thiết kế cân bằng tối ưu giữa khả năng chở hàng và sức nâng của cẩu, đảm bảo xe có thể vận hành an toàn và hiệu quả trong mọi điều kiện.

Hệ thống cẩu Soosan 10 tấn được gắn phía sau cabin với khả năng xoay 360° liên tục. Cần cẩu lục giác 4 đoạn với tầm với lên đến 18.5m cho phép nâng hạ hàng hóa trong phạm vi rộng. Hệ thống thủy lực mạnh mẽ đảm bảo hoạt động êm ái và chính xác.

Thùng xe được thiết kế tối ưu để chở các vật liệu xây dựng, máy móc và hàng hóa có kích thước lớn. Kết hợp với khả năng tự nâng hạ bằng cẩu, xe có thể tự bốc xếp hàng hóa mà không cần thiết bị hỗ trợ khác.

Với tính năng 2 trong 1 này, Xe Tải Gắn Cẩu Soosan 10 Tấn là lựa chọn thông minh cho các doanh nghiệp xây dựng, vận tải và các ngành nghề cần sự linh hoạt trong việc vận chuyển và bốc xếp hàng hóa.`,
  features: [
    "Tích hợp xe tải và cẩu",
    "Sức nâng 10 tấn mạnh mẽ",
    "Tiết kiệm chi phí vận hành",
    "Linh hoạt đa năng"
  ],
  craneSpec: {
    liftingCapacity: 15000,
    liftingCapacityText: "15.000 kg / 2.0 m",
    maxLiftingMoment: "30 tấn.m",
    maxLiftingHeight: "23.5 m",
    maxWorkingRadius: "20.0 m",
    boomType: "Cần lục giác",
    boomSections: 5,
    boomLength: "6.2 m ~ 23.5 m", 
    boomExtensionSpeed: "18.0 / 45 (m/s)",
    boomLuffingAngle: "0° ~ 82°",
    boomLuffingSpeed: "1 ~ 82 / 20 (°/s)",
    winchRatedSpeed: "18 (m/phút) (tại lớp thứ 4)",
    winchRopeType: "12 x 140 IWRC 6xWS(26)",
    swingAngle: "360° liên tục",
    swingSpeed: "2.2 (rpm)",
    swingReductionType: "Bánh răng trục vít, mô tơ thủy lực",
    outriggersFrontExtension: "6.2 m",
    outriggersRearExtension: "6.2 m",
    outriggersType: "Mô tơ thủy lực, bánh răng nêm và hộp giảm tốc hành tinh",
    hydraulicTankCapacity: "70 Lít",
    hydraulicOilFlow: "70 (L/phút)",
    hydraulicOperatingPressure: "220 (kg/cm²)",
    craneModelName: "SOOSAN SCS1516S",
    detailedLiftingCapacity: [
      "12,000 kg / 2.5 m",
      "3,200 kg / 6.0 m", 
      "1,800 kg / 10.0 m",
      "1,100 kg / 15.0 m",
      "750 kg / 18.5 m",
      "400 kg / 23.5 m"
    ]
  }
};
