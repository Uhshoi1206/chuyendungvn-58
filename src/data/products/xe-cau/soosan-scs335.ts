
import { Truck } from '@/models/TruckTypes';

export const soosanScs335: Truck = {
  id: "xe-cau-soosan-scs335",
  name: "Soosan SCS335 3 Tấn",
  slug: "soosan-scs335",
  brand: "Soosan",
  price: 450000000,
  priceText: "450.000.000 VNĐ",
  weightText: "3 tấn",
  weight: 3,
  length: 5.8,
  width: 2.0,
  height: 2.8,
  dimensions: "5800x2000x2800 mm",
  type: "xe-cau",
  isNew: false,
  isHot: true,
  origin: "Hàn Quốc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop"
  ],
  craneType: "cẩu-rời",
  description: "Cẩu Soosan SCS335 3 tấn nhỏ gọn, linh hoạt, phù hợp cho các công việc nâng hạ trong không gian hẹp và công trình nhỏ.",
  detailedDescription: `Soosan SCS335 3 tấn là mẫu cẩu di động compact hoàn hảo cho các công việc nâng hạ trong không gian hẹp và các công trình quy mô nhỏ. Với thiết kế nhỏ gọn nhưng hiệu suất cao, SCS335 mang lại sự linh hoạt tối đa trong nhiều ứng dụng khác nhau.

Hệ thống thủy lực Soosan với bình dầu 45 lít và áp suất làm việc 180 kg/cm² đảm bảo hoạt động mượt mà và chính xác. Lưu lượng dầu 45 L/phút mang lại tốc độ nâng hạ nhanh chóng, tối ưu hóa năng suất làm việc.

Cần cẩu lục giác 3 đoạn với chiều dài từ 3.8m đến 12.5m cho phép làm việc ở nhiều độ cao khác nhau. Góc nâng cần từ 0° đến 75° với tốc độ nâng linh hoạt từ 1-75°/15s giúp tài xế dễ dàng điều chỉnh vị trí làm việc.

Hệ thống xoay 360° liên tục với tốc độ 1.8 vòng/phút cho phép cẩu hoạt động trong mọi hướng mà không bị hạn chế. Chân chống với khoảng cách mở rộng 4.2m cả trước và sau đảm bảo sự ổn định tuyệt đối khi nâng tải.

Với tời cáp chuyên dụng 8x80 IWRC và tốc độ tời 12m/phút, SCS335 mang lại hiệu suất làm việc cao và độ an toàn tối ưu cho các công việc nâng hạ hàng ngày.`,
  features: [
    "Sức nâng 3 tấn",
    "Kích thước nhỏ gọn",
    "Vận hành linh hoạt",
    "Tiết kiệm nhiên liệu"
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
