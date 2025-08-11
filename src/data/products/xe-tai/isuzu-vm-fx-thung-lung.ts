
import { Truck } from '@/models/TruckTypes';

export const isuzuVmFxThungLung: Truck = {
  id: "xe-tai-isuzu-vm-fx-thung-lung",
  name: "Isuzu VM FX Thùng Lửng",
  slug: "isuzu-vm-fx-thung-lung",
  brand: "Isuzu",
  price: 950000000,
  priceText: "950.000.000 VNĐ",
  weightText: "8.2 tấn",
  weight: 8.2,
  length: 7.2,
  width: 2.3,
  height: 2.5,
  dimensions: "7200x2300x2500 mm",
  type: "xe-tai",
  isNew: true,
  isHot: false,
  origin: "Nhật Bản",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"
  ],
  boxType: "lửng",
  description: "Xe tải Isuzu VM FX thùng lửng chuyên dụng, phù hợp cho vận chuyển container, máy móc và hàng hóa có trọng lượng lớn.",
  detailedDescription: `Isuzu VM FX Thùng Lửng là mẫu xe tải trung tải được thiết kế chuyên dụng cho vận chuyển container, máy móc hạng nặng và các loại hàng hóa có kích thước lớn. Với sàn thùng thấp và thành bên có thể gập, xe mang lại sự linh hoạt tối đa trong việc xếp dỡ hàng hóa.

Động cơ 6HK1-TCN dung tích 7.790L, công suất 240 mã lực là một trong những động cơ mạnh mẽ nhất trong phân khúc xe tải trung tải. Công nghệ Isuzu Common Rail kết hợp với turbo tăng áp và làm mát khí nạp mang lại hiệu suất vượt trội, tiết kiệm nhiên liệu và độ tin cậy cao.

Thùng lửng được chế tạo từ thép chất lượng cao với sàn dày 4mm và hệ thống dầm thép chữ I gia cường. Thành bên cao 400mm có thể gập xuống cả hai bên, tạo điều kiện thuận lợi cho việc sử dụng cần cẩu bốc xếp hàng hóa. Hệ thống cố định hàng được thiết kế chuyên nghiệp đảm bảo an toàn trong vận chuyển.

Cabin Isuzu VM được thiết kế theo tiêu chuẩn Nhật Bản với không gian rộng rãi, ghế ngồi thoải mái và hệ thống điều khiển dễ sử dụng. Hệ thống phanh khí nén kết hợp với ABS đảm bảo an toàn tuyệt đối khi vận chuyển tải trọng lớn.`,
  features: [
    "Thùng lửng chịu tải cao",
    "Động cơ Isuzu mạnh mẽ",
    "Khung gầm chắc chắn",
    "Phù hợp vận chuyển container"
  ],
  engineModel: "6HK1-TCN",
  engineCapacity: "7.790L",
  enginePower: "240 HP",
  fuel: "Dầu Diesel",
  transmission: "Số sàn 6 cấp",
  wheelbase: 4175,
  wheelbaseText: "4.175 mm",
  flatbedBox: {
    floorMaterial: "Thép",
    sideHeight: "400mm",
    sideType: "Thành bên có thể gập",
    sideAccess: "Cả hai bên",
    floorThickness: "4mm",
    reinforcement: "Dầm thép chữ I"
  }
};
