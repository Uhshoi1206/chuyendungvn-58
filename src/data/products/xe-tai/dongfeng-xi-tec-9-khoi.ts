
import { Truck } from '@/models/TruckTypes';

export const dongfengXiTec9Khoi: Truck = {
  id: "xe-tai-dongfeng-xi-tec-9-khoi",
  name: "Dongfeng Xi Téc 9 Khối",
  slug: "dongfeng-xi-tec-9-khoi",
  brand: "Dongfeng",
  price: 780000000,
  priceText: "780.000.000 VNĐ",
  weightText: "6 tấn",
  weight: 6,
  length: 6.8,
  width: 2.1,
  height: 2.8,
  dimensions: "6800x2100x2800 mm",
  type: "xe-tai",
  isNew: false,
  isHot: true,
  origin: "Trung Quốc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop"
  ],
  boxType: "xi-téc",
  description: "Xe tải Dongfeng xi téc 9 khối chuyên chở xăng dầu với hệ thống an toàn cao, đạt tiêu chuẩn vận chuyển nhiên liệu.",
  detailedDescription: `Dongfeng Xi Téc 9 Khối là giải pháp vận chuyển nhiên liệu kinh tế và hiệu quả, được thiết kế đặc biệt để đáp ứng nhu cầu phân phối xăng dầu cho các cửa hàng xăng dầu nhỏ và vừa. Với dung tích 9.000 lít và giá thành cạnh tranh, đây là lựa chọn phù hợp cho các doanh nghiệp cần tối ưu hóa chi phí đầu tư.

Động cơ YC4D130-50 dung tích 3.856L, công suất 130 mã lực được thiết kế theo tiêu chuẩn Euro 3, mang lại hiệu suất vận hành ổn định và tiết kiệm nhiên liệu. Hệ thống phun nhiên liệu Common Rail giúp tối ưu hóa quá trình đốt cháy và giảm khí thải.

Bồn xi téc được chế tạo từ thép carbon dày 6mm, chia thành 3 ngăn độc lập để vận chuyển các loại nhiên liệu khác nhau. Hệ thống van khẩn cấp, thiết bị chống tĩnh điện và bơm ly tâm chuyên dụng đảm bảo an toàn tuyệt đối trong quá trình vận chuyển và bốc xếp nhiên liệu.

Cabin được trang bị các thiết bị an toàn cần thiết như bình cứu hỏa, cát chống cháy và hệ thống cảnh báo khí độc. Với chứng nhận đầy đủ về an toàn vận chuyển chất nguy hiểm và giá thành hợp lý, Dongfeng Xi Téc 9 Khối là lựa chọn thông minh cho doanh nghiệp kinh doanh nhiên liệu.`,
  features: [
    "Xi téc chuyên chở xăng dầu",
    "Hệ thống an toàn chống cháy nổ",
    "Tuân thủ quy định ATGT",
    "Giá cạnh tranh"
  ],
  engineModel: "YC4D130-50",
  engineCapacity: "3.856L",
  enginePower: "130 HP",
  fuel: "Dầu Diesel",
  transmission: "Số sàn 6 cấp",
  wheelbase: 3800,
  wheelbaseText: "3.800 mm",
  tankSpec: {
    capacity: 9000,
    capacityText: "9.000 lít",
    compartments: 3,
    material: "Thép carbon",
    thickness: "6mm",
    valveSystem: "Van khẩn cấp",
    pressureRating: "0.3 MPa",
    dischargingSystem: "Bơm ly tâm",
    safetyEquipment: "Hệ thống chống tĩnh điện"
  }
};
