
import { Truck } from '@/models/TruckTypes';

export const hyundaiH150ThungBaoOn: Truck = {
  id: "xe-tai-hyundai-h150-thung-bao-on",
  name: "Hyundai H150 Thùng Bảo Ôn",
  slug: "hyundai-h150-thung-bao-on",
  brand: "Hyundai",
  price: 420000000,
  priceText: "420.000.000 VNĐ",
  weightText: "1.5 tấn",
  weight: 1.5,
  length: 3.5,
  width: 1.7,
  height: 1.9,
  dimensions: "3500x1700x1900 mm",
  type: "xe-tai",
  isNew: false,
  isHot: true,
  origin: "Hàn Quốc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618047-fcd48c2cd2d4?w=800&h=600&fit=crop"
  ],
  boxType: "bảo-ôn",
  description: "Xe tải Hyundai H150 thùng bảo ôn nhỏ gọn, phù hợp cho vận chuyển thực phẩm và hàng hóa cần bảo quản nhiệt độ trong thành phố.",
  detailedDescription: `Hyundai H150 Thùng Bảo Ôn là giải pháp vận chuyển lý tưởng cho các doanh nghiệp kinh doanh thực phẩm tươi sống, dược phẩm và các sản phẩm cần duy trì nhiệt độ ổn định. Với kích thước nhỏ gọn và khả năng bảo quản nhiệt độ hiệu quả, xe đặc biệt phù hợp cho phân phối hàng hóa trong đô thị.

Khung gầm Hyundai H150 với động cơ D4GA dung tích 2.497L, công suất 130 mã lực mang lại sự ổn định và tin cậy đã được chứng minh. Hệ thống nhiên liệu Common Rail kết hợp với turbo tăng áp đảm bảo hiệu suất vận hành tối ưu và tiết kiệm nhiên liệu.

Thùng bảo ôn được thiết kế với cấu trúc 3 lớp: tôn mạ kẽm bên ngoài, lớp cách nhiệt Polyurethane dày 50mm ở giữa và inox 304 bên trong. Hệ thống này có khả năng duy trì nhiệt độ từ -5°C đến +25°C trong thời gian dài mà không cần hệ thống làm lạnh chủ động.

Cửa thùng được thiết kế kín khít với gioăng cao su chuyên dụng, ngăn chặn sự trao đổi nhiệt với môi trường bên ngoài. Sàn và tường thùng được làm từ inox 304 dễ vệ sinh và đảm bảo vệ sinh an toàn thực phẩm. Với giá thành hợp lý và dịch vụ hậu mãi tốt, H150 Thùng Bảo Ôn là lựa chọn tin cậy cho doanh nghiệp thực phẩm.`,
  features: [
    "Thùng bảo ôn cách nhiệt tốt",
    "Kích thước nhỏ gọn, linh hoạt",
    "Tiết kiệm nhiên liệu",
    "Bảo hành chính hãng"
  ],
  engineModel: "D4GA",
  engineCapacity: "2.497L",
  enginePower: "130 HP",
  fuel: "Dầu Diesel",
  transmission: "Số sàn 5 cấp",
  wheelbase: 2435,
  wheelbaseText: "2.435 mm",
  insulatedBox: {
    wallThickness: "50mm",
    floorThickness: "50mm",
    roofThickness: "50mm",
    insulationMaterial: "Polyurethane",
    outerMaterial: "Tôn mạ kẽm",
    innerMaterial: "Inox 304",
    doorType: "Cửa mở sau",
    doorCount: 1,
    temperatureRange: "-5°C đến +25°C"
  }
};
