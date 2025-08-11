
import { Truck } from '@/models/TruckTypes';

export const veamVpt350ThungBat: Truck = {
  id: "xe-tai-veam-vpt350-thung-bat",
  name: "VEAM VPT350 Thùng Bạt",
  slug: "veam-vpt350-thung-bat",
  brand: "VEAM",
  price: 380000000,
  priceText: "380.000.000 VNĐ",
  weightText: "3.5 tấn",
  weight: 3.5,
  length: 5.2,
  width: 1.9,
  height: 2.3,
  dimensions: "5200x1900x2300 mm",
  type: "xe-tai",
  isNew: false,
  isHot: false,
  origin: "Việt Nam",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
  ],
  boxType: "bạt",
  description: "Xe tải VEAM VPT350 thùng bạt linh hoạt, phù hợp cho vận chuyển hàng hóa có kích thước lớn và cần dễ dàng bốc xếp.",
  detailedDescription: `VEAM VPT350 Thùng Bạt là sản phẩm xe tải "made in Vietnam" được phát triển để phù hợp với nhu cầu và điều kiện sử dụng tại thị trường Việt Nam. Với thiết kế thùng bạt linh hoạt, xe đặc biệt phù hợp cho vận chuyển các loại hàng hóa có kích thước lớn, cồng kềnh và cần sự tiện lợi trong bốc xếp.

Động cơ Hyundai D4AL dung tích 2.497L, công suất 110 mã lực được VEAM lựa chọn và tối ưu hóa cho khí hậu nhiệt đới Việt Nam. Mặc dù không có công suất cao nhất trong phân khúc, nhưng động cơ này nổi tiếng với độ bền bỉ và khả năng vận hành ổn định trong điều kiện khắc nghiệt.

Thùng bạt với khung thép cố định và bạt PVC dày 0.5mm có thể dễ dàng mở cả hai bên và phía sau, tạo điều kiện thuận lợi tối đa cho việc bốc xếp hàng hóa. Sàn thùng được lót gỗ chống trượt, giúp bảo vệ hàng hóa và dễ dàng vệ sinh sau mỗi chuyến chở.

Cabin được thiết kế đơn giản nhưng tiện dụng với ghế ngồi thoải mái và các trang bị cần thiết. Với lợi thế về giá thành, dịch vụ bảo hành tại Việt Nam và phụ tùng dễ tìm, VEAM VPT350 là lựa chọn kinh tế cho các doanh nghiệp vừa và nhỏ.`,
  features: [
    "Thùng bạt linh hoạt",
    "Giá thành hợp lý",
    "Phù hợp vận chuyển hàng cồng kềnh",
    "Bảo hành tại Việt Nam"
  ],
  engineModel: "Hyundai D4AL",
  engineCapacity: "2.497L",
  enginePower: "110 HP",
  fuel: "Dầu Diesel",
  transmission: "Số sàn 5 cấp",
  wheelbase: 2850,
  wheelbaseText: "2.850 mm",
  tarpaulinBox: {
    frameStructure: "Khung thép",
    tarpaulinMaterial: "Bạt PVC",
    tarpaulinThickness: "0.5mm",
    frameType: "Khung cố định",
    sideAccess: true,
    coverType: "Mui bạt",
    floorMaterial: "Gỗ chống trượt"
  }
};
