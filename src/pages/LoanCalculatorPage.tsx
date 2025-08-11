import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { CreditCard, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrencyInput, parseCurrencyInput } from '@/utils/formatUtils';

const LoanCalculatorPage = () => {
  const [vehiclePrice, setVehiclePrice] = useState<string>('');
  const [downPayment, setDownPayment] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [loanTerm, setLoanTerm] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [results, setResults] = useState<any>(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const handleVehiclePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrencyInput(e.target.value);
    setVehiclePrice(formatted);
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrencyInput(e.target.value);
    setDownPayment(formatted);
  };

  const calculateLoan = () => {
    if (!vehiclePrice || !downPayment || !interestRate || !loanTerm || !paymentMethod) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    const price = parseCurrencyInput(vehiclePrice);
    const downPaymentAmount = parseCurrencyInput(downPayment);
    const rate = parseFloat(interestRate) / 100 / 12; // Lãi suất tháng
    const months = parseInt(loanTerm) * 12;
    
    const loanAmount = price - downPaymentAmount;
    
    let monthlyPayment = 0;
    let totalPayment = 0;
    let totalInterest = 0;
    let schedule: any[] = [];

    if (paymentMethod === 'equal_principal_interest') {
      // Gốc + lãi cố định
      monthlyPayment = (loanAmount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
      totalPayment = monthlyPayment * months;
      totalInterest = totalPayment - loanAmount;

      // Tạo bảng kế hoạch trả nợ cho gốc + lãi cố định
      let remainingBalance = loanAmount;
      for (let i = 1; i <= months; i++) {
        const interestForMonth = remainingBalance * rate;
        const principalForMonth = monthlyPayment - interestForMonth;
        remainingBalance -= principalForMonth;

        schedule.push({
          month: i,
          principalPayment: principalForMonth,
          interestPayment: interestForMonth,
          totalPayment: monthlyPayment,
          remainingBalance: Math.max(0, remainingBalance)
        });
      }
    } else if (paymentMethod === 'decreasing_principal') {
      // Gốc giảm dần
      const principalPayment = loanAmount / months;
      let remainingBalance = loanAmount;
      totalInterest = 0;

      // Tạo bảng kế hoạch trả nợ cho gốc giảm dần
      for (let i = 1; i <= months; i++) {
        const interestForMonth = remainingBalance * rate;
        const totalPaymentForMonth = principalPayment + interestForMonth;
        remainingBalance -= principalPayment;
        totalInterest += interestForMonth;

        schedule.push({
          month: i,
          principalPayment: principalPayment,
          interestPayment: interestForMonth,
          totalPayment: totalPaymentForMonth,
          remainingBalance: Math.max(0, remainingBalance)
        });
      }

      totalPayment = loanAmount + totalInterest;
      // Khoản thanh toán tháng đầu (cao nhất)
      monthlyPayment = schedule[0]?.totalPayment || 0;
    }

    setResults({
      vehiclePrice: price,
      downPayment: downPaymentAmount,
      loanAmount,
      monthlyPayment,
      totalPayment,
      totalInterest,
      paymentMethod,
      loanTerm: parseInt(loanTerm),
      schedule
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  return (
    <Layout>
      <Helmet>
        <title>Tính Lãi Suất Vay Mua Xe - ChuyenDungVN</title>
        <meta 
          name="description" 
          content="Công cụ tính lãi suất vay mua xe tải, xe cẩu, mooc và xe đầu kéo. Hỗ trợ tính toán gói vay phù hợp." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="h-12 w-12 text-primary mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">Tính Lãi Suất Vay Mua Xe</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Công cụ hỗ trợ tính toán lãi suất và kế hoạch trả góp cho xe tải, xe cẩu, sơ mi rơ mooc và xe đầu kéo
            </p>
          </div>

          {/* Form tính toán */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Thông Tin Vay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="vehiclePrice">Giá xe (đã bao gồm VAT)</Label>
                <Input
                  id="vehiclePrice"
                  placeholder="Nhập giá xe (VNĐ)"
                  value={vehiclePrice}
                  onChange={handleVehiclePriceChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="downPayment">Số tiền trả trước</Label>
                <Input
                  id="downPayment"
                  placeholder="Nhập số tiền trả trước (VNĐ)"
                  value={downPayment}
                  onChange={handleDownPaymentChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate">Lãi suất (%/năm)</Label>
                <Input
                  id="interestRate"
                  placeholder="Nhập lãi suất (ví dụ: 10.5)"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanTerm">Thời gian vay (năm)</Label>
                <Select value={loanTerm} onValueChange={setLoanTerm}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn thời gian vay" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 năm</SelectItem>
                    <SelectItem value="2">2 năm</SelectItem>
                    <SelectItem value="3">3 năm</SelectItem>
                    <SelectItem value="4">4 năm</SelectItem>
                    <SelectItem value="5">5 năm</SelectItem>
                    <SelectItem value="6">6 năm</SelectItem>
                    <SelectItem value="7">7 năm</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="paymentMethod">Phương thức trả</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn phương thức trả" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="equal_principal_interest">Gốc + lãi cố định</SelectItem>
                    <SelectItem value="decreasing_principal">Gốc giảm dần</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6">
              <Button onClick={calculateLoan} className="w-full">
                <Calculator className="mr-2 h-4 w-4" />
                Tính Toán Lãi Suất Vay
              </Button>
            </div>
          </div>

          {/* Kết quả tính toán */}
          {results && (
            <div className="bg-green-50 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-green-800">Kết Quả Tính Toán</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Giá trị xe:</span>
                    <span className="font-semibold">{formatCurrency(results.vehiclePrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Số tiền trả trước:</span>
                    <span className="font-semibold">{formatCurrency(results.downPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Số tiền vay:</span>
                    <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Thời gian vay:</span>
                    <span className="font-semibold">{results.loanTerm} năm</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">
                      {results.paymentMethod === 'decreasing_principal' ? 'Trả hàng tháng (tháng đầu):' : 'Trả hàng tháng:'}
                    </span>
                    <span className="font-semibold text-blue-600">{formatCurrency(results.monthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Tổng tiền lãi:</span>
                    <span className="font-semibold text-orange-600">{formatCurrency(results.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-lg font-bold text-green-800">Tổng tiền phải trả:</span>
                    <span className="text-lg font-bold text-green-600">{formatCurrency(results.totalPayment)}</span>
                  </div>
                  {results.paymentMethod === 'decreasing_principal' && (
                    <div className="text-sm text-gray-600 mt-2">
                      * Gốc giảm dần: Khoản thanh toán hàng tháng sẽ giảm dần theo thời gian
                    </div>
                  )}
                </div>
              </div>

              {/* Nút hiển thị/ẩn bảng kế hoạch trả nợ */}
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setShowSchedule(!showSchedule)}
                  className="w-full"
                >
                  {showSchedule ? 'Ẩn bảng kế hoạch trả nợ chi tiết' : 'Xem bảng kế hoạch trả nợ chi tiết'}
                </Button>
              </div>
            </div>
          )}

          {/* Bảng kế hoạch trả nợ chi tiết */}
          {showSchedule && results && results.schedule && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Bảng kế hoạch trả nợ chi tiết (Dư nợ giảm dần)</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center">Kỳ</TableHead>
                      <TableHead className="text-right">Gốc trả</TableHead>
                      <TableHead className="text-right">Lãi trả</TableHead>
                      <TableHead className="text-right">Tổng trả</TableHead>
                      <TableHead className="text-right">Dư nợ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.schedule.map((item: any) => (
                      <TableRow key={item.month}>
                        <TableCell className="text-center font-medium">{item.month}</TableCell>
                        <TableCell className="text-right">{formatCurrency(item.principalPayment)}</TableCell>
                        <TableCell className="text-right">{formatCurrency(item.interestPayment)}</TableCell>
                        <TableCell className="text-right font-semibold">{formatCurrency(item.totalPayment)}</TableCell>
                        <TableCell className="text-right">{formatCurrency(item.remainingBalance)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="italic">*Lưu ý: Kết quả trên chỉ là ước tính. Lãi suất thực tế và các điều khoản vay có thể thay đổi tùy thuộc vào ngân hàng và thời điểm vay. Vui lòng liên hệ trực tiếp để được tư vấn chi tiết.</p>
              </div>
            </div>
          )}

          {/* Thông tin lãi suất hiện tại */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Thông Tin Lãi Suất Hiện Tại</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Lãi Suất Ưu Đãi</h3>
                  <p className="text-2xl font-bold text-green-600">8.5% - 12%</p>
                  <p className="text-sm text-green-700">Áp dụng cho khách hàng có ưu đãi</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Thời Gian Vay</h3>
                  <p className="text-2xl font-bold text-blue-600">1 - 7 năm</p>
                  <p className="text-sm text-blue-700">Linh hoạt theo nhu cầu khách hàng</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Tỷ Lệ Vay Tối Đa</h3>
                  <p className="text-2xl font-bold text-purple-600">85%</p>
                  <p className="text-sm text-purple-700">Trả trước tối thiểu 15%</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">Phương Thức Trả</h3>
                  <p className="text-lg font-bold text-orange-600">Gốc giảm dần</p>
                  <p className="text-sm text-orange-700">Hoặc gốc + lãi cố định</p>
                </div>
              </div>
            </div>
          </div>

          {/* Điều kiện vay */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Điều Kiện Vay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Hồ Sơ Cần Thiết</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    CMND/CCCD, Hộ khẩu
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Giấy đăng ký kinh doanh (nếu có)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Chứng minh thu nhập
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Bảng kê tài sản đảm bảo
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Yêu Cầu Khách Hàng</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Tuổi từ 18 - 65 tuổi
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Có thu nhập ổn định
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Không nợ xấu tại CIC
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Có tài sản đảm bảo
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Uu đãi đặc biệt */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-yellow-800">Ưu Đãi Đặc Biệt</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">0%</div>
                <p className="text-yellow-700">Phí thẩm định</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">24h</div>
                <p className="text-yellow-700">Thời gian duyệt hồ sơ</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">100%</div>
                <p className="text-yellow-700">Hỗ trợ thủ tục</p>
              </div>
            </div>
          </div>

          {/* Liên hệ */}
          <div className="text-center">
            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Cần Tư Vấn Gói Vay?</h3>
              <p className="text-gray-600 mb-4">Liên hệ ngay để được hỗ trợ tính toán và tư vấn gói vay phù hợp</p>
              <a 
                href="tel:0764678901"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Gọi ngay: 0764 678 901
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoanCalculatorPage;
