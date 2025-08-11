
import { Truck } from '@/models/TruckTypes';

export const soosanScs525: Truck = {
  id: "xe-cau-soosan-scs525",
  name: "Soosan SCS525 5 Tấn",
  slug: "soosan-scs525",
  brand: "Soosan",
  price: 680000000,
  priceText: "680.000.000 VNĐ",
  weightText: "5 tấn",
  weight: 5,
  length: 6.5,
  width: 2.2,
  height: 3.0,
  dimensions: "6500x2200x3000 mm",
  type: "xe-cau",
  isNew: true,
  isHot: false,
  origin: "Hàn Quốc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop"
  ],
  craneType: "cẩu-rời",
  description: "Cẩu Soosan SCS525 5 tấn với khả năng nâng mạnh mẽ, phù hợp cho các công trình xây dựng quy mô vừa và lớn.",
  detailedDescription: `Soosan SCS525 5 tấn là mẫu cẩu di động trung bình được thiết kế để đáp ứng nhu cầu nâng hạ trong các công trình xây dựng quy mô vừa và lớn. Với công nghệ Hàn Quốc tiên tiến và hiệu suất vượt trội, SCS525 mang lại giải pháp nâng hạ chuyên nghiệp cho nhiều ứng dụng khác nhau.

Hệ thống thủy lực Soosan với bình dầu 55 lít và áp suất làm việc 200 kg/cm² đảm bảo hoạt động mạnh mẽ và ổn định. Lưu lượng dầu 55 L/phút mang lại tốc độ nâng hạ nhanh chóng, tối ưu hóa năng suất làm việc trong các công trình có thời gian chặt chẽ.

Cần cẩu lục giác 4 đoạn với chiều dài từ 4.5m đến 16.2m cho phép làm việc ở nhiều độ cao khác nhau, phù hợp cho các công việc từ tầng thấp đến tầng cao. Góc nâng cần từ 0° đến 78° với tốc độ nâng linh hoạt giúp tài xế dễ dàng điều chỉnh vị trí làm việc chính xác.

Hệ thống xoay 360° liên tục với tốc độ 1.9 vòng/phút cho phép cẩu hoạt động trong mọi hướng mà không bị hạn chế. Chân chống với khoảng cách mở rộng 4.8m cả trước và sau đảm bảo sự ổn định tuyệt đối khi nâng tải lớn.

Với tời cáp chuyên dụng 9x100 IWRC và tốc độ tời 14m/phút, SCS525 mang lại hiệu suất làm việc cao và độ an toàn tối ưu cho các công việc nâng hạ chuyên nghiệp trong xây dựng và công nghiệp.`,
  features: [
    "Sức nâng 5 tấn mạnh mẽ",
    "Tầm với rộng",
    "Hệ thống thủy lực ổn định",
    "Cabin điều hòa"
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
