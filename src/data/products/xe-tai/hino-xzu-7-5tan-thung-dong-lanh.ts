
import { Truck } from '@/models/TruckTypes';

export const hinoXzu75TanThungDongLanh: Truck = {
  id: "xe-tai-hino-xzu-7-5tan-thung-dong-lanh",
  name: "HINO XZU 7.5 Tấn Thùng Đông Lạnh",
  slug: "hino-xzu-7-5tan-thung-dong-lanh",
  brand: "HINO",
  price: 1250000000,
  priceText: "1.250.000.000 VNĐ",
  weightText: "7.5 tấn",
  weight: 7.5,
  length: 6.2,
  width: 2.1,
  height: 2.4,
  dimensions: "6200x2100x2400 mm",
  type: "xe-tai",
  isNew: true,
  isHot: true,
  origin: "Nhật Bản",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
  ],
  boxType: "đông-lạnh",
  description: "Xe tải HINO XZU 7.5 tấn thùng đông lạnh với công nghệ làm lạnh hiện đại, phù hợp cho vận chuyển thực phẩm tươi sống và đông lạnh.",
  detailedDescription: `HINO XZU 7.5 Tấn Thùng Đông Lạnh đại diện cho đỉnh cao công nghệ vận chuyển lạnh của Nhật Bản, được thiết kế đặc biệt để đáp ứng nhu cầu vận chuyển thực phẩm tươi sống, đông lạnh và dược phẩm với tiêu chuẩn an toàn cao nhất.

Khung gầm HINO XZU với động cơ J05E-TP dung tích 4.009L, công suất 150 mã lực mang lại hiệu suất vận hành ổn định và tiết kiệm nhiên liệu. Động cơ đạt tiêu chuẩn Euro 4 với công nghệ phun nhiên liệu Common Rail và turbo tăng áp, đảm bảo hoạt động êm ái và thân thiện môi trường.

Thùng đông lạnh được chế tạo theo cấu trúc 3 lớp với lõi cách nhiệt Polyurethane dày 80mm, lớp ngoài tôn mạ kẽm chống ăn mòn và lớp trong inox 304 đảm bảo vệ sinh thực phẩm. Hệ thống này có khả năng duy trì nhiệt độ từ -18°C đến +10°C trong thời gian dài.

Hệ thống làm lạnh Carrier Xarios 300 với máy nén hermetic và môi chất lạnh R134a thân thiện môi trường. Hệ thống điều khiển số cho phép thiết lập và giám sát nhiệt độ chính xác, đảm bảo chất lượng hàng hóa luôn được duy trì ở mức tối ưu.

Với chứng nhận đạt tiêu chuẩn vận chuyển thực phẩm và dược phẩm, HINO XZU Thùng Đông Lạnh là lựa chọn tin cậy cho các doanh nghiệp trong ngành thực phẩm và y tế.`,
  features: [
    "Thùng đông lạnh công nghệ Nhật Bản",
    "Hệ thống làm lạnh mạnh mẽ",
    "Cách nhiệt 3 lớp chuyên dụng",
    "Động cơ tiết kiệm nhiên liệu",
    "Hệ thống phanh ABS"
  ],
  engineModel: "J05E-TP",
  engineCapacity: "4.009L",
  enginePower: "150 HP tại 2.500 rpm",
  engineTorque: "420 Nm tại 1.400-2.500 rpm",
  emissionStandard: "Euro 4",
  fuel: "Dầu Diesel",
  transmission: "Số sàn 6 cấp",
  wheelbase: 3815,
  wheelbaseText: "3.815 mm",
  coolingBox: {
    wallLayers: 3,
    wallMaterials: ["Tôn mạ kẽm", "Polyurethane", "Inox 304"],
    floorLayers: 3,
    floorMaterials: ["Tôn chống trượt", "Cách nhiệt PU", "Inox 304"],
    roofLayers: 3,
    roofMaterials: ["Tôn mạ kẽm", "Polyurethane", "Inox 304"],
    doorType: "Cửa mở sau",
    insulationThickness: "80mm",
    temperatureRange: "-18°C đến +10°C",
    coolingUnit: "Carrier Xarios 300",
    compressorType: "Hermetic",
    refrigerantType: "R134a",
    temperatureControl: "Điều khiển số",
    doorCount: 1,
    insideHeight: 1850,
    insideWidth: 2050,
    insideLength: 4300
  }
};
