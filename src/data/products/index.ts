
import { Truck } from '@/models/TruckTypes';
import { xeTaiProducts } from './xe-tai';
import { xeCauProducts } from './xe-cau';
import { moocProducts } from './mooc';
import { dauKeoProducts } from './dau-keo';

// Export tất cả sản phẩm
export const allProducts: Truck[] = [
  ...xeTaiProducts,
  ...xeCauProducts,
  ...moocProducts,
  ...dauKeoProducts
];

// Export theo từng loại để dễ sử dụng
export const trucks = allProducts;

// Export các danh mục riêng - hiển thị tất cả sản phẩm thay vì giới hạn
export const featuredTrucks = xeTaiProducts; // Hiển thị tất cả 14 xe tải
export const specializedCranes = xeCauProducts; // Hiển thị tất cả xe cẩu
export const semiTrailers = moocProducts; // Hiển thị tất cả sơ mi rơ mooc
export const tractors = dauKeoProducts; // Hiển thị tất cả xe đầu kéo

// Export thông tin trọng lượng (giữ nguyên từ file cũ)
export const truckWeights = [
  {
    id: 1,
    name: "Dưới 1 tấn",
    minWeight: 0,
    maxWeight: 1
  },
  {
    id: 2,
    name: "1 - 2 tấn",
    minWeight: 1,
    maxWeight: 2
  },
  {
    id: 3,
    name: "2 - 3.5 tấn",
    minWeight: 2,
    maxWeight: 3.5
  },
  {
    id: 4,
    name: "3.5 - 5 tấn",
    minWeight: 3.5,
    maxWeight: 5
  },
  {
    id: 5,
    name: "5 - 8 tấn",
    minWeight: 5,
    maxWeight: 8
  },
  {
    id: 6,
    name: "8 - 15 tấn",
    minWeight: 8,
    maxWeight: 15
  },
  {
    id: 7,
    name: "15 - 20 tấn",
    minWeight: 15,
    maxWeight: 20
  },
  {
    id: 8,
    name: "Trên 20 tấn",
    minWeight: 20,
    maxWeight: 100
  }
];

// Export thương hiệu (giữ nguyên từ file cũ)
export const truckBrands = [
  { id: 1, name: "Hyundai" },
  { id: 2, name: "Isuzu" },
  { id: 3, name: "HINO" },
  { id: 4, name: "Dongfeng" },
  { id: 5, name: "Thaco" },
  { id: 6, name: "Kia" },
  { id: 7, name: "Suzuki" },
  { id: 8, name: "VEAM" },
  { id: 9, name: "Soosan" },
  { id: 10, name: "DOOSUNG" },
  { id: 11, name: "CIMC" },
  { id: 12, name: "KOKSAN" },
  { id: 13, name: "HOWO" }
];

export { xeTaiProducts, xeCauProducts, moocProducts, dauKeoProducts };
