
import { Truck } from '@/models/TruckTypes';

export const doosungXitecXangDau: Truck = {
  id: "mooc-doosung-xitec-xang-dau",
  name: "DOOSUNG Xitec Xăng Dầu",
  slug: "doosung-xitec-xang-dau",
  brand: "DOOSUNG",
  price: 1200000000,
  priceText: "1.200.000.000 VNĐ",
  weightText: "35 tấn",
  weight: 35,
  length: 12.5,
  width: 2.5,
  height: 3.8,
  dimensions: "12500x2500x3800 mm",
  type: "mooc",
  trailerType: "xi-téc",
  thumbnailUrl: "https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop",
  images: ["https://images.unsplash.com/photo-1558618047-f2c57e73c83c?w=800&h=600&fit=crop"],
  description: "Mooc xitec DOOSUNG chuyên chở xăng dầu với hệ thống an toàn cao, tuân thủ các quy định về vận chuyển chất nguy hiểm.",
  detailedDescription: `DOOSUNG Xitec Xăng Dầu là mooc xi téc cao cấp được thiết kế theo tiêu chuẩn quốc tế nghiêm ngặt để vận chuyển xăng dầu và các chất lỏng dễ cháy với độ an toàn tuyệt đối. Với công nghệ Hàn Quốc tiên tiến, đây là lựa chọn hàng đầu cho các doanh nghiệp lớn trong ngành nhiên liệu.

Bồn chứa được chế tạo từ thép carbon chuyên dụng dày 8mm với cấu trúc được thiết kế và kiểm tra theo tiêu chuẩn ADR châu Âu. Bồn được chia thành 4 ngăn độc lập với hệ thống vách ngăn chắc chắn, cho phép vận chuyển nhiều loại nhiên liệu khác nhau một cách an toàn.

Hệ thống an toàn toàn diện bao gồm hệ thống chống tĩnh điện tiên tiến, van khẩn cấp tự động, hệ thống giám sát áp suất và nhiệt độ liên tục. Tất cả các thiết bị đều được chứng nhận ATEX và tuân thủ các quy định nghiêm ngặt về vận chuyển chất nguy hiểm.

Hệ thống bơm nhiên liệu cao cấp với động cơ chống cháy nổ và hệ thống điều khiển tự động, cho phép bơm nhiên liệu nhanh chóng và chính xác. Hệ thống đo lường điện tử với độ chính xác cao giúp kiểm soát chặt chẽ lượng nhiên liệu.

Với chất lượng Hàn Quốc và hệ thống an toàn toàn diện, DOOSUNG Xitec là lựa chọn tin cậy cho các tập đoàn dầu khí, công ty phân phối nhiên liệu lớn và các doanh nghiệp cần đảm bảo an toàn tuyệt đối trong vận chuyển nhiên liệu.`,
  features: ["Chuyên chở xăng dầu", "Hệ thống an toàn cao", "Chống cháy nổ", "Tuân thủ quy định ATGT"],
  origin: "Hàn Quốc",
  tankSpec: {
    capacity: 42000,
    capacityText: "42.000 lít",
    compartments: 4,
    material: "Thép carbon chuyên dụng",
    safetyEquipment: "Hệ thống chống tĩnh điện, van khẩn cấp"
  }
};
