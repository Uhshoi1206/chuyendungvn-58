import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, MessageCircle, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import AddressRegions from './AddressRegions';
import { addressRegions } from '@/data/addressData';
import { useToast } from './ui/use-toast';
import { submitToGoogleSheets, ContactData } from '@/services/googleSheetsService';

const Footer: React.FC = () => {
  const { toast } = useToast();
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone.trim()) {
      toast({
        title: "Vui lòng nhập số điện thoại!",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const contactData: ContactData = {
        timestamp: new Date().toLocaleString('vi-VN'),
        source: 'footer',
        phone: phone,
        message: 'Yêu cầu gọi lại'
      };

      const success = await submitToGoogleSheets(contactData);
      
      if (success) {
        toast({
          title: "Gửi thành công!",
          description: "Chúng tôi sẽ gọi lại cho bạn trong thời gian sớm nhất.",
        });
        
        setPhone('');
      } else {
        throw new Error('Gửi thất bại');
      }
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra!",
        description: "Vui lòng thử lại sau hoặc gọi trực tiếp hotline.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">ChuyenDungVN</h3>
            <p className="mb-4 text-gray-300">
              Chuyên cung cấp xe tải, xe đầu kéo, xe cẩu và sơ mi rơ mooc chính hãng.
              Đa dạng tải trọng và mẫu mã, giá cả cạnh tranh trên thị trường.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <a
                  href="tel:0764678901"
                  className="hover:underline font-semibold text-white"
                  aria-label="Gọi ngay: 0764678901"
                >
                  0764678901
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>contact@chuyendungvn.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/gioi-thieu" className="text-gray-300 hover:text-primary transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="text-gray-300 hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Tin tức
                </Link>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link to="/danh-muc-bai-viet/tin-tuc-nganh-van-tai" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      Tin Tức Ngành Vận Tải
                    </Link>
                  </li>
                  <li>
                    <Link to="/danh-muc-bai-viet/danh-gia-xe" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      Đánh Giá Xe
                    </Link>
                  </li>
                  <li>
                    <Link to="/danh-muc-bai-viet/kinh-nghiem-lai-xe" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      Kinh Nghiệm Lái Xe
                    </Link>
                  </li>
                  <li>
                    <Link to="/danh-muc-bai-viet/bao-duong" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      Bảo Dưỡng
                    </Link>
                  </li>
                  <li>
                    <Link to="/danh-muc-bai-viet/tu-van-mua-xe" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      Tư Vấn Mua Xe
                    </Link>
                  </li>
                  <li>
                    <Link to="/danh-muc-bai-viet/cong-nghe-doi-moi" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      Công Nghệ & Đổi Mới
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Vehicle Categories */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Danh mục xe</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/danh-muc-xe?type=xe-tai" className="text-gray-300 hover:text-primary transition-colors">
                  Xe Tải
                </Link>
              </li>
              <li>
                <Link to="/danh-muc-xe?type=xe-cau" className="text-gray-300 hover:text-primary transition-colors">
                  Xe Cẩu
                </Link>
              </li>
              <li>
                <Link to="/danh-muc-xe?type=mooc" className="text-gray-300 hover:text-primary transition-colors">
                  Sơ Mi Rơ Mooc
                </Link>
              </li>
              <li>
                <Link to="/danh-muc-xe?type=dau-keo" className="text-gray-300 hover:text-primary transition-colors">
                  Xe Đầu Kéo
                </Link>
              </li>
            </ul>
            
            {/* Phân cách và Tiện ích */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="font-heading text-lg font-bold mb-3 text-primary-100">Tiện ích</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/so-sanh-xe" className="text-gray-300 hover:text-primary transition-colors">
                    So sánh xe
                  </Link>
                </li>
                <li>
                  <Link to="/du-toan-chi-phi" className="text-gray-300 hover:text-primary transition-colors">
                    Dự toán chi phí
                  </Link>
                </li>
                <li>
                  <Link to="/tinh-lai-suat" className="text-gray-300 hover:text-primary transition-colors">
                    Tính lãi suất vay
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
              <div className="flex flex-col space-y-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#1877F2] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#1877F2] transition-colors">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <span>Facebook ChuyenDungVN</span>
                </a>
                
                <a
                  href="https://m.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#0099FF] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#0099FF] transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span>Messenger ChuyenDungVN</span>
                </a>
                
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#FF0000] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#FF0000] transition-colors">
                    <Youtube className="h-5 w-5" />
                  </div>
                  <span>YouTube ChuyenDungVN</span>
                </a>
                
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-black transition-colors">
                    <div className="flex items-center justify-center">
                      <FaTiktok className="h-5 w-5" />
                    </div>
                  </div>
                  <span>TikTok ChuyenDungVN</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Liên hệ trực tuyến</h3>
              <p className="text-gray-300 mb-4">
                Để lại số điện thoại, chúng tôi sẽ gọi lại cho bạn ngay!
              </p>
              <form onSubmit={handlePhoneSubmit} className="flex space-x-2">
                <input
                  type="tel"
                  placeholder="Số điện thoại của bạn"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-primary hover:bg-primary-700 rounded-md transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Đang gửi...' : 'Gửi'}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Địa chỉ theo khu vực */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="font-heading text-xl font-bold mb-6 text-center">Hệ thống chi nhánh toàn quốc</h3>
          <AddressRegions regions={addressRegions} />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-400">© 2024 ChuyenDungVN. Tất cả các quyền được bảo lưu.</p>
            <div className="flex space-x-4">
              <Link to="/chinh-sach-bao-mat" className="text-gray-400 hover:text-primary">
                Chính sách bảo mật
              </Link>
              <Link to="/dieu-khoan-su-dung" className="text-gray-400 hover:text-primary">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
