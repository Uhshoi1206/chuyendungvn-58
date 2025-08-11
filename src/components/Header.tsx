
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Phone, Calculator, CreditCard, GitCompare } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileMenu from './MobileMenu';
import { Input } from './ui/input';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import CompareBadge from './CompareBadge';
import { useCompare } from '@/contexts/CompareContext';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const { generateCompareUrl } = useCompare();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setOpen(false);
    }
  };
  
  const handleCompareClick = () => {
    const compareUrl = generateCompareUrl();
    navigate(compareUrl);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/favicon.ico" 
              alt="ChuyenDungVN Logo" 
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <div className="font-heading text-lg md:text-xl font-bold text-primary tracking-tight">ChuyenDungVN</div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <Link to="/danh-muc-xe" className="text-sm font-medium hover:text-primary transition-colors">
                Danh mục xe
              </Link>
              <div 
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                onClick={handleCompareClick}
              >
                <GitCompare className="h-3 w-3" />
                <span className="relative">
                  So sánh xe
                  <CompareBadge className="absolute -top-2 -right-6" />
                </span>
              </div>
              <Link to="/du-toan-chi-phi" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <Calculator className="h-3 w-3" />
                Dự toán chi phí
              </Link>
              <Link to="/tinh-lai-suat" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                Tính lãi suất vay
              </Link>
              <Link to="/gioi-thieu" className="text-sm font-medium hover:text-primary transition-colors">
                Giới thiệu
              </Link>
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                Tin tức
              </Link>
              <Link to="/lien-he" className="text-sm font-medium hover:text-primary transition-colors">
                Liên hệ
              </Link>
            </nav>
          )}

          {/* Contact & Search Button */}
          <div className="flex items-center space-x-3">
            {!isMobile && (
              <div className="hidden md:flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:0764678901"
                  className="text-sm font-bold hover:underline text-black"
                  aria-label="Gọi ngay: 0764678901"
                >
                  0764678901
                </a>
              </div>
            )}
            
            {!isMobile ? (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center text-xs">
                    <Search className="h-3 w-3 mr-1" />
                    Tìm kiếm
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end">
                  <form onSubmit={handleSearch} className="flex p-2">
                    <Input 
                      placeholder="Nhập từ khóa tìm kiếm..." 
                      className="mr-2"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoFocus
                    />
                    <Button type="submit" size="sm">Tìm</Button>
                  </form>
                </PopoverContent>
              </Popover>
            ) : (
              <MobileMenu />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
