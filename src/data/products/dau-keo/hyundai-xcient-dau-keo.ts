
import { Truck } from '@/models/TruckTypes';

// Import hình ảnh thực tế của sản phẩm
import hyundaiXcientImg1 from '@/assets/hyundai-xcient-dau-keo-1.jpg';
import hyundaiXcientImg2 from '@/assets/hyundai-xcient-dau-keo-2.jpg';
import hyundaiXcientImg3 from '@/assets/hyundai-xcient-dau-keo-3.jpg';
import hyundaiXcientImg4 from '@/assets/hyundai-xcient-dau-keo-4.jpg';
import hyundaiXcientImg5 from '@/assets/hyundai-xcient-dau-keo-5.jpg';
import hyundaiXcientImg6 from '@/assets/hyundai-xcient-dau-keo-6.jpg';
import hyundaiXcientImg7 from '@/assets/hyundai-xcient-dau-keo-7.jpg';

export const hyundaiXcientDauKeo: Truck = {
  id: "dau-keo-hyundai-xcient-dau-keo",
  name: "Hyundai Xcient Đầu Kéo",
  slug: "hyundai-xcient-dau-keo",
  brand: "Hyundai",
  price: 1850000000,
  priceText: "1.850.000.000 VNĐ",
  weightText: "40 tấn kéo",
  weight: 40,
  length: 6.2,
  width: 2.5,
  height: 3.2,
  dimensions: "6200x2500x3200 mm",
  type: "dau-keo",
  isNew: true,
  isHot: true,
  origin: "Hàn Quốc",
  thumbnailUrl: hyundaiXcientImg1,
  images: [
    hyundaiXcientImg1,
    hyundaiXcientImg2,
    hyundaiXcientImg3,
    hyundaiXcientImg4,
    hyundaiXcientImg5,
    hyundaiXcientImg6,
    hyundaiXcientImg7
  ],
  description: "Xe đầu kéo Hyundai Xcient với công nghệ châu Âu hiện đại, sức kéo mạnh mẽ, phù hợp vận chuyển container và mooc hạng nặng.",
  detailedDescription: `
    <h2 id="tong-quan-xe-dau-keo-hyundai-xcient">Tổng Quan Xe Đầu Kéo Hyundai Xcient</h2>
    <p><strong>Xe đầu kéo Hyundai Xcient</strong> Hàn Quốc là dòng xe cao cấp được nhập khẩu hoàn toàn từ Hàn Quốc, được thiết kế với công nghệ dẫn đầu ngành cơ khí ô tô hiện nay. Sản phẩm này có những tính năng nổi bật thu hút sự quan tâm, và đặt niềm tin để chọn lựa sản phẩm này cho nhu cầu vận chuyển hàng hoá đường dài.</p>

    <div style="text-align: center; margin: 20px 0;">
      <img src="https://hyundainamphat.com.vn/images/DAU%20KEO%20XCIENT/%C4%90%E1%BA%A7u%20k%C3%A9o%20xcient/daukeo_hyundai_xcient_0.jpg" alt="Xe đầu kéo Hyundai Xcient" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
    </div>

    <h3 id="ngoai-that-hien-dai">Ngoại Thất Hiện Đại</h3>
    <p>Xe đầu kéo Hyundai Xcient Hàn Quốc được thiết kế đột phá kiểu dáng khí động học so với các mẫu trước đây, kính chắn gió được cải tiến với độ nghiêng phù hợp và tầm nhìn rộng. Xe được bổ sung các hốc gió góc giảm tối đa bụi bẩn bám vào. Cản rộng và lớn hơn tích hợp cùng các hốc gió hai bên giúp cản sức gió và tiếng ồn và tiết kiệm nhiên liệu.</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <img src="https://hyundainamphat.com.vn/images/DAU%20KEO%20XCIENT/%C4%90%E1%BA%A7u%20k%C3%A9o%20xcient/Hyundai_xcient_h%C3%A0n_qu%E1%BB%91c.jpg" alt="Ngoại thất xe đầu kéo Hyundai Xcient" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
    </div>
    
    <p>Xcient tạo ra một bản sắc riêng mang mẫu thiết kế sang trọng với sự phối hợp màu trên gương chiếu hậu, tấm che nắng, hoa văn bên hông và tấm chắn bùn tạo nên một tổng thể hài hoà đẹp mắt.</p>
    
    <p>Gương chiếu hậu được thiết kế lớn hơn cải thiện tầm nhìn, giảm bớt điểm mù, và giảm được sự tích nước trên mặt gương nhờ vào kiểu dáng khí động học. Dầm được thiết kế có cấu trúc mạnh mẽ cùng vật liệu thép cường độ cao, mang lại độ bền dưới bất kỳ điều kiện đường xá nào.</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
      <img src="http://hyundainamphat.com.vn/images/Xcient/Ngoai%20That/den_truoc_ben_xcient.jpg" alt="Đèn trước xe Hyundai Xcient" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <img src="http://hyundainamphat.com.vn/images/Xcient/Ngoai%20That/ngoai_that_ben_xcient_3_chan.jpg" alt="Cabin xe Hyundai Xcient" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
    </div>

    <h3 id="noi-that-cao-cap">Nội Thất Cao Cấp</h3>
    <p>Cabin xe đầu kéo Hyundai Xcient Hàn Quốc có thiết kế cực kỳ thông minh. Cabin được thiết kế cao và dài hơn so với cabin xe tiêu chuẩn (cao hơn 225 mm và dài hơn 175 mm) giúp tài xế có thể trải nghiệm sự tiện nghi và thoải mái với không gian rộng rãi hơn. Xe còn được trang bị kết nối trả lời điện thoại bằng Bluetooth giúp tài xế rảnh tay và dễ tập trung vào lái xe.</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <img src="http://hyundainamphat.com.vn/images/Xcient/Noi%20That%201/noi_that_ben_xcient.jpg" alt="Nội thất xe đầu kéo Hyundai Xcient" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
    </div>
    
    <p>Giường ngủ lớn được trang bị với nhiều sự tiện nghi. Giường rộng rãi và thoải mái, mang lại cảm giác dễ chịu và thư giãn sau nhiều giờ lái xe. Ghế tài xế là ghế hơi đa chức năng rộng rãi, được thiết kế kiểu mới có sưởi ấm lạnh, bọc da, có dây an toàn.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
      <img src="http://hyundainamphat.com.vn/images/Xcient/Noi%20That%201/noi_that_xe_ben_hyundai_xcient_3%20-%20Copy%2013.jpg" alt="Ghế lái xe Hyundai Xcient" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <img src="http://hyundainamphat.com.vn/images/Xcient/Noi%20That%201/noi_that_xe_ben_hyundai_xcient_3%20-%20Copy%2014.jpg" alt="Bảng điều khiển xe Hyundai Xcient" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <img src="http://hyundainamphat.com.vn/images/Xcient/Noi%20That%201/noi_that_xe_ben_hyundai_xcient_3%20-%20Copy%2015.jpg" alt="Giường ngủ xe Hyundai Xcient" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <img src="http://hyundainamphat.com.vn/images/Xcient/Noi%20That%201/noi_that_xe_ben_hyundai_xcient_3%20-%20Copy%2016.jpg" alt="Tiện nghi nội thất xe Hyundai Xcient" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
    </div>
    
    <p>Bảng taplo cùng các công tắc điều khiển được sắp xếp gọn trong tầm tay, giúp thao tác thuận tiện, trang bị âm thanh, màn hình đa chức năng, công tắc hành trình tạo thêm tiện nghi cho người lái.</p>
    
    <p>Tay lái kiểu ống lồng và nghiêng, tấm che nắng có thể cuộn lại được phía trước và được điều khiển tự động, có cửa sổ trời nếu muốn nguồn gió tự nhiên từ bên ngoài. Ngoài ra còn được trang bị máy tạo khí ion để khử mùi và khử trùng trong cabin.</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
      <img src="http://hyundainamphat.com.vn/images/Xcient/Noi%20That%201/noi_that_xe_ben_hyundai_xcient_3%20-%20Copy%209.jpg" alt="Vô lăng xe Hyundai Xcient" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <img src="http://hyundainamphat.com.vn/images/Xcient/Noi%20That%201/noi_that_xe_ben_hyundai_xcient_3%20-%20Copy%2010.jpg" alt="Bảng điều khiển trung tâm" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <img src="http://hyundainamphat.com.vn/images/Xcient/Noi%20That%201/noi_that_xe_ben_hyundai_xcient_3%20-%20Copy%201.jpg" alt="Không gian nội thất rộng rãi" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <img src="http://hyundainamphat.com.vn/images/Xcient/Noi%20That%201/noi_that_xe_ben_hyundai_xcient_3%20-%20Copy%2012.jpg" alt="Hệ thống giải trí" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
    </div>

    <h3 id="dong-co-tien-tien">Động Cơ Tiên Tiến</h3>
    <p>Hyundai Xcient sử dụng động cơ hiện đại nhất, tiết kiệm nhiên liệu đến 7% so với các động cơ cùng công suất. Động cơ D6CF36E4 được sản xuất với công nghệ Hyundai với công suất 302kw tại 1800 vòng/phút có tăng áp turbo cho phép xe đạt vận tốc tối đa 115km/h.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
      <img src="http://hyundainamphat.com.vn/images/Xcient/Dong%20Co/dong_co_ben_xcient_1_.jpg" alt="Động cơ Hyundai Xcient" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <img src="http://hyundainamphat.com.vn/images/Xcient/Dong%20Co/dong_co_ben_xcient_2_.jpg" alt="Chi tiết động cơ" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <img src="http://hyundainamphat.com.vn/images/Xcient/Dong%20Co/dong_co_ben_xcient_3_.jpg" alt="Hệ thống turbo" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <img src="http://hyundainamphat.com.vn/images/Xcient/Dong%20Co/dong_co_ben_xcient_4_.jpg" alt="Công nghệ động cơ tiên tiến" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
    </div>
    
    <p>Sử dụng hộp số Hyundai-Daymos 12 số tiến 2 số lùi. Hệ thống phanh hơi lốc kê làm giảm giá thành bảo dưỡng xe, nâng cao được tính an toàn, và tuổi thọ phanh cao hơn so với những loại khác.</p>

    <div style="text-align: center; margin: 20px 0;">
      <img src="https://hyundainamphat.com.vn/images/DAU%20KEO%20XCIENT/%C4%90%E1%BA%A7u%20k%C3%A9o%20xcient/dau_keo_xcient_hyundai_7_.jpg" alt="Xe đầu kéo Hyundai Xcient trên đường" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
    </div>

    <h3 id="do-ben-va-tin-cay">Độ Bền Và Tin Cậy</h3>
    <p>Xe đầu kéo Hyundai Xcient là thương hiệu nổi tiếng về độ bền giúp xe vận hành và chịu lực tốt với các điều kiện đường xá ở Việt Nam. Với thiết kế mạnh mẽ, khách hàng có thể yên tâm khi dùng xe đầu kéo Hyundai Xcient cao cấp để vận chuyển hàng hoá trên mọi cung đường kể cả những địa hình phức tạp.</p>

    <h3 id="ung-dung-va-hieu-qua">Ứng Dụng Và Hiệu Quả</h3>
    <p>Xe đầu kéo Hyundai Xcient phù hợp cho việc vận chuyển container, hàng hóa hạng nặng trên các tuyến đường dài. Với khả năng kéo tối đa 39 tấn và công nghệ tiên tiến, Xcient đảm bảo hiệu quả vận chuyển cao và tiết kiệm chi phí vận hành.</p>
  `,
  features: [
    "Sức kéo 40 tấn mạnh mẽ",
    "Công nghệ châu Âu tiên tiến", 
    "Cabin cao cấp đầy đủ tiện nghi",
    "Hệ thống an toàn toàn diện"
  ],
  tractorSpec: {
    horsepower: 410,
    torque: "2000 Nm",
    transmission: "Số tự động 12 cấp",
    transmissionType: "AMT",
    clutchType: "Khô đơn",
    cabinType: "Cabin ngủ cao cấp",
    wheelbase: 3800,
    fuelTankCapacity: 400,
    fuelTankCapacityText: "400 lít",
    saddleHeight: 1150,
    fifthWheelType: "JOST 3.5 inch",
    maxTowingCapacity: 40000,
    maxTowingCapacityText: "40 tấn",
    brakingSystem: "Phanh khí nén với EBS",
    retarderSystem: "Có",
    sleepingBerth: true,
    axleConfiguration: "6x4",
    interiorFeatures: ["Điều hòa tự động", "Ghế khí nén", "Tủ lạnh", "Giường ngủ"],
    airConditioner: true,
    electricSystem: "24V"
  }
};
