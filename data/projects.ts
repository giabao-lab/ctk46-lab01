export interface Project {
 id: string;
 title: string;
 description: string;
 details: string;
 tech: string[];
 status: string;
}

export const projects: Project[] = [
 {
  id: 'xss-research',
  title: 'Đồ án tìm hiểu về XSS',
  description: 'Nghiên cứu cơ chế tấn công XSS, cách phát hiện và cách phòng chống trong ứng dụng web.',
  details: 'Đồ án tập trung phân tích reflected XSS, stored XSS và DOM-based XSS, đồng thời đề xuất các biện pháp bảo vệ như escape output, validate input, Content Security Policy và sanitize dữ liệu.',
  tech: ['Security', 'Web Vulnerability', 'Next.js'],
    status: 'Đã hoàn thành',
 },
 {
  id: 'lam-dong-specialties',
  title: 'Ứng dụng quảng bá đặc sản Lâm Đồng',
  description: 'Website giới thiệu đặc sản địa phương với bố cục trực quan và nội dung quảng bá rõ ràng.',
  details: 'Dự án xây dựng trải nghiệm giới thiệu sản phẩm, danh mục đặc sản, điểm đến và thông tin liên hệ, hướng tới giao diện thân thiện trên mobile và desktop.',
  tech: ['Next.js', 'Tailwind CSS', 'UI/UX'],
    status: 'Đang phát triển',
 },
 {
  id: 'house-price-prediction',
  title: 'Bài tập dự đoán giá nhà',
  description: 'Bài toán dữ liệu dùng các đặc trưng bất động sản để dự đoán giá nhà bằng mô hình học máy.',
  details: 'Dự án thử nghiệm quy trình xử lý dữ liệu, chọn đặc trưng, huấn luyện mô hình và đánh giá kết quả dự đoán trên tập dữ liệu nhà ở.',
  tech: ['Python', 'Machine Learning', 'Data Analysis'],
    status: 'Ý tưởng',
 },
];

export function getProjectById(id: string): Project | undefined {
 return projects.find((project) => project.id === id);
}
