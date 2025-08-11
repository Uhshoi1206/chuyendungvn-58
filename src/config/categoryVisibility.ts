import { VehicleType, Truck } from '@/models/TruckTypes';

export type CategoryKey = VehicleType;

// Cấu hình bật/tắt danh mục sản phẩm
// true: hiển thị, false: ẩn
export const categoryVisibility: Record<CategoryKey, boolean> = {
  'xe-tai': true,
  'xe-cau': true,
  'mooc': true,
  'dau-keo': true,
};

export const isTypeEnabled = (type: VehicleType): boolean => categoryVisibility[type] !== false;

export const getEnabledTypes = (): VehicleType[] =>
  (['xe-tai', 'xe-cau', 'mooc', 'dau-keo'] as VehicleType[]).filter(isTypeEnabled);

export const filterVisibleTrucks = <T extends Truck>(list: T[]): T[] =>
  list.filter(item => isTypeEnabled(item.type));
