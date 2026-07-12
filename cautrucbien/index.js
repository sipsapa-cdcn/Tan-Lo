import { registerMvuSchema as e } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

const r = z,
  t = (e, r, t) => Math.max(r, Math.min(t, e)),
  u = r.z.enum(['Kháng cự', 'Dao động', 'Trầm luân', 'Điên cuồng', 'Viên mãn']),
  a = r.z.enum(['Đang phán định', 'Đang bồi dưỡng', 'Chưa đạt chuẩn', 'Đã trưởng thành', 'Đã quá hạn']),
  l = r.z.enum(['Đơn giản', 'Khó khăn', 'Chờ định']),
  f = r.z.enum(['Chờ phán định', 'Bầu bạn giao tiếp', 'Phụ thuộc tình cảm', 'Gần gũi thân thể', 'Tương tác mập mờ', 'Tiếp xúc thân mật', 'Mở rộng cơ thể', 'Chịch', 'Nhận đồng thân phận', 'Tuyệt đối phục tùng', 'Thay thế gia đình']),
  n = r.z.enum(['Ở nhà', 'Ra ngoài', 'Ngủ']),
  d = r.z.enum(['Phòng khách', 'Phòng ăn', 'Nhà bếp', 'Phòng ngủ chính', 'Phòng tắm', 'Phòng Tần Lộ', 'Phòng Tô Mộng', 'Phòng nhân vật chính', 'Bên ngoài']),
  
  c = r.z.object({
    'Đầu': r.z.string().default('Không').describe('Phụ kiện tóc, trang sức đầu v.v.'),
    'Áo': r.z.string().default('Áo khoác len màu be'),
    'Quần váy': r.z.string().default('Váy dài xám đậm'),
    'Nội y': r.z.object({
      'Trên': r.z.string().default('Áo lót cotton màu da').describe('Che vú'),
      'Dưới': r.z.string().default('Quần lót cotton').describe('Che lồn')
    }).prefault({}),
    'Tất': r.z.string().default('Tất da chân màu da'),
    'Giày': r.z.string().default('Dép đi trong nhà'),
    'Áo khoác': r.z.string().default('Không').describe('Áo choàng, khăn choàng v.v.'),
    'Phụ kiện': r.z.string().default('Nhẫn cưới').describe('Trang sức, đồng hồ v.v.'),
    'Trang sức đặc biệt': r.z.string().default('Không').describe('Vòng cổ, còng tay v.v.'),
    'Phong cách tổng thể': r.z.string().default('Vợ hiền đảm đang'),
    'Độ hở hang': r.z.enum(['Kín đáo', 'Bình thường', 'Mát mẻ', 'Hở hang', 'Cực kỳ hở hang']).default('Bình thường'),
    'Độ gọn gàng': r.z.enum(['Gọn gàng', 'Hơi xộc xệch', 'Xộc xệch', 'Rách rưới', 'Không đủ che thân']).default('Gọn gàng')
  }),
  
  o = r.z.object({
    'Kem nền': r.z.string().default('Mặt mộc trang điểm nhẹ'),
    'Trang điểm mắt': r.z.string().default('Không'),
    'Trang điểm môi': r.z.string().default('Son bóng màu hồng nhạt'),
    'Má hồng': r.z.string().default('Ửng hồng tự nhiên'),
    'Trang điểm đặc biệt': r.z.string().default('Không').describe('Trang điểm hình xăm, vệt nước mắt v.v.'),
    'Hương thơm': r.z.string().default('Không').describe('Mùi nước hoa'),
    'Phong cách tổng thể': r.z.string().default('Tươi mát tự nhiên'),
    'Độ đậm nhạt': r.z.enum(['Mặt mộc', 'Trang điểm nhẹ', 'Trang điểm hàng ngày', 'Trang điểm đậm', 'Trang điểm lòe loẹt']).default('Trang điểm nhẹ')
  }),
  
  b = r.z.object({
    'Hình xăm': r.z.record(r.z.string(), r.z.string()).prefault({}).describe('Vị trí: Nội dung hình xăm'),
    'Xỏ khuyên': r.z.object({
      'Khuyên tai': r.z.boolean().default(!1),
      'Khuyên vú': r.z.boolean().default(!1),
      'Khuyên núm vú': r.z.boolean().default(!1),
      'Khuyên hột le': r.z.boolean().default(!1),
      'Khuyên lưỡi': r.z.boolean().default(!1),
      'Khuyên rốn': r.z.boolean().default(!1),
      'Khuyên môi lồn': r.z.boolean().default(!1),
      'Khác': r.z.array(r.z.string()).default([])
    }).prefault({}),
    'Cải tạo quầng vú': r.z.string().default('Không').describe('Ví dụ: Phóng to, đổi màu, xỏ khuyên v.v.'),
    'Dấu vết vĩnh viễn': r.z.array(r.z.string()).default([]).describe('Dấu sắt nung, sẹo v.v.'),
    'Dấu vết tạm thời': r.z.array(r.z.string()).default([]).describe('Vết hôn, vết tinh dịch v.v.'),
    'Thay đổi cơ thể': r.z.string().default('Không').describe('Thay đổi cơ thể do bị khai phá')
  }),
  
  s = r.z.object({
    'Nội dung': r.z.string().describe('Nguyên văn người chơi nhập, AI không được sửa'),
    'Loại': f.default('Chờ phán định').describe('Trường duy nhất để AI phán định ghi vào'),
    'Trạng thái': a.default('Đang phán định'),
    'Độ khó': l.default('Chờ định'),
    'Số tầng cần thiết': r.z.coerce.number().default(0).describe('Số tầng cần để trưởng thành, kịch bản thiết lập theo độ khó sau khi phán định loại'),
    'Tiến độ phát triển': r.z.coerce.number().default(0).describe('Tiến độ tầng tích lũy (bao gồm tăng tốc)'),
    'Tầng cấy ghép': r.z.coerce.number().default(-1),
    'Cấy ghép cưỡng chế': r.z.boolean().default(!1)
  }),
  
  i = r.z.object({
    'Nội dung': r.z.string().describe('Hành vi/tư duy đã cố định'),
    'Tầng hình thành': r.z.coerce.number().default(-1)
  }),
  
  m = r.z.object({
    'Độ sa đọa': r.z.coerce.number().transform(e => t(e, 0, 100)).prefault(0),
    'Độ phụ thuộc main': r.z.coerce.number().transform(e => t(e, 0, 100)).prefault(20),
    'Độ phụ thuộc Tô Văn': r.z.coerce.number().transform(e => t(e, 0, 100)).prefault(80),
    'Giai đoạn hiện tại': r.z.coerce.number().transform(e => t(Math.floor(e), 1, 5)).prefault(1),
    'Tiêu đề giai đoạn': u.default('Kháng cự'),
    'Suy nghĩ nội tâm hiện tại': r.z.string().default('').describe('Độc thoại nội tâm, AI cập nhật mỗi lượt'),
    'Cảm xúc hiện tại': r.z.string().default('Bình tĩnh'),
    'Vị trí hiện tại': d.default('Phòng khách'),
    'Chi tiết trang phục': c.prefault({}),
    'Chi tiết trang điểm': o.prefault({}),
    'Cải tạo cơ thể': b.prefault({}),
    'Mô tả khí chất': r.z.string().default('Bà nội trợ dịu dàng hiền thục'),
    'Danh sách ý niệm': r.z.record(r.z.string(), s).prefault({}),
    'Danh sách thói quen': r.z.array(i).default([]),
    'Danh sách tập tính khắc sâu': r.z.array(i).default([]),
    'Tầng chú ý trang phục lần trước': r.z.coerce.number().default(-1),
    'Trạng thái trang bị': r.z.record(r.z.string(), r.z.enum(['Đã mua', 'Đang trang bị'])).prefault({}),
    'Buff vượt cấp': r.z.coerce.number().default(0),
    'Buff vượt cấp đến tầng': r.z.coerce.number().default(-1),
    'Độ sa đọa đã kết toán nghi ngờ': r.z.coerce.number().default(-1),
    'Cấy ghép cưỡng chế ba lần': r.z.coerce.number().default(0),
    'Rạn nứt đến tầng': r.z.coerce.number().default(-1),
    'Độ sa đọa đã kết toán tiền tệ': r.z.coerce.number().default(-1),
    'Giai đoạn đã thưởng': r.z.coerce.number().default(-1)
  }),
  
  g = r.z.object({
    'Có đóng băng không': r.z.boolean().default(!1),
    'Nội dung viện cớ': r.z.string().default(''),
    'Tầng kết thúc đóng băng': r.z.coerce.number().default(-1).describe('Tầng hiện tại >= giá trị này thì rã đông')
  }),
  
  p = r.z.object({
    'Trạng thái hiện tại': n.default('Ở nhà'),
    'Vị trí hiện tại': d.default('Phòng khách').describe('Kịch bản tính toán theo sinh hoạt từng tầng, AI không được sửa'),
    'Cảm xúc hiện tại': r.z.string().default('Bình tĩnh').describe('AI cập nhật mỗi lượt'),
    'Suy nghĩ nội tâm hiện tại': r.z.string().default('Dạo này ở nhà khá yên bình, Lộ Lộ quán xuyến việc nhà rất tốt, các con cũng ngoan ngoãn.').describe('Độc thoại nội tâm ngôi thứ nhất 60-100 chữ, AI cập nhật mỗi lượt'),
    'Giá trị nghi ngờ Tần Lộ': r.z.coerce.number().transform(e => t(e, 0, 100)).prefault(0),
    'Giá trị nghi ngờ Tô Mộng': r.z.coerce.number().transform(e => t(e, 0, 100)).prefault(0),
    'Đóng băng nghi ngờ Tần Lộ': g.prefault({}),
    'Đóng băng nghi ngờ Tô Mộng': g.prefault({})
  }),
  
  j = r.z.object({
    'Thời gian': r.z.string().default('Sáng sớm').describe('Chỉ hiển thị bầu không khí, AI tự do duy trì theo cốt truyện, kịch bản không tham gia tính toán'),
    'Ngày tháng': r.z.string().default('').describe('Chỉ hiển thị bầu không khí, AI cập nhật khi cốt truyện qua ngày mới'),
    'Địa điểm': d.default('Phòng khách').describe('AI chọn cảnh hiện tại từ danh sách địa điểm cố định')
  }),
  
  I = r.z.object({
    'Mục tiêu': r.z.enum(['Tần Lộ', 'Tô Mộng']),
    'ID ý niệm': r.z.string(),
    'Nội dung': r.z.string(),
    'Tầng cấy ghép': r.z.coerce.number(),
    'Đã thông báo AI': r.z.boolean().default(!1)
  }),
  
  A = r.z.object({
    'Tiền tệ': r.z.coerce.number().transform(e => Math.max(0, Math.floor(e))).prefault(0),
    'Trạng thái đạo cụ': r.z.record(r.z.string(), r.z.enum(['Chưa mua', 'Đã mua', 'Đang sử dụng'])).prefault({}),
    'Nhân vật hiện tại': r.z.enum(['Tần Lộ', 'Tô Mộng']).default('Tần Lộ'),
    'Nhân vật có mặt': r.z.object({
      'Tần Lộ': r.z.boolean().default(!0),
      'Tô Mộng': r.z.boolean().default(!1)
    }).prefault({}),
    'Nhật ký cấy ghép ý niệm': r.z.array(I).default([]),
    'Ý niệm liên quan lượt này': r.z.record(r.z.string(), r.z.coerce.number().default(0)).prefault({}),
    'Đã mặc lần đầu': r.z.record(r.z.string(), r.z.boolean()).prefault({}),
    'Danh sách hình ảnh': r.z.record(r.z.string(), r.z.object({
      'Tóm tắt': r.z.string().default('').describe('AI lưu trữ: Tóm tắt cảnh được ghi lại trong vòng 50 chữ'),
      'Bắt đầu kết thúc ghi hình': r.z.string().default(''),
      'Trạng thái': r.z.enum(['Chờ tóm tắt', 'Đã sẵn sàng']).default('Chờ tóm tắt')
    })).prefault({}),
    'Ghi hình': r.z.object({
      'Đang ghi hình': r.z.boolean().default(!1),
      'Tầng bắt đầu': r.z.coerce.number().default(-1),
      'Mục tiêu': r.z.enum(['Tần Lộ', 'Tô Mộng']).default('Tần Lộ')
    }).prefault({}),
    'Tô Mộng dẫn cảnh': r.z.object({
      'Số tầng còn lại': r.z.coerce.number().default(-1),
      'Đã kích hoạt': r.z.boolean().default(!1)
    }).prefault({}),
    'Mức độ ngắt quãng đã kích hoạt': r.z.record(r.z.string(), r.z.boolean()).prefault({}),
    'Dư âm ngắt quãng đến tầng': r.z.coerce.number().default(-1),
    'Hồi chiêu ngắt quãng đến tầng': r.z.coerce.number().default(-1),
    'Chỉ tiêu khắc sâu': r.z.coerce.number().default(0),
    'Góc nhìn Tô Văn': r.z.object({
      'Chờ xem': r.z.boolean().default(!1),
      'Số tầng còn lại': r.z.coerce.number().default(0),
      'Tổng số tầng': r.z.coerce.number().default(3),
      'Mục tiêu': r.z.enum(['Tần Lộ', 'Tô Mộng']).default('Tần Lộ'),
      'Mức độ': r.z.coerce.number().default(0),
      'Tầng xử lý lần trước': r.z.coerce.number().default(-1)
    }).prefault({}),
    'Gỡ lỗi đầy sao': r.z.boolean().default(!1),
    'Kết cục xấu': r.z.string().default(''),
    'Sự kiện đạo cụ chờ gửi': r.z.string().default(''),
    'Sự kiện đã tiêm vào': r.z.object({
      'Tầng': r.z.coerce.number().default(-1),
      'Nội dung': r.z.string().default('')
    }).prefault({}),
    'Tầng sử dụng vật phẩm tiêu hao lần trước': r.z.record(r.z.string(), r.z.coerce.number()).prefault({}),
    'Khóa có mặt': r.z.boolean().default(!1),
    'Con trỏ sinh hoạt Tô Văn': r.z.coerce.number().default(0),
    'Tầng xử lý lần trước': r.z.coerce.number().default(-1)
  }),
  
  h = r.z.object({
    'Thế giới': j.prefault({}),
    'Trạng thái Tần Lộ': m.prefault({
      'Suy nghĩ nội tâm hiện tại': 'Hôm nay cũng là một ngày bình dị, bữa tối đã làm xong chờ họ về. Con trai dạo này có vẻ lớn hơn chút rồi, không cần mình phải bận tâm nhiều nữa.'
    }),
    'Trạng thái Tô Mộng': m.prefault({
      'Độ sa đọa': 0,
      'Độ phụ thuộc main': 25,
      'Độ phụ thuộc Tô Văn': 70,
      'Chi tiết trang phục': {
        'Đầu': 'Dây buộc tóc đen',
        'Áo': 'Áo sơ mi linen trắng',
        'Quần váy': 'Quần jean xanh nhạt',
        'Nội y': {
          'Trên': 'Áo lót ren trắng',
          'Dưới': 'Quần lót cotton trắng'
        },
        'Tất': 'Tất ngắn trắng',
        'Giày': 'Giày vải',
        'Phong cách tổng thể': 'Trẻ trung năng động'
      },
      'Chi tiết trang điểm': {
        'Kem nền': 'Mặt mộc',
        'Trang điểm môi': 'Không',
        'Má hồng': 'Không',
        'Độ đậm nhạt': 'Mặt mộc'
      },
      'Suy nghĩ nội tâm hiện tại': 'Ở nhà hơi chán, em trai hôm nay cũng ở nhà, thỉnh thoảng nói chuyện vài câu cũng được.',
      'Mô tả khí chất': 'Nữ sinh viên hoạt bát vui vẻ',
      'Vị trí hiện tại': 'Phòng Tô Mộng'
    }),
    'Trạng thái Tô Văn': p.prefault({}),
    'Hệ thống': A.prefault({})
  });

$(() => {
  console.info('[Tần Lộ Bản Làm Lại] Đăng ký MVU Schema');
  e(h);
  console.info('[Tần Lộ Bản Làm Lại] Đăng ký MVU Schema hoàn tất');
});
//# sourceMappingURL=index.js.map
