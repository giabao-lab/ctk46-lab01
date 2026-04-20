export type Post = {
 slug: string;
 title: string;
 excerpt: string;
 date: string;
 readTime: string;
 category: string;
 content: string[];
 highlights: string[];
};

export type Project = {
 name: string;
 description: string;
 stack: string[];
 status: string;
};

export const siteInfo = {
 name: "Lý Gia Bảo",
 mssv: "2213934",
 role: "Sinh viên Công nghệ Thông tin — Đại học Đà Lạt",
 bio: "Mình thích xây dựng website hiện đại bằng Next.js, tập trung vào trải nghiệm người dùng, hiệu năng và giao diện responsive.",
 location: "Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt",
 email: "2213934@dlu.edu.vn",
 phone: "2213934",
 github: "https://github.com/giabao-lab",
 linkedin: "https://www.linkedin.com/in/lygiabao",
};

export const skills = [
 "JavaScript / TypeScript",
 "React & Next.js",
 "Tailwind CSS",
 "Git & GitHub",
 "SQL & PostgreSQL",
 "Responsive Web Design",
];

export const posts: Post[] = [
 {
  slug: "bai-viet-1",
  title: "App Router trong Next.js hoạt động như thế nào?",
  excerpt: "Tổng quan cách file-based routing, nested layout và dynamic route phối hợp với nhau.",
  date: "20/04/2026",
  readTime: "5 phút đọc",
  category: "Next.js",
  highlights: ["File-based routing", "Nested layouts", "Dynamic route"],
  content: [
   "App Router dựa trên cấu trúc thư mục để ánh xạ URL, nên việc tạo route rất trực quan và dễ bảo trì.",
   "Layout được tái sử dụng giữa các trang con, giúp giữ state và giảm chi phí render khi điều hướng.",
   "Dynamic route như [slug] cho phép sinh nhiều trang từ dữ liệu thực tế, phù hợp cho blog và trang chi tiết dự án.",
  ],
 },
 {
  slug: "bai-viet-2",
  title: "Server Component và Client Component: nên dùng khi nào?",
  excerpt: "Phân biệt rõ phần nào render ở server, phần nào cần tương tác trên trình duyệt.",
  date: "20/04/2026",
  readTime: "4 phút đọc",
  category: "React",
  highlights: ["SSR mặc định", "Tương tác người dùng", "usePathname"],
  content: [
   "Server Component phù hợp cho nội dung tĩnh, lấy dữ liệu và tối ưu hiệu năng ban đầu.",
   "Client Component dùng cho state, event handler và các hook như usePathname hoặc useState.",
   "Kết hợp đúng hai loại component giúp ứng dụng vừa nhanh vừa có trải nghiệm tương tác tốt.",
  ],
 },
 {
  slug: "bai-viet-3",
  title: "Xây dựng UI responsive bằng Tailwind CSS",
  excerpt: "Dùng utility classes để tạo bố cục đẹp trên mobile, tablet và desktop.",
  date: "20/04/2026",
  readTime: "6 phút đọc",
  category: "UI",
  highlights: ["Mobile first", "Grid responsive", "Accessibility"],
  content: [
   "Tailwind CSS giúp tạo giao diện nhanh, nhất quán và dễ chỉnh sửa theo từng breakpoint.",
   "Nên ưu tiên mobile-first rồi mở rộng dần sang tablet và desktop bằng các lớp responsive.",
   "Khi kết hợp với semantic HTML, giao diện sẽ dễ đọc, dễ truy cập và dễ bảo trì hơn.",
  ],
 },
];

export const projects: Project[] = [
 {
    name: "Đồ án tìm hiểu về XSS",
    description: "Dự án nghiên cứu cơ chế tấn công XSS, cách phát hiện và các biện pháp phòng chống trong ứng dụng web.",
    stack: ["Security", "Web Vulnerability", "Next.js"],
  status: "Đã hoàn thành",
 },
 {
    name: "Ứng dụng quảng bá đặc sản Lâm Đồng",
    description: "Website giới thiệu sản phẩm địa phương, danh mục đặc sản và thông tin quảng bá theo phong cách hiện đại.",
    stack: ["Next.js", "Tailwind CSS", "UI/UX"],
    status: "Đang phát triển",
 },
 {
    name: "Bài tập dự đoán giá nhà",
    description: "Bài toán dữ liệu dùng các đặc trưng bất động sản để dự đoán giá nhà bằng mô hình học máy.",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    status: "Ý tưởng",
 },
];