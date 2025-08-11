import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import { 
  featuredTrucks, 
  specializedCranes, 
  semiTrailers, 
  tractors,
  truckWeights,
  trucks
} from '@/data/products';
import { getBlogData } from '@/data/blog-posts';
import { blogCategories } from '@/data/blogData';
import { BlogPost } from '@/models/BlogPost';
import VehicleCarousel from '@/components/home/VehicleCarousel';
import BrandCategories from '@/components/home/BrandCategories';
import ContactSection from '@/components/home/ContactSection';
import BlogSection from '@/components/home/BlogSection';
import WeightCategories from '@/components/home/WeightCategories';
import { isTypeEnabled } from '@/config/categoryVisibility';

const Index = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        const data = await getBlogData();
        setBlogPosts(data.allBlogPosts);
      } catch (error) {
        console.error('Error loading blog data:', error);
        setBlogPosts([]);
      }
    };

    loadBlogData();
  }, []);

  // Sắp xếp bài viết theo thời gian mới nhất
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <Layout>
      <Helmet>
        <title>Trang Chủ | ChuyenDungVN.com - Chuyên Phương Tiện Thương Mại | Xe Tải, Cẩu, Mooc & Đầu Kéo</title>
        <meta 
          name="description" 
          content="Chuyên cung cấp xe tải, xe cẩu, sơ mi rơ mooc và xe đầu kéo với đa dạng thương hiệu: Hyundai, Thaco, Isuzu, Hino, Dongfeng, JAC. Giá tốt nhất thị trường!" 
        />
      </Helmet>

      {/* Hero Section */}
      <Hero />
      
      <div className="w-full overflow-hidden">
        {/* Xe Tải Nổi Bật */}
        {isTypeEnabled('xe-tai') && (
          <VehicleCarousel 
            vehicles={featuredTrucks} 
            title="Xe Tải Nổi Bật" 
            description="Các dòng xe tải được nhiều khách hàng tin dùng, đa dạng tải trọng và thương hiệu"
            viewAllUrl="/danh-muc-xe?type=xe-tai"
            viewAllText="Xem tất cả xe tải"
          />
        )}

        {/* Cẩu Chuyên Dụng */}
        {isTypeEnabled('xe-cau') && (
          <VehicleCarousel 
            vehicles={specializedCranes} 
            title="Cẩu Chuyên Dụng" 
            description="Các dòng xe cẩu chuyên dụng, đa dạng tải trọng và thương hiệu"
            viewAllUrl="/danh-muc-xe?type=xe-cau"
            viewAllText="Xem tất cả xe cẩu"
          />
        )}

        {/* Sơ Mi Rơ Mooc */}
        {isTypeEnabled('mooc') && (
          <VehicleCarousel 
            vehicles={semiTrailers} 
            title="Sơ Mi Rơ Mooc" 
            description="Các dòng mooc chuyên dụng, đa dạng loại và thương hiệu"
            viewAllUrl="/danh-muc-xe?type=mooc"
            viewAllText="Xem tất cả sơ mi rơ mooc"
          />
        )}

        {/* Xe Đầu Kéo */}
        {isTypeEnabled('dau-keo') && (
          <VehicleCarousel 
            vehicles={tractors} 
            title="Xe Đầu Kéo" 
            description="Các dòng xe đầu kéo, đa dạng công suất và thương hiệu"
            viewAllUrl="/danh-muc-xe?type=dau-keo"
            viewAllText="Xem tất cả xe đầu kéo"
          />
        )}
        
        {/* Phân Loại Theo Tải Trọng */}
        <div className="bg-gray-50 w-full">
          <WeightCategories />
        </div>
        
        {/* Thương Hiệu Nổi Tiếng */}
        <BrandCategories trucks={trucks} />
        
        {/* Liên Hệ Tư Vấn */}
        <ContactSection />
        
        {/* Tin Tức & Chia Sẻ */}
        <BlogSection posts={sortedPosts.slice(0, 6)} categories={blogCategories} />
      </div>
      
    </Layout>
  );
};

export default Index;
