export interface Post {
 slug: string;
 title: string;
 excerpt: string;
 content: string;
 date: string;
 category: string;
 author: string;
}

export const posts: Post[] = [
 {
  slug: 'gioi-thieu-nextjs',
  title: 'Giới thiệu Next.js — Framework React phổ biến nhất',
  excerpt: 'Tìm hiểu tại sao Next.js là lựa chọn hàng đầu cho phát triển web hiện đại.',
  content: `Next.js là một React framework mạnh mẽ được phát triển bởi Vercel.
Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR),
Static Site Generation (SSG), và App Router.

Một số ưu điểm nổi bật của Next.js:
- Routing tự động dựa trên cấu trúc thư mục
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font, và scripts tự động
- API Routes tích hợp
- Hỗ trợ TypeScript sẵn có`,
  date: '2025-01-15',
  category: 'Công nghệ',
  author: 'Lý Gia Bảo',
 },
 {
  slug: 'hoc-tailwind-css',
  title: 'Tailwind CSS — Cách tiếp cận mới cho CSS',
  excerpt: 'Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.',
  content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết
CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

Bạn viết trực tiếp trong HTML:
<div class="p-4 rounded-lg shadow-md">...</div>

Ưu điểm:
- Không cần đặt tên class
- Không cần chuyển qua lại giữa file HTML và CSS
- File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
  date: '2025-01-20',
  category: 'Công nghệ',
  author: 'Lý Gia Bảo',
 },
 {
  slug: 'kinh-nghiem-hoc-lap-trinh',
  title: 'Chia sẻ kinh nghiệm tự học lập trình hiệu quả',
  excerpt: 'Những bài học rút ra sau 3 năm tự học lập trình ở đại học.',
  content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%,
70% còn lại là viết code.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học.
Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.

3. Tham gia cộng đồng
Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
  date: '2025-02-01',
  category: 'Học tập',
  author: 'Lý Gia Bảo',
 },
 {
  slug: 'server-components-la-gi',
  title: 'Server Components là gì và vì sao quan trọng?',
  excerpt: 'Giải thích ngắn gọn về server components trong App Router.',
  content: `Server Components cho phép render nội dung ở phía server, giảm tải cho trình duyệt.
Chúng rất phù hợp cho dữ liệu tĩnh, nội dung ít tương tác và phần lớn giao diện của blog.

Khi kết hợp đúng với Client Components, ứng dụng sẽ vừa nhanh vừa linh hoạt.
Điều này đặc biệt hữu ích cho các trang portfolio, blog và dashboard nhỏ.

Hãy nhớ phân biệt rõ phần nào cần state/event trên client và phần nào chỉ cần hiển thị trên server.`,
  date: '2025-03-10',
  category: 'Next.js',
  author: 'Lý Gia Bảo',
 },
 {
  slug: 'thiet-ke-ui-responsive',
  title: 'Thiết kế UI responsive với Tailwind CSS',
  excerpt: 'Một vài nguyên tắc cơ bản để làm giao diện đẹp trên mọi kích thước màn hình.',
  content: `Responsive design là tiêu chuẩn bắt buộc cho web hiện đại.
Tailwind CSS giúp bạn xây dựng bố cục responsive rất nhanh bằng các breakpoint như sm, md, lg.

Một số nguyên tắc:
- Mobile first
- Dùng spacing nhất quán
- Tránh nhồi quá nhiều thông tin vào một màn hình
- Kiểm tra trên nhiều độ phân giải

Khi làm đúng, giao diện sẽ dễ đọc, dễ dùng và chuyên nghiệp hơn.`,
  date: '2025-04-02',
  category: 'UI/UX',
  author: 'Lý Gia Bảo',
 },
 {
  slug: 'app-router-layouts',
  title: 'App Router và Nested Layouts trong Next.js',
  excerpt: 'Cách tổ chức route, layout và loading state cho một website hiện đại.',
  content: `App Router của Next.js cho phép bạn tổ chức ứng dụng dựa trên cấu trúc thư mục.
Điều này giúp việc chia nhỏ thành các phần như homepage, blog, projects trở nên rõ ràng hơn.

Nested layouts cho phép tái sử dụng giao diện chung như navbar, footer hoặc sidebar.
Nhờ đó, việc duy trì và mở rộng dự án sẽ dễ dàng hơn rất nhiều.`,
  date: '2025-04-10',
  category: 'Next.js',
  author: 'Lý Gia Bảo',
 },
 {
  slug: 'bao-mat-web-co-ban',
  title: 'Các nguyên tắc bảo mật web cơ bản cho sinh viên',
  excerpt: 'Những thói quen tốt khi viết web để tránh lỗi phổ biến như XSS hay lộ dữ liệu.',
  content: `Khi xây dựng ứng dụng web, bảo mật phải được xem từ đầu chứ không phải thêm sau cùng.
Một số nguyên tắc cơ bản gồm validate dữ liệu đầu vào, escape output, phân quyền rõ ràng và không lưu thông tin nhạy cảm ở client nếu không cần thiết.

Trong đồ án XSS, mình nhận ra rằng việc kiểm tra đầu vào và render an toàn cực kỳ quan trọng để ngăn các payload nguy hiểm.`,
  date: '2025-04-18',
  category: 'Security',
  author: 'Lý Gia Bảo',
 },
];

export function getPostBySlug(slug: string): Post | undefined {
 return posts.find((post) => post.slug === slug);
}
