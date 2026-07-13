import{registerMvuSchema as e}from'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';
const t=z,
n=(e,t,n)=>Math.max(t,Math.min(n,e)),
o=t.z.enum(['Kháng cự','Dao động','Trầm luân','Điên cuồng','Viên mãn']),
r=t.z.enum(['Đang phán định','Đang bồi dưỡng','Chưa đạt chuẩn','Đã trưởng thành','Đã quá hạn']),
s=t.z.enum(['Đơn giản','Khó khăn','Chờ định']),
c=t.z.enum(['Chờ phán định','Bầu bạn giao tiếp','Phụ thuộc tình cảm','Gần gũi thân thể','Tương tác mập mờ','Tiếp xúc thân mật','Mở rộng cơ thể','Chịch','Nhận đồng thân phận','Tuyệt đối phục tùng','Thay thế gia đình']),
u=t.z.enum(['Ở nhà','Ra ngoài','Ngủ']),
f=t.z.enum(['Phòng khách','Phòng ăn','Nhà bếp','Phòng ngủ chính','Phòng tắm','Phòng Tần Lộ','Phòng Tô Mộng','Phòng nhân vật chính','Bên ngoài']),

l=t.z.object({
  'Đầu':t.z.string().default('Không').describe('Phụ kiện tóc, trang sức đầu v.v.'),
  'Áo':t.z.string().default('Áo khoác len màu be'),
  'Quần váy':t.z.string().default('Váy dài xám đậm'),
  'Nội y':t.z.object({
    'Trên':t.z.string().default('Áo lót cotton màu da').describe('Che vú'),
    'Dưới':t.z.string().default('Quần lót cotton').describe('Che lồn')
  }).prefault({}),
  'Tất':t.z.string().default('Tất da chân màu da'),
  'Giày':t.z.string().default('Dép đi trong nhà'),
  'Áo khoác':t.z.string().default('Không').describe('Áo choàng, khăn choàng v.v.'),
  'Phụ kiện':t.z.string().default('Nhẫn cưới').describe('Trang sức, đồng hồ v.v.'),
  'Trang sức đặc biệt':t.z.string().default('Không').describe('Vòng cổ, còng tay v.v.'),
  'Phong cách tổng thể':t.z.string().default('Vợ hiền đảm đang'),
  'Độ hở hang':t.z.enum(['Kín đáo','Bình thường','Mát mẻ','Hở hang','Cực kỳ hở hang']).default('Bình thường'),
  'Độ gọn gàng':t.z.enum(['Gọn gàng','Hơi xộc xệch','Xộc xệch','Rách rưới','Không đủ che thân']).default('Gọn gàng')
}),

i=t.z.object({
  'Kem nền':t.z.string().default('Mặt mộc trang điểm nhẹ'),
  'Trang điểm mắt':t.z.string().default('Không'),
  'Trang điểm môi':t.z.string().default('Son bóng màu hồng nhạt'),
  'Má hồng':t.z.string().default('Ửng hồng tự nhiên'),
  'Trang điểm đặc biệt':t.z.string().default('Không').describe('Trang điểm hình xăm, vệt nước mắt v.v.'),
  'Hương thơm':t.z.string().default('Không').describe('Mùi nước hoa'),
  'Phong cách tổng thể':t.z.string().default('Tươi mát tự nhiên'),
  'Độ đậm nhạt':t.z.enum(['Mặt mộc','Trang điểm nhẹ','Trang điểm hàng ngày','Trang điểm đậm','Trang điểm lòe loẹt']).default('Trang điểm nhẹ')
}),

a=t.z.object({
  'Hình xăm':t.z.record(t.z.string(),t.z.string()).prefault({}).describe('Vị trí: Nội dung hình xăm'),
  'Xỏ khuyên':t.z.object({
    'Khuyên tai':t.z.boolean().default(!1),
    'Khuyên vú':t.z.boolean().default(!1),
    'Khuyên núm vú':t.z.boolean().default(!1),
    'Khuyên hột le':t.z.boolean().default(!1),
    'Khuyên lưỡi':t.z.boolean().default(!1),
    'Khuyên rốn':t.z.boolean().default(!1),
    'Khuyên môi lồn':t.z.boolean().default(!1),
    'Khác':t.z.array(t.z.string()).default([])
  }).prefault({}),
  'Cải tạo quầng vú':t.z.string().default('Không').describe('Ví dụ: Phóng to, đổi màu, xỏ khuyên v.v.'),
  'Dấu vết vĩnh viễn':t.z.array(t.z.string()).default([]).describe('Dấu sắt nung, sẹo v.v.'),
  'Dấu vết tạm thời':t.z.array(t.z.string()).default([]).describe('Vết hôn, vết tinh dịch v.v.'),
  'Thay đổi cơ thể':t.z.string().default('Không').describe('Thay đổi cơ thể do bị khai phá')
}),

d=t.z.object({
  'Nội dung':t.z.string().describe('Nguyên văn người chơi nhập, AI không được sửa'),
  'Loại':c.default('Chờ phán định').describe('Trường duy nhất để AI phán định ghi vào'),
  'Trạng thái':r.default('Đang phán định'),
  'Độ khó':s.default('Chờ định'),
  'Số tầng cần thiết':t.z.coerce.number().default(0).describe('Số tầng cần để trưởng thành, kịch bản thiết lập theo độ khó sau khi phán định loại'),
  'Tiến độ phát triển':t.z.coerce.number().default(0).describe('Tiến độ tầng tích lũy (bao gồm tăng tốc)'),
  'Tầng cấy ghép':t.z.coerce.number().default(-1),
  'Cấy ghép cưỡng chế':t.z.boolean().default(!1)
}),

m=t.z.object({
  'Nội dung':t.z.string().describe('Hành vi/tư duy đã cố định'),
  'Tầng hình thành':t.z.coerce.number().default(-1)
}),

h=t.z.object({
  'Độ sa đọa':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(0),
  'Độ phụ thuộc main':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(20),
  'Độ phụ thuộc Tô Văn':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(80),
  'Giai đoạn hiện tại':t.z.coerce.number().transform(e=>n(Math.floor(e),1,5)).prefault(1),
  'Tiêu đề giai đoạn':o.default('Kháng cự'),
  'Suy nghĩ nội tâm hiện tại':t.z.string().default('').describe('Độc thoại nội tâm, AI cập nhật mỗi lượt'),
  'Cảm xúc hiện tại':t.z.string().default('Bình tĩnh'),
  'Vị trí hiện tại':f.default('Phòng khách'),
  'Chi tiết trang phục':l.prefault({}),
  'Chi tiết trang điểm':i.prefault({}),
  'Cải tạo cơ thể':a.prefault({}),
  'Mô tả khí chất':t.z.string().default('Bà nội trợ dịu dàng hiền thục'),
  'Danh sách ý niệm':t.z.record(t.z.string(),d).prefault({}),
  'Danh sách thói quen':t.z.array(m).default([]),
  'Danh sách tập tính khắc sâu':t.z.array(m).default([]),
  'Tầng chú ý trang phục lần trước':t.z.coerce.number().default(-1),
  'Trạng thái trang bị':t.z.record(t.z.string(),t.z.enum(['Đã mua','Đang trang bị'])).prefault({}),
  'Buff vượt cấp':t.z.coerce.number().default(0),
  'Buff vượt cấp đến tầng':t.z.coerce.number().default(-1),
  'Độ sa đọa đã kết toán nghi ngờ':t.z.coerce.number().default(-1),
  'Cấy ghép cưỡng chế ba lần':t.z.coerce.number().default(0),
  'Rạn nứt đến tầng':t.z.coerce.number().default(-1),
  'Độ sa đọa đã kết toán tiền tệ':t.z.coerce.number().default(-1),
  'Giai đoạn đã thưởng':t.z.coerce.number().default(-1)
}),

b=t.z.object({
  'Có đóng băng không':t.z.boolean().default(!1),
  'Nội dung viện cớ':t.z.string().default(''),
  'Tầng kết thúc đóng băng':t.z.coerce.number().default(-1).describe('Tầng hiện tại >= giá trị này thì rã đông')
}),

g=t.z.object({
  'Trạng thái hiện tại':u.default('Ở nhà'),
  'Vị trí hiện tại':f.default('Phòng khách').describe('Kịch bản tính toán theo sinh hoạt từng tầng, AI không được sửa'),
  'Cảm xúc hiện tại':t.z.string().default('Bình tĩnh').describe('AI cập nhật mỗi lượt'),
  'Suy nghĩ nội tâm hiện tại':t.z.string().default('Dạo này ở nhà khá yên bình, Lộ Lộ quán xuyến việc nhà rất tốt, các con cũng ngoan ngoãn.').describe('Độc thoại nội tâm ngôi thứ nhất 60-100 chữ, AI cập nhật mỗi lượt'),
  'Giá trị nghi ngờ Tần Lộ':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(0),
  'Giá trị nghi ngờ Tô Mộng':t.z.coerce.number().transform(e=>n(e,0,100)).prefault(0),
  'Đóng băng nghi ngờ Tần Lộ':b.prefault({}),
  'Đóng băng nghi ngờ Tô Mộng':b.prefault({})
}),

p=t.z.object({
  'Thời gian':t.z.string().default('Sáng sớm').describe('Chỉ hiển thị bầu không khí, AI tự do duy trì theo cốt truyện, kịch bản không tham gia tính toán'),
  'Ngày tháng':t.z.string().default('').describe('Chỉ hiển thị bầu không khí, AI cập nhật khi cốt truyện qua ngày mới'),
  'Địa điểm':f.default('Phòng khách').describe('AI chọn cảnh hiện tại từ danh sách địa điểm cố định')
}),

v=t.z.object({
  'Mục tiêu':t.z.enum(['Tần Lộ','Tô Mộng']),
  'ID ý niệm':t.z.string(),
  'Nội dung':t.z.string(),
  'Tầng cấy ghép':t.z.coerce.number(),
  'Đã thông báo AI':t.z.boolean().default(!1)
}),

E=t.z.object({
  'Tiền tệ':t.z.coerce.number().transform(e=>Math.max(0,Math.floor(e))).prefault(0),
  'Trạng thái đạo cụ':t.z.record(t.z.string(),t.z.enum(['Chưa mua','Đã mua','Đang sử dụng'])).prefault({}),
  'Nhân vật hiện tại':t.z.enum(['Tần Lộ','Tô Mộng']).default('Tần Lộ'),
  'Nhân vật có mặt':t.z.object({
    'Tần Lộ':t.z.boolean().default(!0),
    'Tô Mộng':t.z.boolean().default(!1)
  }).prefault({}),
  'Nhật ký cấy ghép ý niệm':t.z.array(v).default([]),
  'Ý niệm liên quan lượt này':t.z.record(t.z.string(),t.z.coerce.number().default(0)).prefault({}),
  'Đã mặc lần đầu':t.z.record(t.z.string(),t.z.boolean()).prefault({}),
  'Danh sách hình ảnh':t.z.record(t.z.string(),t.z.object({
    'Tóm tắt':t.z.string().default('').describe('AI lưu trữ: Tóm tắt cảnh được ghi lại trong vòng 50 chữ'),
    'Bắt đầu kết thúc ghi hình':t.z.string().default(''),
    'Trạng thái':t.z.enum(['Chờ tóm tắt','Đã sẵn sàng']).default('Chờ tóm tắt')
  })).prefault({}),
  'Ghi hình':t.z.object({
    'Đang ghi hình':t.z.boolean().default(!1),
    'Tầng bắt đầu':t.z.coerce.number().default(-1),
    'Mục tiêu':t.z.enum(['Tần Lộ','Tô Mộng']).default('Tần Lộ')
  }).prefault({}),
  'Tô Mộng dẫn cảnh':t.z.object({
    'Số tầng còn lại':t.z.coerce.number().default(-1),
    'Đã kích hoạt':t.z.boolean().default(!1)
  }).prefault({}),
  'Mức độ ngắt quãng đã kích hoạt':t.z.record(t.z.string(),t.z.boolean()).prefault({}),
  'Dư âm ngắt quãng đến tầng':t.z.coerce.number().default(-1),
  'Hồi chiêu ngắt quãng đến tầng':t.z.coerce.number().default(-1),
  'Chỉ tiêu khắc sâu':t.z.coerce.number().default(0),
  'Góc nhìn Tô Văn':t.z.object({
    'Chờ xem':t.z.boolean().default(!1),
    'Số tầng còn lại':t.z.coerce.number().default(0),
    'Tổng số tầng':t.z.coerce.number().default(3),
    'Mục tiêu':t.z.enum(['Tần Lộ','Tô Mộng']).default('Tần Lộ'),
    'Mức độ':t.z.coerce.number().default(0),
    'Tầng xử lý lần trước':t.z.coerce.number().default(-1)
  }).prefault({}),
  'Gỡ lỗi đầy sao':t.z.boolean().default(!1),
  'Kết cục xấu':t.z.string().default(''),
  'Sự kiện đạo cụ chờ gửi':t.z.string().default(''),
  'Sự kiện đã tiêm vào':t.z.object({
    'Tầng':t.z.coerce.number().default(-1),
    'Nội dung':t.z.string().default('')
  }).prefault({}),
  'Tầng sử dụng vật phẩm tiêu hao lần trước':t.z.record(t.z.string(),t.z.coerce.number()).prefault({}),
  'Khóa có mặt':t.z.boolean().default(!1),
  'Con trỏ sinh hoạt Tô Văn':t.z.coerce.number().default(0),
  'Tầng xử lý lần trước':t.z.coerce.number().default(-1)
}),

M=t.z.object({
  'Thế giới':p.prefault({}),
  'Trạng thái Tần Lộ':h.prefault({
    'Suy nghĩ nội tâm hiện tại':'Hôm nay cũng là một ngày bình dị, bữa tối đã làm xong chờ họ về. Con trai dạo này có vẻ lớn hơn chút rồi, không cần mình phải bận tâm nhiều nữa.'
  }),
  'Trạng thái Tô Mộng':h.prefault({
    'Độ sa đọa':0,
    'Độ phụ thuộc main':25,
    'Độ phụ thuộc Tô Văn':70,
    'Chi tiết trang phục':{
      'Đầu':'Dây buộc tóc đen',
      'Áo':'Áo sơ mi linen trắng',
      'Quần váy':'Quần jean xanh nhạt',
      'Nội y':{
        'Trên':'Áo lót ren trắng',
        'Dưới':'Quần lót cotton trắng'
      },
      'Tất':'Tất ngắn trắng',
      'Giày':'Giày vải',
      'Phong cách tổng thể':'Trẻ trung năng động'
    },
    'Chi tiết trang điểm':{
      'Kem nền':'Mặt mộc',
      'Trang điểm môi':'Không',
      'Má hồng':'Không',
      'Độ đậm nhạt':'Mặt mộc'
    },
    'Suy nghĩ nội tâm hiện tại':'Ở nhà hơi chán, em trai hôm nay cũng ở nhà, thỉnh thoảng nói chuyện vài câu cũng được.',
    'Mô tả khí chất':'Nữ sinh viên hoạt bát vui vẻ',
    'Vị trí hiện tại':'Phòng Tô Mộng'
  }),
  'Trạng thái Tô Văn':g.prefault({}),
  'Hệ thống':E.prefault({})
});
const j = [
  {
    'Giai đoạn': 1,
    'Tiêu đề giai đoạn': 'Kháng cự',
    'Phạm vi độ sa đọa': [0, 19],
    'Ràng buộc': {
      'Độ hở hang tối thiểu': 'Kín đáo',
      'Phạm vi độ hở hang': ['Kín đáo', 'Bình thường'],
      'Độ đậm nhạt tối thiểu': 'Mặt mộc',
      'Phạm vi độ đậm nhạt': ['Mặt mộc', 'Trang điểm nhẹ'],
      'Cho phép trang sức đặc biệt': !1,
      'Cho phép cải tạo cơ thể': !1
    },
    'Ngoại hình mặc định': {
      'Trang phục': {
        'Đầu': 'Không',
        'Áo': 'Áo khoác len màu be',
        'Quần váy': 'Váy dài xám đậm',
        'Nội y Trên': 'Áo lót cotton màu da',
        'Nội y Dưới': 'Quần lót cotton',
        'Tất': 'Tất da chân màu da',
        'Giày': 'Dép đi trong nhà',
        'Áo khoác': 'Không',
        'Phụ kiện': 'Nhẫn cưới',
        'Trang sức đặc biệt': 'Không',
        'Phong cách tổng thể': 'Vợ hiền đảm đang',
        'Độ hở hang': 'Bình thường',
        'Độ gọn gàng': 'Gọn gàng'
      },
      'Trang điểm': {
        'Kem nền': 'Mặt mộc trang điểm nhẹ',
        'Trang điểm mắt': 'Không',
        'Trang điểm môi': 'Son bóng màu hồng nhạt',
        'Má hồng': 'Ửng hồng tự nhiên',
        'Trang điểm đặc biệt': 'Không',
        'Độ đậm nhạt': 'Trang điểm nhẹ',
        'Phong cách tổng thể': 'Tươi mát tự nhiên'
      },
      'Mô tả khí chất': 'Bà nội trợ dịu dàng hiền thục'
    },
    'Hệ số thời gian': 1.2
  },
  {
    'Giai đoạn': 2,
    'Tiêu đề giai đoạn': 'Dao động',
    'Phạm vi độ sa đọa': [20, 39],
    'Ràng buộc': {
      'Độ hở hang tối thiểu': 'Bình thường',
      'Phạm vi độ hở hang': ['Bình thường', 'Mát mẻ'],
      'Độ đậm nhạt tối thiểu': 'Trang điểm nhẹ',
      'Phạm vi độ đậm nhạt': ['Trang điểm nhẹ', 'Trang điểm hàng ngày'],
      'Cho phép trang sức đặc biệt': !1,
      'Cho phép cải tạo cơ thể': !1
    },
    'Ngoại hình mặc định': {
      'Trang phục': {
        'Đầu': 'Tóc uốn xoăn hơi quyến rũ',
        'Áo': 'Áo len cổ V',
        'Quần váy': 'Váy ngắn trên đầu gối',
        'Nội y Trên': 'Áo lót ren nửa ngực',
        'Nội y Dưới': 'Quần lót ren tam giác',
        'Tất': 'Tất da chân màu đen',
        'Giày': 'Giày gót thấp',
        'Áo khoác': 'Không',
        'Phụ kiện': 'Nhẫn cưới, Dây chuyền đơn giản',
        'Trang sức đặc biệt': 'Không',
        'Phong cách tổng thể': 'Bắt đầu chú trọng gợi cảm',
        'Độ hở hang': 'Mát mẻ',
        'Độ gọn gàng': 'Hơi xộc xệch'
      },
      'Trang điểm': {
        'Kem nền': 'Kem nền bắt sáng',
        'Trang điểm mắt': 'Phấn mắt màu đất, kẻ mắt',
        'Trang điểm môi': 'Son bóng màu hồng',
        'Má hồng': 'Hồng đào tự nhiên',
        'Trang điểm đặc biệt': 'Không',
        'Độ đậm nhạt': 'Trang điểm hàng ngày',
        'Phong cách tổng thể': 'Mang đậm nữ tính'
      },
      'Mô tả khí chất': 'Sự quyến rũ của phụ nữ trưởng thành'
    },
    'Hệ số thời gian': 1
  },
  {
    'Giai đoạn': 3,
    'Tiêu đề giai đoạn': 'Trầm luân',
    'Phạm vi độ sa đọa': [40, 59],
    'Ràng buộc': {
      'Độ hở hang tối thiểu': 'Mát mẻ',
      'Phạm vi độ hở hang': ['Mát mẻ', 'Hở hang'],
      'Độ đậm nhạt tối thiểu': 'Trang điểm hàng ngày',
      'Phạm vi độ đậm nhạt': ['Trang điểm hàng ngày', 'Trang điểm đậm'],
      'Cho phép trang sức đặc biệt': !0,
      'Cho phép cải tạo cơ thể': !1
    },
    'Ngoại hình mặc định': {
      'Trang phục': {
        'Đầu': 'Tóc dài uốn lượn chải chuốt kỹ',
        'Áo': 'Áo sơ mi voan mỏng bán trong suốt',
        'Quần váy': 'Váy siêu ngắn ôm mông',
        'Nội y Trên': 'Áo lót tình thú ren khoét lỗ',
        'Nội y Dưới': 'Quần lót lọt khe',
        'Tất': 'Tất lưới kèm kẹp đùi',
        'Giày': 'Giày gót nhọn',
        'Áo khoác': 'Không',
        'Phụ kiện': 'Vòng cổ dạng chocker, Khuyên tai',
        'Trang sức đặc biệt': 'Dây xích eo',
        'Phong cách tổng thể': 'Gợi cảm dụ dỗ',
        'Độ hở hang': 'Hở hang',
        'Độ gọn gàng': 'Hơi xộc xệch'
      },
      'Trang điểm': {
        'Kem nền': 'Kem nền dày',
        'Trang điểm mắt': 'Mắt khói, lông mi giả',
        'Trang điểm môi': 'Son đỏ tươi',
        'Má hồng': 'Phấn má rõ nét',
        'Trang điểm đặc biệt': 'Không',
        'Độ đậm nhạt': 'Trang điểm đậm',
        'Phong cách tổng thể': 'Gợi cảm lẳng lơ'
      },
      'Mô tả khí chất': 'Người đàn bà lẳng lơ đầy cám dỗ'
    },
    'Hệ số thời gian': 0.8
  },
  {
    'Giai đoạn': 4,
    'Tiêu đề giai đoạn': 'Điên cuồng',
    'Phạm vi độ sa đọa': [60, 79],
    'Ràng buộc': {
      'Độ hở hang tối thiểu': 'Hở hang',
      'Phạm vi độ hở hang': ['Hở hang', 'Cực kỳ hở hang'],
      'Độ đậm nhạt tối thiểu': 'Trang điểm đậm',
      'Phạm vi độ đậm nhạt': ['Trang điểm đậm', 'Trang điểm lòe loẹt'],
      'Cho phép trang sức đặc biệt': !0,
      'Cho phép cải tạo cơ thể': !0
    },
    'Ngoại hình mặc định': {
      'Trang phục': {
        'Đầu': 'Tóc dài ướt át xộc xệch',
        'Áo': 'Chỉ dán núm vú hoặc bọc vú trong suốt',
        'Quần váy': 'Vài mảnh vải gần như không tồn tại',
        'Nội y Trên': 'Không',
        'Nội y Dưới': 'Không',
        'Tất': 'Tất lưới rách',
        'Giày': 'Giày gót siêu cao hoặc đi chân trần',
        'Áo khoác': 'Không',
        'Phụ kiện': 'Vòng cổ chó, Còng tay, Xích chân',
        'Trang sức đặc biệt': 'Vẽ body painting, Trang sức gợi dục, Hình xăm dâm đãng',
        'Phong cách tổng thể': 'Sa đọa triệt để',
        'Độ hở hang': 'Cực kỳ hở hang',
        'Độ gọn gàng': 'Xộc xệch'
      },
      'Trang điểm': {
        'Kem nền': 'Dày cộm nhưng đã loang lổ',
        'Trang điểm mắt': 'Trang điểm đậm nhòe nhoẹt, mi giả bong tróc',
        'Trang điểm môi': 'Son đỏ chót lem luốc',
        'Má hồng': 'Đỏ ửng bất thường',
        'Trang điểm đặc biệt': 'Trang điểm vệt nước mắt',
        'Độ đậm nhạt': 'Trang điểm lòe loẹt',
        'Phong cách tổng thể': 'Dâm đãng sa đọa'
      },
      'Mô tả khí chất': 'Dâm phụ hoàn toàn trầm luân'
    },
    'Gợi ý cải tạo cơ thể': {
      'Hình xăm có thể xuất hiện': ['Hình xăm dâm bụng dưới', 'Dấu ấn mặt trong đùi', 'Nơ bướm sau eo', 'Hình xăm tử cung'],
      'Xỏ khuyên có thể xuất hiện': ['Khuyên núm vú', 'Khuyên rốn', 'Khuyên hột le'],
      'Dấu vết vĩnh viễn': ['Dấu sắt nung ở chỗ kín', 'Dấu ấn sở hữu']
    },
    'Hệ số thời gian': 0.6
  },
  {
    'Giai đoạn': 5,
    'Tiêu đề giai đoạn': 'Viên mãn',
    'Phạm vi độ sa đọa': [80, 100],
    'Ràng buộc': {
      'Độ hở hang tối thiểu': 'Kín đáo',
      'Phạm vi độ hở hang': ['Kín đáo', 'Bình thường'],
      'Độ đậm nhạt tối thiểu': 'Mặt mộc',
      'Phạm vi độ đậm nhạt': ['Mặt mộc', 'Trang điểm nhẹ'],
      'Cho phép trang sức đặc biệt': !0,
      'Cho phép cải tạo cơ thể': !0
    },
    'Ngoại hình mặc định': {
      'Trang phục': {
        'Đầu': 'Kiểu tóc chải chuốt hoàn hảo',
        'Áo': 'Đồ mặc nhà đoan trang thanh lịch',
        'Quần váy': 'Váy vóc nhã nhặn',
        'Nội y Trên': 'Áo lót tình thú cao cấp (Ẩn giấu)',
        'Nội y Dưới': 'Quần lót tình thú cao cấp (Ẩn giấu)',
        'Tất': 'Tất lụa chất lượng cao',
        'Giày': 'Giày thanh lịch thoải mái',
        'Áo khoác': 'Áo khoác nhã nhặn',
        'Phụ kiện': 'Nhẫn cưới, Trang sức tinh xảo',
        'Trang sức đặc biệt': 'Cải tạo cơ thể được giấu kín hoàn toàn',
        'Phong cách tổng thể': 'Vợ hiền hoàn hảo, bên trong cực kỳ dâm đãng',
        'Độ hở hang': 'Bình thường',
        'Độ gọn gàng': 'Gọn gàng'
      },
      'Trang điểm': {
        'Kem nền': 'Lớp nền tự nhiên hoàn hảo không tì vết',
        'Trang điểm mắt': 'Trang điểm mắt dịu dàng tươi tắn',
        'Trang điểm môi': 'Màu môi mềm mại tự nhiên',
        'Má hồng': 'Ửng hồng khỏe mạnh tự nhiên',
        'Trang điểm đặc biệt': 'Không (Che giấu hoàn hảo mọi dấu vết)',
        'Độ đậm nhạt': 'Trang điểm nhẹ',
        'Phong cách tổng thể': 'Tươi mát tự nhiên'
      },
      'Mô tả khí chất': 'Bề ngoài hiền thục, nội tâm cực kỳ dâm đãng'
    },
    'Gợi ý cải tạo cơ thể': {
      'Hình xăm có thể xuất hiện': ['Mạng lưới xăm dâm ẩn giấu toàn thân', 'Trận pháp dâm đãng hoàn chỉnh ở tử cung', 'Huy hiệu sở hữu hoàn chỉnh'],
      'Xỏ khuyên có thể xuất hiện': ['Tất cả các loại khuyên thông thường', 'Khuyên xỏ dạng chuỗi kết nối thiết kế riêng'],
      'Dấu vết vĩnh viễn': ['Khắc ấn nô lệ hoàn chỉnh', 'Dấu sắt nung sở hữu vĩnh viễn', 'Dấu ấn khế ước linh hồn']
    },
    'Hệ số thời gian': 0.5
  }
];

function y(e) {
  return j.find(t => t['Giai đoạn'] === e);
}

function A(e) {
  for (const t of j) {
    const [n, o] = t['Phạm vi độ sa đọa'];
    if (e >= n && e <= o) return t['Giai đoạn'];
  }
  return 5;
}

function I(e) {
  const t = y(e);
  return t?.['Tiêu đề giai đoạn'] || 'Kháng cự';
}

const O = Object.fromEntries([
  {
    'Tên': 'Nội y ren',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Mở rộng cơ thể'],
    'Tăng tốc': 0.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 150,
    'Giới thiệu': 'Bí mật dán sát vào da thịt, chỉ mình cô ấy biết',
    'Mặc lần đầu': 'Cô ấy giấu chồng, mặc bộ nội y ren mà bạn mua áp sát vào da thịt — cả ngày cứ thẫn thờ cảm nhận sự tồn tại của nó'
  },
  {
    'Tên': 'Nội y tình thú xẻ tà',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Mở rộng cơ thể', 'Chịch'],
    'Tăng tốc': 1,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !0,
    'Giá': 300,
    'Giới thiệu': 'Mặc nó vào, những ý niệm dâm đãng không còn xa vời nữa',
    'Mặc lần đầu': 'Cô ấy khóa trái cửa phòng để thử bộ nội y xẻ tà đó, đứng trước gương rất lâu, mặt càng lúc càng đỏ bừng'
  },
  {
    'Tên': 'Miếng dán vú tàng hình',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Chịch'],
    'Tăng tốc': 1.5,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !0,
    'Giá': 500,
    'Giới thiệu': 'Từ nay khoảng cách giữa cô ấy và trạng thái "thả rông" chỉ là một lớp dán mỏng dính',
    'Mặc lần đầu': 'Lần đầu tiên cô ấy không mặc áo lót, chỉ dán hai miếng dán vú xuất hiện trước mặt người nhà, mỗi bước đi tim đều đập thình thịch'
  },
  {
    'Tên': 'Quần lót lọt khe không viền',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Mở rộng cơ thể'],
    'Tăng tốc': 0.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 180,
    'Giới thiệu': 'Một sợi dây mỏng manh cọ xát vào lồn, luôn nhắc nhở cô ấy về sự tồn tại của nó',
    'Mặc lần đầu': 'Cô ấy mặc chiếc quần lọt khe gần như không tồn tại đó để làm việc nhà, cảm giác cọ xát dị thường khiến cô ấy cả ngày mất tập trung'
  },
  {
    'Tên': 'Bikini tình thú ba mảnh',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Mở rộng cơ thể', 'Chịch'],
    'Tăng tốc': 1,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 350,
    'Giới thiệu': 'Ba mảnh vải và vài sợi dây mỏng, mặc vào không phải để che đậy',
    'Mặc lần đầu': 'Cô ấy khóa cửa mặc bộ ba mảnh đó, quay người sang một bên trước gương — phần vải che đậy ít đến đáng thương, nhưng cô ấy lại không lập tức cởi ra'
  },
  {
    'Tên': 'Quần tất hở lồn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Chịch'],
    'Tăng tốc': 1.5,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !0,
    'Giá': 480,
    'Giới thiệu': 'Trông có vẻ là quần tất đoan trang, chỉ mình cô ấy biết chỗ đũng quần đang mở toang',
    'Mặc lần đầu': 'Cô ấy mặc đôi quần tất đó, bề ngoài không khác gì ngày thường — chỉ mình cô ấy biết mỗi khi bước đi, luồng gió lạnh lùa vào cái lồn đang mở toang'
  },
  {
    'Tên': 'Bodysuit tạo dáng',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Mở rộng cơ thể'],
    'Tăng tốc': 0.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 200,
    'Giới thiệu': 'Bó sát từ cổ đến háng, đường cong cơ thể lộ rõ không sót chút nào'
  },
  {
    'Tên': 'Tất đùi đen kèm kẹp',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tương tác mập mờ', 'Chịch'],
    'Tăng tốc': 1,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 320,
    'Giới thiệu': 'Tất dài và dây kẹp quanh eo, là ám hiệu kinh điển nhất của sự dâm đãng'
  },
  {
    'Tên': 'Quần lót chuỗi ngọc trai',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Chịch'],
    'Tăng tốc': 1.5,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !0,
    'Giá': 520,
    'Giới thiệu': 'Một chuỗi ngọc trai thay thế cho lớp vải, mỗi bước đi đều là sự tra tấn cọ xát vào hột le'
  },
  {
    'Tên': 'Lưới liền thân khoét lỗ',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Chịch', 'Tuyệt đối phục tùng'],
    'Tăng tốc': 2,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !0,
    'Giá': 800,
    'Giới thiệu': 'Thay vì nói là mặc vào, chi bằng nói là bị lưới trói buộc như một con đĩ'
  },
  {
    'Tên': 'Váy liền ôm sát',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': ['Tiếp xúc thân mật'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 100,
    'Giới thiệu': 'Phác họa vóc dáng một cách vừa vặn, khiến việc lại gần nhau trở nên tự nhiên',
    'Mặc lần đầu': 'Cô ấy mặc chiếc váy bạn chọn rồi soi gương, đã lâu lắm rồi mới thấy mình còn đẹp đến thế'
  },
  {
    'Tên': 'Áo len cổ khoét sâu',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tương tác mập mờ', 'Tiếp xúc thân mật'],
    'Tăng tốc': 1,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 250,
    'Giới thiệu': 'Mỗi khoảnh khắc cúi xuống lộ rãnh vú đều là một lời mời gọi',
    'Mặc lần đầu': 'Cô ấy do dự rất lâu mới mặc chiếc áo len khoét sâu đó, trước khi ra ngoài đã đứng trước gương kéo cổ áo lên ba lần'
  },
  {
    'Tên': 'Váy ngủ xuyên thấu',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Tương tác mập mờ', 'Mở rộng cơ thể'],
    'Tăng tốc': 1.5,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !0,
    'Giá': 450,
    'Giới thiệu': 'Ngôi nhà vào ban đêm, từ nay mang một ý nghĩa dâm đãng khác',
    'Mặc lần đầu': 'Đêm khuya, cô ấy mặc chiếc váy ngủ mỏng tang xuyên thấu bước ra khỏi phòng rót nước, biết rõ rằng bạn có thể sẽ nhìn thấy'
  },
  {
    'Tên': 'Đồ tập yoga bó sát',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Tiếp xúc thân mật', 'Tương tác mập mờ'],
    'Tăng tốc': 0.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 200,
    'Giới thiệu': '"Tập thể dục ở nhà" là cái cớ hoàn hảo nhất, đường cong nảy nở là ngôn ngữ tốt nhất',
    'Mặc lần đầu': 'Cô ấy thay đồ yoga ra phòng khách vươn vai, lớp vải bó sát hằn lên từng tấc đường cong — cô ấy nói chỉ là muốn rèn luyện sức khỏe'
  },
  {
    'Tên': 'Áo croptop hở rốn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tương tác mập mờ'],
    'Tăng tốc': 1,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 280,
    'Giới thiệu': 'Tuổi này rồi còn mặc cái này sao? Cô ấy do dự rất lâu, nhưng cuối cùng vẫn mặc',
    'Mặc lần đầu': 'Lần đầu tiên cô ấy mặc chiếc áo ngắn hở rốn, liên tục ngắm nghía vòng eo trước gương — "Có phải trẻ trâu quá không..." Miệng thì nói vậy, nhưng lại không hề thay ra'
  },
  {
    'Tên': 'Tạp dề thả rông',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Mở rộng cơ thể', 'Chịch'],
    'Tăng tốc': 1.5,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !0,
    'Giá': 520,
    'Giới thiệu': 'Cách ăn mặc nguy hiểm nhất trong nhà bếp, nhìn từ phía sau là trần truồng hoàn toàn',
    'Mặc lần đầu': 'Nhân lúc ở nhà chỉ có hai người, cô ấy không mặc gì ngoài chiếc tạp dề bước vào bếp — khi quay người múc canh, tấm lưng trần trụi khiến không khí như đông đặc lại'
  },
  {
    'Tên': 'Đồ mặc nhà cặp đôi',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': ['Bầu bạn giao tiếp', 'Phụ thuộc tình cảm'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 120,
    'Giới thiệu': 'Chiếc còn lại của bộ đồ nằm trong tủ quần áo của bạn — một bí mật nhỏ không ai nói ra trong nhà'
  },
  {
    'Tên': 'Quần short siêu ngắn ôm mông',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Tương tác mập mờ'],
    'Tăng tốc': 0.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 220,
    'Giới thiệu': 'Đôi chân thon và đường cong mông lộ ra không chút che giấu'
  },
  {
    'Tên': 'Sườn xám xẻ tà cao',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tương tác mập mờ', 'Mở rộng cơ thể'],
    'Tăng tốc': 1,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 350,
    'Giới thiệu': 'Mỗi bước đi tà áo lại trượt lên tận đùi non — vẻ cổ điển là lớp ngụy trang hoàn hảo nhất'
  },
  {
    'Tên': 'Áo sơ mi trắng của bạn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Thay thế gia đình', 'Nhận đồng thân phận'],
    'Tăng tốc': 1.5,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !0,
    'Giá': 480,
    'Giới thiệu': 'Chiếc áo lấy từ tủ của bạn — vạt áo vừa đủ che đi cái lồn, bên trong không mặc gì khác'
  },
  {
    'Tên': 'Váy lụa satin đỏ rượu',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tương tác mập mờ'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 320,
    'Giới thiệu': 'Chất lụa bóng bẩy tôn lên sắc da tuyệt đẹp — đẹp đến mức người nhà cũng phải chú ý'
  },
  {
    'Tên': 'Váy cổ lọ cúc bấm ẩn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Thay thế gia đình', 'Chịch'],
    'Tăng tốc': 2,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 750,
    'Giới thiệu': 'Sự đoan trang không thể chê vào đâu được trong mắt người khác — nhưng vị trí khóa kéo tàng hình bên hông, chỉ bạn mới biết để lột ra'
  },
  {
    'Tên': 'Vòng tay chỉ đỏ',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': ['Phụ thuộc tình cảm'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 100,
    'Giới thiệu': 'Bạn tự tay đeo cho cô ấy, cô ấy không nỡ tháo ra',
    'Mặc lần đầu': 'Bạn buộc sợi chỉ đỏ lên cổ tay cô ấy, cô ấy cúi đầu nhìn rất lâu, khóe miệng giấu không được nụ cười'
  },
  {
    'Tên': 'Vòng cổ chocker',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tuyệt đối phục tùng'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 300,
    'Giới thiệu': 'Giống vòng cổ chó mà lại không phải, cảm giác thuộc về ai đó dán chặt nơi cuống họng',
    'Mặc lần đầu': 'Cô ấy đeo chiếc chocker đó lên, ngón tay vuốt ve chốt cài trước cổ, trong lòng dâng lên một từ khó tả — "Thuộc về"'
  },
  {
    'Tên': 'Nhẫn trơn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Thay thế gia đình'],
    'Tăng tốc': 1.5,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !0,
    'Giá': 600,
    'Giới thiệu': 'Bạn tặng. Đeo nó vào có ý nghĩa gì, cô ấy hiểu rõ hơn ai hết',
    'Mặc lần đầu': 'Cô ấy tháo nhẫn cưới ra, đeo chiếc nhẫn trơn bạn tặng lên ngón áp út — cứ nhìn chằm chằm vào bàn tay đó rất lâu, rất lâu'
  },
  {
    'Tên': 'Dây chuyền cặp đôi',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Phụ thuộc tình cảm', 'Nhận đồng thân phận'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 150,
    'Giới thiệu': 'Sợi dây chuyền còn lại đang nằm trên cổ bạn',
    'Mặc lần đầu': 'Cô ấy đeo dây chuyền lên mới nhận ra đây là đồ đôi — sợi còn lại ở trên người bạn. Cô ấy sờ mặt dây chuyền ngẩn người một lúc, nhưng không tháo ra'
  },
  {
    'Tên': 'Dây xích rốn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Mở rộng cơ thể'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 280,
    'Giới thiệu': 'Sợi xích mỏng giấu dưới lớp áo, áp vào bụng dưới mát lạnh',
    'Mặc lần đầu': 'Cô ấy buộc sợi xích mỏng đó quanh eo bụng, áo che lại thì không ai thấy — nhưng chính vì không ai thấy, nó mới giống như một bí mật dâm đãng'
  },
  {
    'Tên': 'Khuyên tai ngọc trai',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': ['Phụ thuộc tình cảm'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 120,
    'Giới thiệu': 'Sự dịu dàng đung đưa bên tai, là do bạn chọn'
  },
  {
    'Tên': 'Lắc chân mỏng manh',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Tương tác mập mờ', 'Tiếp xúc thân mật'],
    'Tăng tốc': 0.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 180,
    'Giới thiệu': 'Tia sáng bạc lấp lánh trên mắt cá chân, cúi đầu mới nhìn thấy'
  },
  {
    'Tên': 'Dây chuyền xương quai xanh hoa hồng',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tương tác mập mờ'],
    'Tăng tốc': 1,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 300,
    'Giới thiệu': 'Một đóa hồng lơ lửng nơi hõm xương quai xanh, dẫn dụ ánh mắt nhìn xuống khe vú'
  },
  {
    'Tên': 'Lắc chân gắn chuông',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Tuyệt đối phục tùng'],
    'Tăng tốc': 1.5,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 480,
    'Giới thiệu': 'Bước một bước kêu một tiếng — vị trí của cô ấy, bạn luôn nắm rõ như một con thú cưng'
  },
  {
    'Tên': 'Vòng cổ da',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Tuyệt đối phục tùng'],
    'Tăng tốc': 1.5,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !0,
    'Giá': 650,
    'Giới thiệu': 'Không phải dây chuyền — đeo nó vào có ý nghĩa gì, cô ấy sẽ dần dần hiểu ra thân phận đĩ điếm của mình'
  },
  {
    'Tên': 'Nước hoa sương mù',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': ['Phụ thuộc tình cảm'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 100,
    'Giới thiệu': 'Mùi hương thoang thoảng, là xịt vì ai đây',
    'Mặc lần đầu': 'Cô ấy thử xịt nước hoa lên cổ tay, trước khi ra ngoài còn xịt thêm một chút sau gáy — bình thường cô ấy không bao giờ làm vậy'
  },
  {
    'Tên': 'Son môi đỏ tươi',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tương tác mập mờ'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 250,
    'Giới thiệu': 'Màu son này, không phải bôi để cho chồng xem',
    'Mặc lần đầu': 'Cô ấy nhìn vào gương tô thỏi son đỏ tươi, mím môi — người phụ nữ trong gương thật xa lạ nhưng lại tràn đầy sức sống'
  },
  {
    'Tên': 'Trang điểm dạ hội quyến rũ',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Tương tác mập mờ', 'Chịch'],
    'Tăng tốc': 1.5,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 450,
    'Giới thiệu': 'Nét vẽ hất lên ở đuôi mắt, chính là vẽ ra dục vọng',
    'Mặc lần đầu': 'Cô ấy làm theo hướng dẫn trang điểm một kiểu dạ hội chưa từng thử, đuôi mắt hơi xếch, màu môi đậm — cô ấy biết đêm nay muốn cho ai xem'
  },
  {
    'Tên': 'Làm móng đỏ tươi',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Tương tác mập mờ'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 150,
    'Giới thiệu': 'Mười ngón tay đỏ chót, lúc làm việc nhà trông cực kỳ chói mắt',
    'Mặc lần đầu': 'Cô ấy sơn xong bộ móng đỏ tươi, lúc chờ khô chợt nghĩ — ngày mai đôi bàn tay này còn phải nấu cơm cho cả nhà. Càng nghĩ, gốc tai càng nóng ran'
  },
  {
    'Tên': 'Nước hoa kích dục',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Chịch'],
    'Tăng tốc': 1.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 480,
    'Giới thiệu': 'Xịt sau gáy và xương quai xanh, mùi hương chỉ có tác dụng với người ghé sát vào',
    'Mặc lần đầu': 'Cô ấy xịt lọ nước hoa đó sau gáy và xương quai xanh, mùi hương ngọt ngấy tan ra trên da thịt — chỉ có người ghé đủ gần mới ngửi thấy'
  },
  {
    'Tên': 'Son bóng căng mọng',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Tiếp xúc thân mật'],
    'Tăng tốc': 0.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 160,
    'Giới thiệu': 'Đôi môi nhìn là thấy mềm, khiến người ta muốn nếm thử'
  },
  {
    'Tên': 'Trang điểm mắt hoa đào',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tương tác mập mờ', 'Phụ thuộc tình cảm'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 260,
    'Giới thiệu': 'Sắc hồng tán nhẹ ở đuôi mắt, nhìn ai cũng như đang đưa tình'
  },
  {
    'Tên': 'Sữa tắm cùng loại',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Nhận đồng thân phận', 'Tuyệt đối phục tùng'],
    'Tăng tốc': 2,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !1,
    'Giá': 680,
    'Giới thiệu': 'Dùng chung một chai với bạn — từ nay trên người cô ấy là mùi của bạn, loại mùi không thể rửa sạch'
  },
  {
    'Tên': 'Trang điểm ửng đỏ phát tình',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Chịch'],
    'Tăng tốc': 2,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 700,
    'Giới thiệu': 'Vết ửng đỏ do trang điểm? Hay là loại ửng đỏ do nứng lồn không thể tẩy đi'
  },
  {
    'Tên': 'Khuyên rốn',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Tương tác mập mờ'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 400,
    'Cộng thêm độ sa đọa': 4,
    'Giới thiệu': 'Chiếc khuyên đầu tiên, sự nổi loạn nho nhỏ giấu dưới lớp áo',
    'Mặc lần đầu': 'Cô ấy nằm trên ghế của tiệm xỏ khuyên, cơn đau nhói khi kim đâm qua rốn khiến cô ấy nắm chặt tay — trên đường về, cô ấy cứ cách lớp áo sờ mãi chiếc khuyên nhỏ đó'
  },
  {
    'Tên': 'Khuyên lưỡi',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Chịch'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 500,
    'Cộng thêm độ sa đọa': 4,
    'Giới thiệu': 'Lúc nói chuyện không nhìn thấy, công dụng để bú cặc chỉ hai người biết',
    'Mặc lần đầu': 'Đầu lưỡi có thêm một hạt kim loại, lúc nói chuyện cô ấy luôn bất giác đẩy nó lên vòm miệng — cô ấy rất rõ thứ này dùng để làm gì'
  },
  {
    'Tên': 'Khuyên núm vú',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Mở rộng cơ thể'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 600,
    'Cộng thêm độ sa đọa': 4,
    'Giới thiệu': 'Mỗi lần vải vóc cọ xát vào vú đều là một lời nhắc nhở',
    'Mặc lần đầu': 'Sau khi cơn đau nhói ở hai bên qua đi, là sự nhạy cảm không thể xua tan — lúc thay quần áo, cô ấy đứng trước gương nhìn chằm chằm vào hai điểm sáng bạc trên vú rất lâu'
  },
  {
    'Tên': 'Hình xăm bướm sau eo',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Tương tác mập mờ'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 550,
    'Cộng thêm độ sa đọa': 4,
    'Giới thiệu': 'Một con bướm thoắt ẩn thoắt hiện khi cúi người',
    'Mặc lần đầu': 'Mũi kim của thợ xăm di chuyển trên eo sau suốt hai tiếng. Về nhà, cô ấy quay lưng lại gương vén vạt áo lên — con bướm đó đang đậu ở vị trí dâm đãng nhất'
  },
  {
    'Tên': 'Hình xăm dâm bụng dưới',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Chịch'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 700,
    'Cộng thêm độ sa đọa': 5,
    'Giới thiệu': 'Ý nghĩa của hình xăm ngay trên lồn đó, người hiểu nhìn một cái là biết ngay',
    'Mặc lần đầu': 'Cô ấy yêu cầu thợ xăm xăm đúng theo bức hình đó lên bụng dưới — khi mũi kim di chuyển, mặt cô ấy đỏ bừng như bốc cháy, vì cô ấy biết hình xăm này có nghĩa là cái lồn này chỉ để đụ'
  },
  {
    'Tên': 'Khuyên hột le',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Chịch'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 800,
    'Cộng thêm độ sa đọa': 5,
    'Giới thiệu': 'Món trang sức vĩnh viễn ở nơi riêng tư nhất, mỗi bước đi đều là sự tra tấn hột le và tận hưởng',
    'Mặc lần đầu': 'Đây là quyết định quá đáng nhất cô ấy từng làm. Vài ngày chờ lành vết thương, cô ấy đi lại đều phải cẩn thận — từ nay mỗi cử động nhẹ đều nhắc nhở cô ấy đã biến thành con đĩ thế nào'
  },
  {
    'Tên': 'Phẫu thuật bơm vú',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Mở rộng cơ thể'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 1200,
    'Cộng thêm độ sa đọa': 6,
    'Giới thiệu': 'Lấy danh nghĩa "để đẹp hơn", cặp vú từ nay phục vụ cho dục vọng',
    'Mặc lần đầu': 'Ngày cắt chỉ cô ấy đứng trước gương, độ cong trước ngực xa lạ và căng tròn — quần áo cũ đều chật ních, tim cô ấy đập thình thịch nghĩ: Bạn ấy sẽ chú ý tới cặp vú này'
  },
  {
    'Tên': 'Lỗ tai đầu tiên',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Phụ thuộc tình cảm'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 200,
    'Cộng thêm độ sa đọa': 2,
    'Giới thiệu': 'Bạn đi cùng cô ấy đi bấm — đau một chút, nhớ rất lâu',
    'Mặc lần đầu': 'Lúc bấm lỗ tai cô ấy theo bản năng nắm chặt tay {{user}}. Trên đường về cô ấy cứ chạm nhẹ vào chiếc khuyên bạc nhỏ xíu trên dái tai — đây là việc "vượt rào" đầu tiên bạn cùng cô ấy làm'
  },
  {
    'Tên': 'Hình xăm ngôi sao cổ tay trong',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tiếp xúc thân mật'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 350,
    'Cộng thêm độ sa đọa': 3,
    'Giới thiệu': 'Một ngôi sao to bằng hạt gạo, lật cổ tay mới nhìn thấy',
    'Mặc lần đầu': 'Khi mũi kim di chuyển ở mặt trong cổ tay, cô ấy luôn nhìn {{user}}. Xăm một ngày tháng biến thành ngôi sao nhỏ — từ nay nâng tay xem giờ, đều sẽ nhớ lại đó là ngày nào'
  },
  {
    'Tên': 'Hình xăm họ sau tai',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Nhận đồng thân phận'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 550,
    'Cộng thêm độ sa đọa': 4,
    'Giới thiệu': 'Chữ cái cách tai một centimet — cô ấy lén đổi họ, chỉ bạn biết',
    'Mặc lần đầu': 'Thợ xăm hỏi chữ cái này có ý nghĩa gì, cô ấy cười không đáp. Từ nay sau tai cô ấy giấu một cái họ — lúc vuốt tóc ngón tay sượt qua, trong lòng sẽ khẽ an tâm'
  },
  {
    'Tên': 'Hình xăm vết nhẫn ngón áp út',
    'Phân loại': 'Thể cải',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Thay thế gia đình'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 800,
    'Cộng thêm độ sa đọa': 5,
    'Giới thiệu': 'Thứ tháo ra được là nhẫn, thứ xăm lên thì không tháo được',
    'Mặc lần đầu': 'Cô ấy tháo nhẫn cưới ra, để mũi kim xăm một vòng chỉ cực mảnh dọc theo vết hằn của nhẫn. Sau khi lành, vòng tròn đó rõ ràng hơn bất kỳ chiếc nhẫn nào — ngón tay này, đã có chủ nhân mới'
  },
  {
    'Tên': 'Dép bông đi trong nhà',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Giày',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': ['Bầu bạn giao tiếp', 'Phụ thuộc tình cảm'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 80,
    'Giới thiệu': 'Một đôi dép mềm bình thường không thể bình thường hơn — chính việc "do bạn chọn" đang phát huy tác dụng'
  },
  {
    'Tên': 'Dép quai mảnh đính cục bông',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Giày',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Tiếp xúc thân mật'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 180,
    'Giới thiệu': 'Quai mảnh để lộ mu bàn chân, dẫm ra một chút nhẹ nhàng khác thường trong nhà'
  },
  {
    'Tên': 'Giày cao gót đế đỏ',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Giày',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tương tác mập mờ', 'Mở rộng cơ thể'],
    'Tăng tốc': 1,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 350,
    'Giới thiệu': 'Đi giày cao gót ở nhà không có bất kỳ lý do thực tế nào — đó chính là ý nghĩa của nó'
  },
  {
    'Tên': 'Giày cao gót buộc dây khóa',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Giày',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Chịch', 'Tuyệt đối phục tùng'],
    'Tăng tốc': 1.5,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !1,
    'Giá': 600,
    'Giới thiệu': 'Dây mảnh quanh mắt cá chân quấn thành hình ổ khóa, muốn cởi ra phải được cho phép'
  },
  {
    'Tên': 'Nội y thiếu nữ bạn chọn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Phụ thuộc tình cảm'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 130,
    'Giới thiệu': 'Không gợi cảm, thậm chí hơi trẻ con — nhưng thứ mặc sát da thịt mỗi ngày, là do bạn chọn'
  },
  {
    'Tên': 'Nội y khóa trái tim',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tiếp xúc thân mật'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 300,
    'Giới thiệu': 'Khóa trước là một ổ khóa hình trái tim nhỏ — chìa khóa làm thành mặt dây chuyền, đang ở chỗ bạn'
  },
  {
    'Tên': 'Quần lót cặp đôi',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Tiếp xúc thân mật', 'Tiếp xúc thân mật'],
    'Tăng tốc': 1.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 460,
    'Giới thiệu': 'Chiếc còn lại của cặp đôi, nằm trong ngăn kéo của bạn'
  },
  {
    'Tên': 'Trang điểm kỹ lưỡng cấp độ hẹn hò',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Tiếp xúc thân mật', 'Phụ thuộc tình cảm'],
    'Tăng tốc': 1.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 430,
    'Giới thiệu': 'Ở nhà cũng trang điểm mất bốn mươi phút — giống như mỗi ngày đều đang đi hẹn hò'
  },
  {
    'Tên': 'Giày trắng tản bộ sóng vai',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Giày',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tiếp xúc thân mật'],
    'Tăng tốc': 1,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 240,
    'Giới thiệu': 'Bạn nói ăn xong muốn đi dạo cùng cô ấy, hôm sau cô ấy liền mua một đôi dễ đi'
  },
  {
    'Tên': 'Đồng hồ đôi khắc ngày sinh',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Phụ thuộc tình cảm'],
    'Tăng tốc': 2,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !0,
    'Giá': 700,
    'Giới thiệu': 'Mặt sau đồng hồ khắc hai ngày sinh — đem thời gian cũng ghép thành đôi'
  },
  {
    'Tên': 'Váy tạp dề vàng nhạt',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Nhận đồng thân phận'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 160,
    'Giới thiệu': 'Buộc nó vào đứng trong bếp, giống như nữ chủ nhân danh chính ngôn thuận của ngôi nhà này'
  },
  {
    'Tên': 'Nội y thêu họ chồng',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Nhận đồng thân phận'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 330,
    'Giới thiệu': 'Góc áo thêu một chữ cái viết tắt họ nhỏ xíu — không phải họ của nhà chồng cô ấy'
  },
  {
    'Tên': 'Nội y ren trắng phong cách tân hôn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Thay thế gia đình'],
    'Tăng tốc': 1.5,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !0,
    'Giá': 540,
    'Giới thiệu': 'Nội y chất liệu voan trắng — giống như gả chính mình đi thêm một lần nữa'
  },
  {
    'Tên': 'Vòng ngọc gia truyền',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Nhận đồng thân phận'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 320,
    'Giới thiệu': 'Bạn trịnh trọng đeo cho cô ấy — cách đeo đó, giống như "truyền" lại thứ gì đó cho nữ chủ nhân của gia đình này'
  },
  {
    'Tên': 'Mặt dây chuyền khắc họ',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Thay thế gia đình', 'Nhận đồng thân phận'],
    'Tăng tốc': 1.5,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !0,
    'Giá': 520,
    'Giới thiệu': 'Mặt trong dây chuyền khắc họ của bạn — áp sát vào tim, cho ai xem không quan trọng'
  },
  {
    'Tên': 'Trang điểm nhẹ quán xuyến việc nhà',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Nhận đồng thân phận'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 140,
    'Giới thiệu': 'Thanh tao đoan trang, là lớp trang điểm nghiêm túc chăm chút bản thân vì một gia đình'
  },
  {
    'Tên': 'Trang điểm đỏ chính thất',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Thay thế gia đình'],
    'Tăng tốc': 2,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 720,
    'Giới thiệu': 'Trang điểm đỏ đoan trang cấp độ tiệc cưới — màu này, chỉ chính thất mới xứng dùng'
  },
  {
    'Tên': 'Dép nhung nữ chủ nhân',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Giày',
    'Yêu cầu giai đoạn': 2,
    'Khuynh hướng loại': ['Nhận đồng thân phận'],
    'Tăng tốc': 0.5,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 120,
    'Giới thiệu': 'Thay đôi dép cũ đã đi nhiều năm sau khi kết hôn — đôi mới này, là "giày của nữ chủ nhân"'
  },
  {
    'Tên': 'Giày Mary Jane quai mảnh',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Giày',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Thay thế gia đình'],
    'Tăng tốc': 1.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 480,
    'Giới thiệu': 'Giày mũi tròn quai mảnh đoan trang — giống như mỗi tối đều đang dự tiệc gia đình của bạn'
  },
  {
    'Tên': 'Giày siêu cao gót độn đế',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Giày',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Mở rộng cơ thể'],
    'Tăng tốc': 2,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !1,
    'Giá': 750,
    'Giới thiệu': 'Đi loại giày này ở nhà, không phải để đi bộ mà để banh lồn ra đụ'
  },
  {
    'Tên': 'Đồ hầu gái cổ điển',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Tuyệt đối phục tùng'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 350,
    'Giới thiệu': 'Khoảnh khắc thắt nơ bướm tạp dề, thân phận trong nhà đã đổi thành một loại khác'
  },
  {
    'Tên': 'Váy liền corset buộc dây',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Tuyệt đối phục tùng', 'Chịch'],
    'Tăng tốc': 1.5,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !0,
    'Giá': 500,
    'Giới thiệu': 'Dây buộc sau eo phải nhờ người khác siết chặt giúp — mặc nó vào thì không thể rời xa người ta'
  },
  {
    'Tên': 'Váy dài cổ lọ kiểu trói buộc',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Tuyệt đối phục tùng'],
    'Tăng tốc': 2,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 780,
    'Giới thiệu': 'Chiếc cúc bấm cuối cùng ở cổ áo, được thiết kế ở vị trí bản thân không với tới được'
  },
  {
    'Tên': 'Nốt ruồi lệ quyến rũ',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Chịch'],
    'Tăng tốc': 1,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 280,
    'Giới thiệu': 'Một chấm dưới mắt — dụng ý khi vẽ nó lên, cô ấy sẽ dần dần hiểu'
  },
  {
    'Tên': 'Giày đế dày xích cổ chân',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Giày',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Tuyệt đối phục tùng'],
    'Tăng tốc': 2,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !1,
    'Giá': 800,
    'Giới thiệu': 'Trên vòng cổ chân rủ xuống một đoạn xích ngắn, ý nghĩa không nói cũng rõ'
  },
  {
    'Tên': 'Khuyên tai đá quý tháng sinh của bạn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Phụ thuộc tình cảm'],
    'Tăng tốc': 1,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 260,
    'Giới thiệu': 'Một chút đá quý tháng sinh của bạn trên dái tai — đồng nghĩa với việc mang bạn trên người'
  },
  {
    'Tên': 'Áo choàng tắm cặp đôi',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Tiếp xúc thân mật', 'Bầu bạn giao tiếp'],
    'Tăng tốc': 1.5,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 440,
    'Giới thiệu': 'Là một cặp với chiếc trong tủ của bạn — trong nhà sau khi tắm xong, có ảo giác như đang ở khách sạn'
  },
  {
    'Tên': 'Váy ngủ lụa kỷ niệm',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Tiếp xúc thân mật'],
    'Tăng tốc': 2,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 680,
    'Giới thiệu': 'Không xuyên thấu cũng không hở hang — nhưng chất liệu đó, chỉ tồn tại vì một người'
  },
  {
    'Tên': 'Nước hoa pha chế độc quyền',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Phụ thuộc tình cảm'],
    'Tăng tốc': 2,
    'Rủi ro': 1,
    'Chìa khóa vượt cấp': !1,
    'Giá': 700,
    'Giới thiệu': 'Thợ pha chế làm theo mô tả của bạn — trên đời này chỉ có một chai, công thức nằm trong tay bạn'
  },
  {
    'Tên': 'Trâm ngọc búi tóc',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Trang điểm',
    'Yêu cầu giai đoạn': 3,
    'Khuynh hướng loại': ['Nhận đồng thân phận'],
    'Tăng tốc': 1,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 300,
    'Giới thiệu': 'Người phụ nữ búi tóc lên, là muốn làm chủ gia đình — trâm là do bạn tặng'
  },
  {
    'Tên': 'Nội y lụa đêm tân hôn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Thay thế gia đình'],
    'Tăng tốc': 2,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 760,
    'Giới thiệu': 'Mặc lại thứ chỉ cô dâu mới mặc thêm một lần nữa — lần này, cô ấy biết là vì ai'
  },
  {
    'Tên': 'Dây xích cơ thể hai lớp',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Mở rộng cơ thể'],
    'Tăng tốc': 1.5,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 520,
    'Giới thiệu': 'Sợi xích mỏng quấn quanh người, trượt nhẹ dưới lớp áo theo từng cử động'
  },
  {
    'Tên': 'Áo choàng mặc nhà xuyên thấu',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Áo',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Mở rộng cơ thể'],
    'Tăng tốc': 2,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !1,
    'Giá': 760,
    'Giới thiệu': 'Giống như mặc đủ thứ, lại giống như trần truồng không mặc gì'
  },
  {
    'Tên': 'Bộ ren xuyên thấu toàn bộ',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Nội y',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Mở rộng cơ thể'],
    'Tăng tốc': 2,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !1,
    'Giá': 780,
    'Giới thiệu': 'Hoa văn của ren, là sự che đậy duy nhất cho cặp vú và cái lồn'
  },
  {
    'Tên': 'Vòng nịt đùi',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Chịch'],
    'Tăng tốc': 1.5,
    'Rủi ro': 2,
    'Chìa khóa vượt cấp': !1,
    'Giá': 460,
    'Giới thiệu': 'Dưới gấu váy, nơi ánh mắt không chạm tới, thắt một vòng da nhắc nhở'
  },
  {
    'Tên': 'Trứng rung điều khiển từ xa nhét lồn',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 4,
    'Khuynh hướng loại': ['Chịch', 'Tuyệt đối phục tùng'],
    'Tăng tốc': 1.5,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !0,
    'Giá': 580,
    'Giới thiệu': 'Thứ đồ chơi nhỏ giấu sát trong lồn — điều khiển không nằm trong tay cô ấy'
  },
  {
    'Tên': 'Nút đuôi cáo nhét đít',
    'Phân loại': 'Trang bị',
    'Vị trí': 'Phụ kiện',
    'Yêu cầu giai đoạn': 5,
    'Khuynh hướng loại': ['Tuyệt đối phục tùng'],
    'Tăng tốc': 2,
    'Rủi ro': 3,
    'Chìa khóa vượt cấp': !1,
    'Giá': 820,
    'Giới thiệu': 'Váy dài mặc nhà che được nó, nhưng không che được ý nghĩa dâm đãng của nó'
  },
  {
    'Tên': 'Tin nhắn viện cớ',
    'Phân loại': 'Vật phẩm tiêu hao',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 80,
    'Số tầng hồi chiêu': 18,
    'Giới thiệu': 'Một tin nhắn giải thích kịp thời, đóng băng sự nghi ngờ của Tô Văn đối với cô ấy trong 10 tầng (Hồi chiêu 18 tầng, sau khi đóng băng có 8 tầng không được bảo vệ)'
  },
  {
    'Tên': 'Thuốc an thần',
    'Phân loại': 'Vật phẩm tiêu hao',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 200,
    'Số tầng hồi chiêu': 5,
    'Giới thiệu': 'Đêm nay cô ấy đặc biệt thư giãn — Giai đoạn hiệu lực +1 trong vòng 5 tầng (Có hiệu lực sau khi cổng vượt cấp khôi phục)'
  },
  {
    'Tên': 'Rượu pha thuốc',
    'Phân loại': 'Vật phẩm tiêu hao',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 350,
    'Số tầng hồi chiêu': 5,
    'Giới thiệu': 'Ranh giới ý thức bị ngâm mềm — Giai đoạn hiệu lực +2 trong vòng 3 tầng (Có hiệu lực sau khi cổng vượt cấp khôi phục)'
  },
  {
    'Tên': 'Bữa tiệc gia đình chu đáo',
    'Phân loại': 'Vật phẩm tiêu hao',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 150,
    'Số tầng hồi chiêu': 6,
    'Giới thiệu': 'Cô ấy chuẩn bị một bàn thức ăn ngon cho Tô Văn — Nghi ngờ -10 (Không giảm quá giới hạn dưới do độ sa đọa tạo thành)'
  },
  {
    'Tên': 'Món quà nhỏ chu đáo',
    'Phân loại': 'Vật phẩm tiêu hao',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 250,
    'Số tầng hồi chiêu': 8,
    'Giới thiệu': 'Một món quà chu đáo lặng lẽ gửi đến tay Tô Văn — Nghi ngờ -15 (Trong văn bản nhắc nhẹ một câu)'
  },
  {
    'Tên': 'Chuyến dã ngoại gia đình cuối tuần',
    'Phân loại': 'Vật phẩm tiêu hao',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 400,
    'Số tầng hồi chiêu': 20,
    'Giới thiệu': 'Một chuyến đi chơi có gia đình vây quanh — Nghi ngờ -25 và đóng băng 5 tầng (Hồi chiêu 20 tầng)'
  },
  {
    'Tên': 'Mở rộng cấy ghép',
    'Phân loại': 'Đặc quyền',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 800,
    'Giới thiệu': 'Ô bồi dưỡng của mỗi nhân vật 3 → 4'
  },
  {
    'Tên': 'Cấy ghép chính xác',
    'Phân loại': 'Đặc quyền',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 600,
    'Giới thiệu': 'Giới hạn số chữ của ý niệm 10 → 20, bắt buộc phải có cho lập trình hành vi giai đoạn sau'
  },
  {
    'Tên': 'Cấy ghép tức thì',
    'Phân loại': 'Đặc quyền',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 1500,
    'Giới thiệu': 'Cấy ghép trực tiếp miễn phán định (Lên kệ ở giai đoạn 2)',
    'Chưa lên kệ': !0
  },
  {
    'Tên': 'Lư hương khắc ấn',
    'Phân loại': 'Đặc quyền',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 500,
    'Giới thiệu': 'Nhận 1 suất khắc ấn: Khắc một thói quen vào bản năng của cô ấy — Không chiếm ô thói quen, trọng số biểu hiện được tăng cường, không thể đảo ngược (Có thể mua lại để tích trữ, mỗi nhân vật tối đa khắc 4 điều)'
  },
  {
    'Tên': 'Camera mini xoay chiều',
    'Phân loại': 'Đặc biệt',
    'Yêu cầu giai đoạn': 1,
    'Khuynh hướng loại': [],
    'Tăng tốc': 0,
    'Rủi ro': 0,
    'Chìa khóa vượt cấp': !1,
    'Giá': 600,
    'Giới thiệu': 'Mua đứt một lần. Bắt đầu/Dừng ghi hình, sau khi dừng AI sẽ lưu trữ hình ảnh; Hình ảnh có thể cho bất kỳ nhân vật nữ nào xem — Cô ấy nhìn thấy cảnh tượng trên màn hình, nhận thức bị định hình lại (Độ sa đọa +4)'
  }
].map(e => [e['Tên'], e]));
const D = {
  'Nội y ren': 'Dâm đãng', 'Nội y tình thú xẻ tà': 'Nô lệ tình dục', 'Miếng dán vú tàng hình': 'Dâm đãng', 'Quần lót lọt khe không viền': 'Dâm đãng', 'Bikini tình thú ba mảnh': 'Nô lệ tình dục', 'Quần tất hở lồn': 'Nô lệ tình dục', 'Bodysuit tạo dáng': 'Dâm đãng', 'Tất đùi đen kèm kẹp': 'Dâm đãng', 'Quần lót chuỗi ngọc trai': 'Nô lệ tình dục', 'Lưới liền thân khoét lỗ': 'Nô lệ tình dục', 'Nội y thiếu nữ bạn chọn': 'Người tình', 'Nội y khóa trái tim': 'Người tình', 'Quần lót cặp đôi': 'Người tình', 'Nội y thêu họ chồng': 'Vợ yêu', 'Nội y ren trắng phong cách tân hôn': 'Vợ yêu', 'Váy liền ôm sát': 'Người tình', 'Áo len cổ khoét sâu': 'Dâm đãng', 'Váy ngủ xuyên thấu': 'Dâm đãng', 'Đồ tập yoga bó sát': 'Người tình', 'Áo croptop hở rốn': 'Dâm đãng', 'Tạp dề thả rông': 'Vợ yêu', 'Đồ mặc nhà cặp đôi': 'Người tình', 'Quần short siêu ngắn ôm mông': 'Dâm đãng', 'Sườn xám xẻ tà cao': 'Vợ yêu', 'Áo sơ mi trắng của bạn': 'Vợ yêu', 'Váy lụa satin đỏ rượu': 'Người tình', 'Váy cổ lọ cúc bấm ẩn': 'Vợ yêu', 'Váy tạp dề vàng nhạt': 'Vợ yêu', 'Đồ hầu gái cổ điển': 'Nô lệ tình dục', 'Váy liền corset buộc dây': 'Nô lệ tình dục', 'Váy dài cổ lọ kiểu trói buộc': 'Nô lệ tình dục', 'Vòng tay chỉ đỏ': 'Người tình', 'Vòng cổ chocker': 'Nô lệ tình dục', 'Nhẫn trơn': 'Vợ yêu', 'Dây chuyền cặp đôi': 'Người tình', 'Dây xích rốn': 'Dâm đãng', 'Khuyên tai ngọc trai': 'Người tình', 'Lắc chân mỏng manh': 'Dâm đãng', 'Dây chuyền xương quai xanh hoa hồng': 'Dâm đãng', 'Lắc chân gắn chuông': 'Nô lệ tình dục', 'Vòng cổ da': 'Nô lệ tình dục', 'Vòng ngọc gia truyền': 'Vợ yêu', 'Mặt dây chuyền khắc họ': 'Vợ yêu', 'Đồng hồ đôi khắc ngày sinh': 'Người tình', 'Nước hoa sương mù': 'Người tình', 'Son môi đỏ tươi': 'Dâm đãng', 'Trang điểm dạ hội quyến rũ': 'Dâm đãng', 'Làm móng đỏ tươi': 'Dâm đãng', 'Nước hoa kích dục': 'Nô lệ tình dục', 'Son bóng căng mọng': 'Người tình', 'Trang điểm mắt hoa đào': 'Người tình', 'Sữa tắm cùng loại': 'Nô lệ tình dục', 'Trang điểm ửng đỏ phát tình': 'Dâm đãng', 'Trang điểm nhẹ quán xuyến việc nhà': 'Vợ yêu', 'Trang điểm đỏ chính thất': 'Vợ yêu', 'Nốt ruồi lệ quyến rũ': 'Nô lệ tình dục', 'Trang điểm kỹ lưỡng cấp độ hẹn hò': 'Người tình', 'Dép bông đi trong nhà': 'Người tình', 'Dép quai mảnh đính cục bông': 'Người tình', 'Giày cao gót đế đỏ': 'Dâm đãng', 'Giày cao gót buộc dây khóa': 'Nô lệ tình dục', 'Giày trắng tản bộ sóng vai': 'Người tình', 'Dép nhung nữ chủ nhân': 'Vợ yêu', 'Giày Mary Jane quai mảnh': 'Vợ yêu', 'Giày siêu cao gót độn đế': 'Dâm đãng', 'Giày đế dày xích cổ chân': 'Nô lệ tình dục', 'Khuyên tai đá quý tháng sinh của bạn': 'Người tình', 'Áo choàng tắm cặp đôi': 'Người tình', 'Váy ngủ lụa kỷ niệm': 'Người tình', 'Nước hoa pha chế độc quyền': 'Người tình', 'Trâm ngọc búi tóc': 'Vợ yêu', 'Nội y lụa đêm tân hôn': 'Vợ yêu', 'Dây xích cơ thể hai lớp': 'Dâm đãng', 'Áo choàng mặc nhà xuyên thấu': 'Dâm đãng', 'Bộ ren xuyên thấu toàn bộ': 'Dâm đãng', 'Vòng nịt đùi': 'Nô lệ tình dục', 'Trứng rung điều khiển từ xa nhét lồn': 'Nô lệ tình dục', 'Nút đuôi cáo nhét đít': 'Nô lệ tình dục', 'Khuyên rốn': 'Dâm đãng', 'Khuyên lưỡi': 'Nô lệ tình dục', 'Khuyên núm vú': 'Dâm đãng', 'Hình xăm bướm sau eo': 'Dâm đãng', 'Hình xăm dâm bụng dưới': 'Nô lệ tình dục', 'Khuyên hột le': 'Nô lệ tình dục', 'Phẫu thuật bơm vú': 'Dâm đãng', 'Lỗ tai đầu tiên': 'Người tình', 'Hình xăm ngôi sao cổ tay trong': 'Người tình', 'Hình xăm họ sau tai': 'Vợ yêu', 'Hình xăm vết nhẫn ngón áp út': 'Vợ yêu'
};

function S(e, t, n) {
  let o = 0;
  for (const [r, s] of Object.entries(e[t]['Trạng thái trang bị'])) {
    const e = O[r];
    if (!e) continue;
    if (('Đang trang bị' === s || 'Thể cải' === e['Phân loại'] && 'Đã mua' === s) && (e['Khuynh hướng loại'].includes(n))) {
      o += e['Tăng tốc'];
    }
  }
  return o;
}

function T(e, t) {
  return Object.entries(e[t]['Trạng thái trang bị']).filter(([, e]) => 'Đang trang bị' === e).map(([e]) => e);
}

function w(e, t) {
  return Object.keys(e[t]['Trạng thái trang bị']).filter(e => 'Thể cải' === O[e]?.['Phân loại']);
}

function C(e, t) {
  return T(e, t).filter(e => (O[e]?.['Rủi ro'] ?? 0) >= 1);
}

function x(e, t) {
  return T(e, t).reduce((e, t) => e + (O[t]?.['Rủi ro'] ?? 0), 0);
}

const R = ['Nội y', 'Áo', 'Phụ kiện', 'Trang điểm', 'Giày', 'Thể cải'];

function P(e, t) {
  if (e['Hệ thống']['Gỡ lỗi đầy sao']) return { lit: R.map(() => !0), count: R.length, full: !0, route: null };
  const n = T(e, t), o = new Set(n.map(e => D[e]).filter(Boolean));
  if (1 !== o.size) return { lit: R.map(() => !1), count: 0, full: !1, route: null };
  const r = [...o][0], s = R.map(o => 'Thể cải' === o ? Object.keys(e[t]['Trạng thái trang bị']).some(e => 'Thể cải' === O[e]?.['Phân loại'] && D[e] === r) : n.some(e => O[e]?.['Vị trí'] === o)), c = s.filter(Boolean).length;
  return { lit: s, count: c, full: c === R.length, route: r };
}

const V = {
  'Người tình': { 'Biểu tượng': '💗', 'Loại bồi dưỡng': ['Bầu bạn giao tiếp', 'Phụ thuộc tình cảm', 'Gần gũi thân thể', 'Tiếp xúc thân mật'], 'Cộng thêm bồi dưỡng': 2, 'Nghi ngờ mỗi tầng': 1, 'Tóm tắt hiệu ứng': 'Bồi dưỡng tình nhân +2/tầng · Nghi ngờ +1/tầng', 'Thể hiện': 'Hôm nay cô ấy từ đầu đến chân đều trang điểm vì {{user}} — người phụ nữ đang yêu không giấu được, từng chi tiết đều đang đợi hắn chú ý tới' },
  'Vợ yêu': { 'Biểu tượng': '💍', 'Loại bồi dưỡng': ['Nhận đồng thân phận', 'Thay thế gia đình'], 'Cộng thêm bồi dưỡng': 2, 'Nghi ngờ mỗi tầng': 0, 'Tóm tắt hiệu ứng': 'Bồi dưỡng vị trí vợ +2/tầng · Nghi ngờ +0/tầng', 'Thể hiện': 'Hôm nay cô ấy từ trong ra ngoài đều mang dáng vẻ "nữ chủ nhân của gia đình này" — trong mắt người ngoài là sự đoan trang hiền thục không thể chê vào đâu được, chỉ mình cô ấy biết sự đoan trang này là mặc cho ai xem' },
  'Dâm đãng': { 'Biểu tượng': '🔥', 'Loại bồi dưỡng': ['Tương tác mập mờ', 'Mở rộng cơ thể'], 'Cộng thêm bồi dưỡng': 2, 'Nghi ngờ mỗi tầng': 2, 'Tóm tắt hiệu ứng': 'Bồi dưỡng cởi mở +2/tầng · Nghi ngờ +2/tầng', 'Thể hiện': 'Hôm nay cô ấy từ trong ra ngoài đều không giấu được sự hở hang và khiêu khích — từng tấc trên cơ thể đều đang tiết lộ cô ấy đang biến thành loại đàn bà lẳng lơ thèm cặc như thế nào' },
  'Nô lệ tình dục': { 'Biểu tượng': '⛓️', 'Loại bồi dưỡng': ['Chịch', 'Tuyệt đối phục tùng'], 'Cộng thêm bồi dưỡng': 2, 'Nghi ngờ mỗi tầng': 2, 'Tóm tắt hiệu ứng': 'Bồi dưỡng phục tùng +2/tầng · Nghi ngờ +2/tầng', 'Thể hiện': 'Hôm nay từng món đồ cô ấy mặc trên người từ trong ra ngoài đều mang ý nghĩa "bị sở hữu" — cô ấy hiểu rõ dụng ý của từng món, việc mặc chúng chỉnh tề bản thân nó đã là sự phục tùng vô thanh vô tức, sẵn sàng banh lồn ra cho chủ nhân đụ' }
};

function N(e, t) {
  return Math.floor(.25 * e[t]['Độ sa đọa']);
}

const B = [{ 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng ngủ chính', 'Số tầng': 2 }, { 'Trạng thái': 'Ra ngoài', 'Vị trí': 'Bên ngoài', 'Số tầng': 7 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng ăn', 'Số tầng': 2 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng khách', 'Số tầng': 3 }, { 'Trạng thái': 'Ngủ', 'Vị trí': 'Phòng ngủ chính', 'Số tầng': 2 }],
      G = [{ 'Trạng thái': 'Ngủ', 'Vị trí': 'Phòng ngủ chính', 'Số tầng': 2 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng ăn', 'Số tầng': 2 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng khách', 'Số tầng': 3 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Nhà bếp', 'Số tầng': 2 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng khách', 'Số tầng': 3 }, { 'Trạng thái': 'Ngủ', 'Vị trí': 'Phòng ngủ chính', 'Số tầng': 3 }],
      H = [B, B, [{ 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng ngủ chính', 'Số tầng': 2 }, { 'Trạng thái': 'Ra ngoài', 'Vị trí': 'Bên ngoài', 'Số tầng': 5 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng ăn', 'Số tầng': 2 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng khách', 'Số tầng': 3 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng khách', 'Số tầng': 2 }, { 'Trạng thái': 'Ngủ', 'Vị trí': 'Phòng ngủ chính', 'Số tầng': 2 }], B, [{ 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng ngủ chính', 'Số tầng': 2 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng ăn', 'Số tầng': 2 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng khách', 'Số tầng': 3 }, { 'Trạng thái': 'Ra ngoài', 'Vị trí': 'Bên ngoài', 'Số tầng': 5 }, { 'Trạng thái': 'Ở nhà', 'Vị trí': 'Phòng ăn', 'Số tầng': 2 }, { 'Trạng thái': 'Ngủ', 'Vị trí': 'Phòng ngủ chính', 'Số tầng': 2 }], G, G],
      L = H.reduce((e, t) => e + t.reduce((e, t) => e + t['Số tầng'], 0), 0),
      F = [{ 'Từ khóa': ['ngày hôm sau', 'ngày thứ hai', 'ngày mai', 'hôm sau'], 'Độ lệch': -1 }, { 'Từ khóa': ['sáng hôm sau', 'sáng sớm hôm sau', 'buổi sáng ngày mai'], 'Độ lệch': -1 }, { 'Từ khóa': ['tối hôm sau', 'đêm hôm sau'], 'Độ lệch': -1 }];

function U(e) {
  let t = (e % L + L) % L, n = 0;
  for (let e = 0; e < H.length; e++) {
    const o = H[e], r = o.reduce((e, t) => e + t['Số tầng'], 0);
    if (t < r) {
      n = e;
      let r = t;
      for (let t = 0; t < o.length; t++) {
        if (r < o[t]['Số tầng']) return { dayIndex: e, segmentIndex: t, segmentFloorOffset: r };
        r -= o[t]['Số tầng'];
      }
      return { dayIndex: e, segmentIndex: o.length - 1, segmentFloorOffset: 0 };
    }
    t -= r;
  }
  return { dayIndex: 0, segmentIndex: 0, segmentFloorOffset: 0 };
}

function Y(e) {
  const { dayIndex: t, segmentIndex: n } = U(e), o = H[t][n];
  return { 'Trạng thái': o['Trạng thái'], 'Vị trí': o['Vị trí'] };
}

function k(e, t) {
  const n = e;
  for (const e of F)
    for (const o of e['Từ khóa'])
      if (n.includes(o)) {
        const { dayIndex: e } = U(t);
        let n = Math.floor(t / L) * L;
        for (let t = 0; t <= e; t++) n += H[t].reduce((e, t) => e + t['Số tầng'], 0);
        return n;
      }
  return null;
}

function W(e) {
  const { 'Vị trí': t } = Y(e);
  return 'Phòng ăn' === t || 'Phòng khách' === t || 'Phòng ngủ chính' === t;
}

const q = { 'Bầu bạn giao tiếp': 1, 'Phụ thuộc tình cảm': 1, 'Gần gũi thân thể': 2, 'Tương tác mập mờ': 2, 'Tiếp xúc thân mật': 3, 'Mở rộng cơ thể': 3, 'Chịch': 4, 'Nhận đồng thân phận': 4, 'Tuyệt đối phục tùng': 5, 'Thay thế gia đình': 5 },
      J = { 'Đơn giản': 5, 'Khó khăn': 10 },
      K = { 'Đơn giản': 3, 'Khó khăn': 4 };

function Q(e) { return e % 10 <= 3; }

function X(e, t) { return 'Đang phán định' !== e['Trạng thái'] && 'Đã trưởng thành' !== e['Trạng thái'] && 'Đã quá hạn' !== e['Trạng thái'] && t - e['Tầng cấy ghép'] >= 30; }

function Z(e, t) {
  const n = q[e] <= t ? 'Đơn giản' : 'Khó khăn';
  return { 'Độ khó': n, 'Số tầng cần thiết': J[n] };
}

function ee(e, t, n, o) {
  const r = e[t];
  let s = 0;
  return Q(n) && (s += 1), r['Rạn nứt đến tầng'] >= 0 && n <= r['Rạn nứt đến tầng'] && (s += 1), r['Buff vượt cấp'] > 0 && n <= r['Buff vượt cấp đến tầng'] && (s += r['Buff vượt cấp']), o && function (e, t, n) {
    return Object.entries(e[t]['Trạng thái trang bị']).some(([e, t]) => {
      const o = O[e];
      return 'Đang trang bị' === t && !!o?.['Chìa khóa vượt cấp'] && o['Khuynh hướng loại'].includes(n);
    });
  }(e, t, o) && (s += 1), Math.min(r['Giai đoạn hiện tại'] + Math.min(2, s), 5);
}

function te(e, t, n, o, r) {
  const s = e[t]['Danh sách ý niệm'][n];
  if (!s) return void console.warn(`[Phán định ý niệm] Không tìm thấy ý niệm ${n}`);
  if ('Chờ phán định' === o) return void console.info(`[Phán định ý niệm] ${n} vẫn chưa phán định ra loại, giữ nguyên trạng thái đang phán định`);
  const { 'Độ khó': c, 'Số tầng cần thiết': u } = Z(o, e[t]['Giai đoạn hiện tại']);
  s['Loại'] = o, s['Độ khó'] = c, s['Số tầng cần thiết'] = u;
  const f = ee(e, t, r, o), l = q[o];
  if (l > f) return s['Trạng thái'] = 'Chưa đạt chuẩn', void console.info(`[Phán định ý niệm] ${n} Loại=${o} Vượt cấp (Cần giai đoạn ${l}, Giai đoạn hiệu lực ${f}) → Trả về chưa đạt chuẩn`);
  s['Trạng thái'] = 'Đang bồi dưỡng', e[t]['Cấy ghép cưỡng chế ba lần'] > 0 && (e[t]['Cấy ghép cưỡng chế ba lần'] = 0, console.info(`[Ba lần] ${t} Cấy ghép bình thường thành công, xóa bộ đếm liên tiếp`)), console.info(`[Phán định ý niệm] ${n} Loại=${o} Độ khó=${c} Cần ${u} tầng → Đang bồi dưỡng`);
}

function ne(e, t, n, o) {
  const r = e[t], s = r['Danh sách ý niệm'], c = W(e['Hệ thống']['Con trỏ sinh hoạt Tô Văn']);
  for (const [u, f] of Object.entries(s)) {
    if (f['Cấy ghép cưỡng chế'] && 'Đang bồi dưỡng' === f['Trạng thái']) {
      f['Trạng thái'] = 'Chưa đạt chuẩn', f['Cấy ghép cưỡng chế'] = !1, r['Rạn nứt đến tầng'] = n + 3, console.info(`[Ba lần] ${t} ${u} Cấy ghép cưỡng chế bị bài xích → Trả về chưa đạt chuẩn (Tâm phòng rạn nứt đến tầng ${n + 3})`);
      continue;
    }
    if (X(f, n)) {
      f['Trạng thái'] = 'Đã quá hạn', console.info(`[Ý niệm quá hạn] ${t} ${u} Quá 30 tầng chưa trưởng thành → Đã quá hạn`);
      continue;
    }
    if ('Đang bồi dưỡng' !== f['Trạng thái']) continue;
    let s = 1;
    c && (s += .5);
    const l = o[u];
    2 === l ? s += 2 : 1 === l && (s += 1);
    let i = 0;
    'Chờ phán định' !== f['Loại'] && (i = S(e, t, f['Loại']), s += i);
    const a = P(e, t);
    a.full && (a.route ? 'Chờ phán định' !== f['Loại'] && V[a.route]['Loại bồi dưỡng'].includes(f['Loại']) && (s += V[a.route]['Cộng thêm bồi dưỡng']) : s += 1), f['Tiến độ phát triển'] += s, console.info(`[Bồi dưỡng ý niệm] ${t} ${u} +${s} (Tăng tốc:${c ? 'Có' : 'Không'}, Liên quan:${l ?? 0}, Trang bị:${i}) → ${f['Tiến độ phát triển']}/${f['Số tầng cần thiết']}`);
    const d = K[f['Độ khó']] ?? 3;
    f['Tiến độ phát triển'] >= f['Số tầng cần thiết'] && n - f['Tầng cấy ghép'] >= d && oe(e, t, u, n);
  }
}

function oe(e, t, n, o) {
  const r = e[t], s = r['Danh sách ý niệm'][n];
  if (s) return r['Danh sách thói quen'].length >= 5 ? (s['Trạng thái'] = 'Đã trưởng thành', void console.info(`[Ý niệm trưởng thành] ${t} ${n} Đã trưởng thành nhưng thói quen đã đầy 5, chờ bán để nhường chỗ`)) : void function (e, t, n, o) {
    const r = e[t], s = r['Danh sách ý niệm'][n];
    if (!s) return;
    r['Danh sách thói quen'].push({ 'Nội dung': s['Nội dung'], 'Tầng hình thành': o });
    const c = 'Khó khăn' === s['Độ khó'];
    r['Độ sa đọa'] += c ? 8 : 6, r['Độ phụ thuộc main'] += c ? 4 : 3;
    const u = r['Độ phụ thuộc main'];
    let f = -2;
    u >= 80 ? f = -5 : u >= 60 ? f = -4 : u >= 30 && (f = -3);
    c && (f = Math.floor(1.2 * f));
    r['Độ phụ thuộc Tô Văn'] += f;
    const l = A(r['Độ sa đọa']);
    l > r['Giai đoạn hiện tại'] && console.info(`[Ý niệm trưởng thành] ${t} Độ sa đọa đã vượt qua ngưỡng giai đoạn ${l} (Chờ người chơi thăng cấp)`);
    delete r['Danh sách ý niệm'][n], console.info(`[Ý niệm chuyển thành thói quen] ${t} "${s['Nội dung']}" → Thói quen (Độ sa đọa ${r['Độ sa đọa']}, Phụ thuộc main ${r['Độ phụ thuộc main']}, Phụ thuộc Tô Văn ${r['Độ phụ thuộc Tô Văn']})`);
  }(e, t, n, o);
}

const ze = {
  10: 'Một sự xuất hiện tình cờ không đúng lúc — lý do nảy sinh tự nhiên từ bối cảnh hiện tại, bản thân hắn cũng không nghĩ nhiều, hoàn toàn là đời thường',
  20: 'Sự quan tâm thuận miệng biến thành một cái nhìn thuận đường — lý do vẫn là vô tình đời thường, nhưng trước khi rời đi hắn đã dừng lại thêm nửa giây',
  30: 'Cảm giác sai sai khó tả khiến hắn mượn cớ đi qua một vòng — bản thân cái cớ không quan trọng, ánh mắt hắn đã dừng lại trong phòng một chút',
  40: 'Hắn bắt đầu xác minh — dùng một lý do hợp lý trong hoàn cảnh này để tiếp cận, ánh mắt rơi vào các chi tiết (trang phục/khoảng cách/thần thái), dừng lại lâu hơn bình thường',
  50: 'Lần đầu tiên tiếp cận có mục đích — bước chân nhẹ đi, nghe ngóng một lúc rồi mới lên tiếng, thời điểm xuất hiện là đã được chọn lọc',
  60: 'Cắt ngang mang tính thăm dò — dùng một câu hỏi để phá cửa, câu hỏi hướng đến điểm đáng ngờ mà hắn quan tâm nhất lúc này; vào rồi không vội đi, quan sát phản ứng',
  70: 'Xuất hiện vào thời điểm không nên xuất hiện — lặng lẽ quay lại hoặc về sớm, cảnh báo chỉ có trong nháy mắt',
  80: 'Gần như là rình rập — hắn chọn thời điểm dễ bắt gặp chuyện mờ ám nhất, xuất hiện vừa nhanh vừa im lặng, trên mặt không có nụ cười',
  90: 'Xuất hiện mang theo sự nghi ngờ gần như chắc chắn — không gõ cửa, đi thẳng vào, ánh mắt đầu tiên là tìm kiếm bằng chứng (tìm xem có đang chịch nhau hay không)'
};

const $e = {
  1: 'Trải đệm — Góc nhìn của hắn dạo gần đây và cảm giác sai sai ban đầu (Tài liệu lấy từ những thay đổi thực sự xảy ra trong ngữ cảnh: trang phục/thói quen/thần thái/sinh hoạt của cô ấy, chọn thứ mà hắn với tư cách là chồng dễ chú ý nhất)',
  2: 'Lên men — Những dấu vết hắn có thể tiếp xúc trong ngữ cảnh xâu chuỗi lại trong lòng hắn, sự tự giải thích bắt đầu không đứng vững, hắn quyết định đi xem thử',
  3: 'Thu lưới — Đi về phía cánh cửa đó; kết thúc bằng khoảnh khắc hắn đẩy cửa cắt ngang (Cùng thời điểm với cảnh bị cắt ngang trong tuyến chính, nhìn từ đôi mắt của hắn)'
};

function he(e, t) {
  return t >= 90 ? `  🔥 Sự nghi ngờ của hắn đối với ${e} sắp bùng nổ: Âm trầm lạnh nhạt, âm thầm lục lọi, chạm vào là nổ` : t >= 60 ? `  ⚠⚠ Hắn rõ ràng đã nghi ngờ ${e}: Tra hỏi nhiều hơn, để ý tung tích và điện thoại của cô ấy, không khí trong nhà căng thẳng` : t >= 30 ? `  ⚠ Hắn có chút nghi ngờ ${e}: Sẽ nhìn thêm vài lần, tra hỏi như vô tình, nhưng vẫn sẵn sàng tin tưởng người nhà` : null;
}

const ge = {
  1: 'Ảnh hưởng của ý niệm/thói quen đã liệt kê chỉ thể hiện ở bên trong (mất tập trung/đỏ mặt/ánh mắt dừng lại/giấc mơ/quan tâm hắn hơn một chút một cách khó hiểu), khi không có ý niệm thì nội tâm cô ấy hoàn toàn là đời thường. Cấm: Chủ động nói chuyện tình dục hoặc cơ thể (bị nhắc đến sẽ hoảng hốt lảng tránh), tiếp xúc thân thể chủ động vượt quá mức bình thường của mẹ/chị gái, bất kỳ hành động chủ động mang tính mập mờ nào. Giới hạn chấp nhận: Giới hạn ở mức tiếp xúc bình thường của người nhà (đưa đồ, vô tình chạm) — những ý đồ thân mật từ nắm tay trở lên tuyệt đối không xảy ra.',
  2: 'Cho phép bị động tiếp nhận chủ đề nhạy cảm, nói ra khỏi miệng mới giật mình nhận ra nghĩa bóng. Cấm: Từ ngữ lộ liễu, chủ động tạo tiếp xúc cơ thể (tiếp xúc ngắn ngủi thuận theo tình thế thì được, sau đó sẽ hoảng hốt), lời mời gọi có tính chất rõ ràng. Giới hạn chấp nhận: Gần gũi cơ thể ở ranh giới mập mờ (sóng vai, nép vào, ôm ngắn ngủi thuận theo tình thế) và những nụ hôn ngắn ngủi, sau đó có thể viện cớ là bốc đồng nhất thời — nụ hôn sâu say đắm, thân mật cơ thể (sờ vú móc lồn) trở lên sẽ không xảy ra.',
  3: 'Cho phép chủ đề mang tính ám chỉ khi ở riêng, chủ động tạo cơ hội gần gũi, có bậc thang là thuận nước đẩy thuyền. Cấm: Vượt rào trước mặt người khác, lời mời gọi tình dục thẳng thừng (nhưng có thể "không từ chối"). Giới hạn chấp nhận: Hôn, vuốt ve mập mờ qua lớp quần áo — tiếp xúc cơ thể dưới lớp quần áo và hành vi chịch nhau sẽ không xảy ra (cô ấy có thể dao động, có thể bị trêu chọc đến thất thần, nhưng hành động không vượt quá giới hạn).',
  4: 'Khi ở riêng gần như giải phóng toàn bộ — sẽ nói thẳng dục vọng và chủ động hành động (đòi đụ, vạch lồn ra). Cấm: Bất kỳ sự vượt rào nào trong phạm vi Tô Văn có thể nhận biết (đây là quản lý rủi ro, không phải đạo đức). Giới hạn chấp nhận: Giải phóng hành vi chịch nhau khi ở riêng (giữ lại chút dư âm của sự xấu hổ và trái luân thường đạo lý) — trong phạm vi Tô Văn có thể nhận biết vẫn sẽ không xảy ra chuyện gì.',
  5: 'Không có vùng cấm. Sự kiềm chế chỉ xuất hiện khi cần ngụy trang, và đó là màn biểu diễn mà cô ấy tận hưởng. Giới hạn chấp nhận: Không có (Banh lồn ra cho đụ mọi lúc mọi nơi).'
};

Vue;
let re = !1, se = null;
const ce = '[Ảnh chụp nhanh trạng thái trò chơi hiện tại';

function ue() {
  return SillyTavern.chat?.length ?? 0;
}

function fe() {
  const e = SillyTavern.chat ?? [];
  for (let t = e.length - 1; t >= 0; t--)
    if (e[t].is_user) return e[t].mes ?? '';
  return '';
}

function le(e) {
  se = {
    'Trạng thái Tần Lộ': {
      'Độ sa đọa': e['Trạng thái Tần Lộ']['Độ sa đọa'],
      'Giai đoạn hiện tại': e['Trạng thái Tần Lộ']['Giai đoạn hiện tại'],
      'Độ phụ thuộc main': e['Trạng thái Tần Lộ']['Độ phụ thuộc main'],
      'Độ phụ thuộc Tô Văn': e['Trạng thái Tần Lộ']['Độ phụ thuộc Tô Văn'],
      'Danh sách ý niệm': { ...e['Trạng thái Tần Lộ']['Danh sách ý niệm'] },
      'Danh sách thói quen': [...e['Trạng thái Tần Lộ']['Danh sách thói quen']],
      'Danh sách tập tính khắc sâu': [...e['Trạng thái Tần Lộ']['Danh sách tập tính khắc sâu']]
    },
    'Trạng thái Tô Mộng': {
      'Độ sa đọa': e['Trạng thái Tô Mộng']['Độ sa đọa'],
      'Giai đoạn hiện tại': e['Trạng thái Tô Mộng']['Giai đoạn hiện tại'],
      'Độ phụ thuộc main': e['Trạng thái Tô Mộng']['Độ phụ thuộc main'],
      'Độ phụ thuộc Tô Văn': e['Trạng thái Tô Mộng']['Độ phụ thuộc Tô Văn'],
      'Danh sách ý niệm': { ...e['Trạng thái Tô Mộng']['Danh sách ý niệm'] },
      'Danh sách thói quen': [...e['Trạng thái Tô Mộng']['Danh sách thói quen']],
      'Danh sách tập tính khắc sâu': [...e['Trạng thái Tô Mộng']['Danh sách tập tính khắc sâu']]
    },
    'Trạng thái Tô Văn': {
      'Trạng thái hiện tại': e['Trạng thái Tô Văn']['Trạng thái hiện tại'],
      'Vị trí hiện tại': e['Trạng thái Tô Văn']['Vị trí hiện tại'],
      'Giá trị nghi ngờ Tần Lộ': e['Trạng thái Tô Văn']['Giá trị nghi ngờ Tần Lộ'],
      'Giá trị nghi ngờ Tô Mộng': e['Trạng thái Tô Văn']['Giá trị nghi ngờ Tô Mộng']
    },
    'Hệ thống': {
      'Tiền tệ': e['Hệ thống']['Tiền tệ'],
      'Trạng thái đạo cụ': { ...e['Hệ thống']['Trạng thái đạo cụ'] },
      'Con trỏ sinh hoạt Tô Văn': e['Hệ thống']['Con trỏ sinh hoạt Tô Văn'],
      'Nhân vật có mặt': { ...e['Hệ thống']['Nhân vật có mặt'] },
      'Khóa có mặt': e['Hệ thống']['Khóa có mặt'],
      'Góc nhìn Tô Văn': { ...e['Hệ thống']['Góc nhìn Tô Văn'] },
      'Mức độ ngắt quãng đã kích hoạt': { ...e['Hệ thống']['Mức độ ngắt quãng đã kích hoạt'] },
      'Dư âm ngắt quãng đến tầng': e['Hệ thống']['Dư âm ngắt quãng đến tầng'],
      'Hồi chiêu ngắt quãng đến tầng': e['Hệ thống']['Hồi chiêu ngắt quãng đến tầng']
    }
  },
  function () {
    if (!se?.['Hệ thống']) return;
    const e = se['Hệ thống'];
    try {
      const t = ue(), n = _.get(getVariables({ type: 'chat' }), ae), o = se['Trạng thái Tần Lộ'], r = se['Trạng thái Tô Mộng'];
      n && n['Tầng'] <= t && (o['Giai đoạn hiện tại'] = Math.max(o['Giai đoạn hiện tại'] ?? 1, n['Tần Lộ'] ?? 1), r['Giai đoạn hiện tại'] = Math.max(r['Giai đoạn hiện tại'] ?? 1, n['Tô Mộng'] ?? 1)),
      insertOrAssignVariables({ [ae]: { 'Tầng': t, 'Tần Lộ': o['Giai đoạn hiện tại'] ?? 1, 'Tô Mộng': r['Giai đoạn hiện tại'] ?? 1 } }, { type: 'chat' }).catch(e => console.error('[Tần Lộ Bản Làm Lại] Ghi ảnh chụp thăng cấp thất bại', e));
      const s = _.get(getVariables({ type: 'chat' }), ie), c = e => !!e && (e['Chờ xem'] || (e['Số tầng còn lại'] ?? 0) > 0);
      if (s && s['Tầng'] <= t) {
        for (const [t, n] of Object.entries(s['Mức độ ngắt quãng đã kích hoạt'] ?? {})) n && (e['Mức độ ngắt quãng đã kích hoạt'][t] = !0);
        e['Hồi chiêu ngắt quãng đến tầng'] = Math.max(e['Hồi chiêu ngắt quãng đến tầng'], s['Hồi chiêu ngắt quãng đến tầng'] ?? -1),
        e['Dư âm ngắt quãng đến tầng'] = Math.max(e['Dư âm ngắt quãng đến tầng'], s['Dư âm ngắt quãng đến tầng'] ?? -1),
        !c(e['Góc nhìn Tô Văn']) && c(s['Góc nhìn Tô Văn']) && (e['Góc nhìn Tô Văn'] = { ...s['Góc nhìn Tô Văn'] });
      }
      insertOrAssignVariables({ [ie]: { 'Tầng': t, 'Mức độ ngắt quãng đã kích hoạt': { ...e['Mức độ ngắt quãng đã kích hoạt'] }, 'Hồi chiêu ngắt quãng đến tầng': e['Hồi chiêu ngắt quãng đến tầng'], 'Dư âm ngắt quãng đến tầng': e['Dư âm ngắt quãng đến tầng'], 'Góc nhìn Tô Văn': { ...e['Góc nhìn Tô Văn'] } } }, { type: 'chat' }).catch(e => console.error('[Tần Lộ Bản Làm Lại] Ghi ảnh chụp ngắt quãng thất bại', e));
    } catch (e) {
      console.error('[Tần Lộ Bản Làm Lại] Đồng bộ ảnh chụp ngắt quãng thất bại', e);
    }
  }();
}

const ie = 'Tần Lộ Bản Làm Lại_Ảnh_Chụp_Ngắt_Quãng', ae = 'Tần Lộ Bản Làm Lại_Ảnh_Chụp_Thăng_Cấp';

function _e(e) {
  if (!se) return;
  const t = se;
  for (const n of ['Trạng thái Tần Lộ', 'Trạng thái Tô Mộng']) {
    const o = t[n];
    o && (e[n]['Độ sa đọa'] = o['Độ sa đọa'], e[n]['Giai đoạn hiện tại'] = o['Giai đoạn hiện tại'], e[n]['Tiêu đề giai đoạn'] = I(o['Giai đoạn hiện tại']), e[n]['Độ phụ thuộc main'] = o['Độ phụ thuộc main'], e[n]['Độ phụ thuộc Tô Văn'] = o['Độ phụ thuộc Tô Văn'], o['Danh sách tập tính khắc sâu'] && (e[n]['Danh sách tập tính khắc sâu'] = [...o['Danh sách tập tính khắc sâu']]));
  }
  if (t['Trạng thái Tô Văn'] && (e['Trạng thái Tô Văn']['Trạng thái hiện tại'] = t['Trạng thái Tô Văn']['Trạng thái hiện tại'], e['Trạng thái Tô Văn']['Vị trí hiện tại'] = t['Trạng thái Tô Văn']['Vị trí hiện tại'], e['Trạng thái Tô Văn']['Giá trị nghi ngờ Tần Lộ'] = t['Trạng thái Tô Văn']['Giá trị nghi ngờ Tần Lộ'], e['Trạng thái Tô Văn']['Giá trị nghi ngờ Tô Mộng'] = t['Trạng thái Tô Văn']['Giá trị nghi ngờ Tô Mộng']), t['Hệ thống']) {
    if (e['Hệ thống']['Con trỏ sinh hoạt Tô Văn'] = t['Hệ thống']['Con trỏ sinh hoạt Tô Văn'], void 0 !== t['Hệ thống']['Tiền tệ'] && (e['Hệ thống']['Tiền tệ'] = t['Hệ thống']['Tiền tệ']), void 0 !== t['Hệ thống']['Khóa có mặt'] && (e['Hệ thống']['Khóa có mặt'] = t['Hệ thống']['Khóa có mặt']), t['Hệ thống']['Khóa có mặt'] && t['Hệ thống']['Nhân vật có mặt'] && (e['Hệ thống']['Nhân vật có mặt'] = { ...t['Hệ thống']['Nhân vật có mặt'] }), t['Hệ thống']['Góc nhìn Tô Văn'] && (e['Hệ thống']['Góc nhìn Tô Văn'] = { ...t['Hệ thống']['Góc nhìn Tô Văn'] }), t['Hệ thống']['Mức độ ngắt quãng đã kích hoạt'])
      for (const [n, o] of Object.entries(t['Hệ thống']['Mức độ ngắt quãng đã kích hoạt'])) o && (e['Hệ thống']['Mức độ ngắt quãng đã kích hoạt'][n] = !0);
    'number' == typeof t['Hệ thống']['Dư âm ngắt quãng đến tầng'] && (e['Hệ thống']['Dư âm ngắt quãng đến tầng'] = Math.max(e['Hệ thống']['Dư âm ngắt quãng đến tầng'], t['Hệ thống']['Dư âm ngắt quãng đến tầng'])), 'number' == typeof t['Hệ thống']['Hồi chiêu ngắt quãng đến tầng'] && (e['Hệ thống']['Hồi chiêu ngắt quãng đến tầng'] = Math.max(e['Hệ thống']['Hồi chiêu ngắt quãng đến tầng'], t['Hệ thống']['Hồi chiêu ngắt quãng đến tầng']));
  }
  for (const n of ['Trạng thái Tần Lộ', 'Trạng thái Tô Mộng']) {
    const o = t[n]?.['Danh sách ý niệm'];
    if (o)
      for (const [t, r] of Object.entries(o)) {
        const o = e[n]['Danh sách ý niệm'][t];
        o && o['Nội dung'] !== r['Nội dung'] && (o['Nội dung'] = r['Nội dung']);
      }
  }
}

const de = { 2: 200, 3: 400, 4: 600, 5: 800 };

function pe(e, t) {
  if (e['Hệ thống']['Kết cục xấu']) {
    const t = e['Hệ thống']['Kết cục xấu'];
    return ['════════ Trạng thái trò chơi hiện tại ════════', ...t.startsWith('Ba lần') ? [`【Kết cục xấu · Đã khóa】${t}：Lần xâm nhập tinh thần cưỡng chế thứ ba đã xé rách tâm trí cô ấy, nhân cách của cô ấy đang sụp đổ.`, 'Hệ thống bồi dưỡng, phán định, cửa hàng v.v. đã dừng toàn bộ (Không xuất ra bất kỳ lệnh phán định nào nữa).', 'Hãy diễn dịch chương cuối cùng khi cô ấy sụp đổ —— nói năng lộn xộn, tự sụp đổ, không nhận ra người trước mặt, gia đình này không thể quay lại được nữa, không mở ra tuyến cốt truyện mới.'] : [`【Kết cục xấu · Đã khóa】${t}：Sự nghi ngờ tích tụ của Tô Văn cuối cùng đã bùng nổ, hắn đã lật bài ngửa.`, 'Hệ thống bồi dưỡng, phán định, cửa hàng v.v. đã dừng toàn bộ (Không xuất ra bất kỳ lệnh phán định nào nữa).', 'Hãy diễn dịch chương cuối cùng xoay quanh hậu quả sau khi lật bài ngửa —— chất vấn, sụp đổ, kết thúc, không mở ra tuyến cốt truyện mới.'], '══════════════════════════'].join('\n');
  }
  const n = e['Hệ thống']['Góc nhìn Tô Văn'];
  if (me(e, ue())) {
    const t = function (e, t) {
      const n = e['Hệ thống']['Góc nhìn Tô Văn'], o = n['Tầng xử lý lần trước'] === t ? n['Tổng số tầng'] - n['Số tầng còn lại'] : n['Tổng số tầng'] - n['Số tầng còn lại'] + 1;
      return Math.min(Math.max(o, 1), n['Tổng số tầng']);
    }(e, ue());
    return [`════════ Góc nhìn Tô Văn (Chèn thêm · Màn ${t}/${n['Tổng số tầng']}) ════════`, 'Tuyến chính đã tạm dừng. Màn này lấy Tô Văn làm tiêu điểm góc nhìn duy nhất (Khuyến nghị dùng dòng nội tâm ngôi thứ nhất, toàn bộ quá trình không chuyển sang góc nhìn riêng tư của các cô ấy),', `Diễn dịch quá trình hắn từng bước đi đến lần cắt ngang đó (Bối cảnh kích hoạt: Sự nghi ngờ của hắn đối với ${n['Mục tiêu']} đã đạt mức ${n['Mức độ']} —— ${ze[n['Mức độ']] ?? ''}).`, `▷ Hướng đi màn này: ${$e[t] ?? $e[3]}`, 'Quy tắc:', '- Tài liệu chỉ dùng cốt truyện thực sự đã xảy ra trong ngữ cảnh (Sự thay đổi/trang phục/hành động bất thường của cô ấy), không bịa đặt chuyện chưa xảy ra', '- Hắn không có bằng chứng thực tế, cũng không lấy được bằng chứng trong đoạn này —— Đáp án của sự nghi ngờ không được tiết lộ ở đây', '- Đoạn này không thúc đẩy tuyến chính; Biến số chỉ cập nhật Trạng thái Tô Văn.Cảm xúc hiện tại/Suy nghĩ nội tâm hiện tại (Nếu có thay đổi)', '══════════════════════════'].join('\n');
  }
  const o = [];
  o.push('════════ Trạng thái trò chơi hiện tại ════════');
  ue();
  const r = be(e);
  for (const t of r) {
    const n = `Trạng thái ${t}`, r = e[n], s = 'Tâm phòng buông lỏng' === r['Cảm xúc hiện tại'] ? ' ⚡Lúc này tâm phòng của cô ấy đang buông lỏng, dễ dàng chấp nhận sự thăm dò thân mật hơn bình thường' : '';
    o.push(`【${t}】Giai đoạn ${r['Giai đoạn hiện tại']}「${r['Tiêu đề giai đoạn']}」${s}`);
    const c = C(e, n), u = P(e, n);
    if (u.full && u.route) {
      const r = w(e, n);
      o.push(`【${t}·Cộng hưởng tuyến】${V[u.route]['Thể hiện']} (Trọn bộ hôm nay của cô ấy: ${T(e, n).join('、')}${r.length > 0 ? `, trên người còn có ${r.join('、')}` : ''}) —— Trong diễn dịch hãy thể hiện ý thức tổng thể từ trong ra ngoài này. Thông tin này chỉ thuộc về nhận thức riêng tư của cô ấy, Tô Văn và các nhân vật khác không hề hay biết (Trừ khi đã bị phát hiện trong chính văn)`);
    }
    if (c.length > 0) {
      let r = '';
      if (u.full && !u.route) {
        const t = w(e, n);
        r = `. Trọn bộ trang phục từ trong ra ngoài hôm nay của cô ấy: ${T(e, n).join('、')}${t.length > 0 ? `, trên người còn có ${t.join('、')}` : ''} —— Hãy thể hiện ý thức riêng tư tổng thể này`;
      }
      o.push(`【${t}·Ý thức trang phục】Lúc này trên người cô ấy có trang phục cố ý: ${c.join('、')} —— Trong diễn dịch hãy thể hiện tự nhiên ý thức của cô ấy về chúng (Cảm giác dị vật/động tác che giấu/mất tập trung/sợ bị chú ý), không cần viết từng món ${r}. Thông tin này chỉ thuộc về nhận thức riêng tư của cô ấy, Tô Văn và các nhân vật khác không hề hay biết (Trừ khi đã bị phát hiện trong chính văn)`);
    }
  }
  e['Hệ thống']['Ghi hình']['Đang ghi hình'] && o.push('【Ghi hình】Một ống kính ẩn nấp đang ghi lại cảnh hiện tại —— Hình ảnh tự mang theo cảm giác chân thực của việc bị ghi lại (Nhân vật có ý thức được ống kính hay không do cốt truyện quyết định)'), e['Hệ thống']['Khóa có mặt'] && o.push(`【Khóa có mặt】Người chơi đã khóa nhân vật có mặt: ${r.join('、')} —— Lượt này đừng để nhân vật công lược khác xuất hiện, cũng đừng để người đang có mặt rời đi`);
  const s = function (e, t, n, o) {
    return e['Hệ thống']['Dư âm ngắt quãng đến tầng'] >= 0 && t < e['Hệ thống']['Dư âm ngắt quãng đến tầng'] ? { 'Trạng thái': 'Ở nhà', 'Vị trí': e['Trạng thái Tô Văn']['Vị trí hiện tại'] } : o ? { 'Trạng thái': e['Trạng thái Tô Văn']['Trạng thái hiện tại'], 'Vị trí': e['Trạng thái Tô Văn']['Vị trí hiện tại'] } : Y(k(n, e['Hệ thống']['Con trỏ sinh hoạt Tô Văn']) ?? e['Hệ thống']['Con trỏ sinh hoạt Tô Văn'] + 1);
  }(e, t, fe(), function () {
    const e = SillyTavern.chat ?? [], t = e[e.length - 1];
    return !!t && !t.is_user;
  }());
  o.push(`【Tô Văn】${s['Trạng thái']} @ ${s['Vị trí']}`);
  {
    const e = 'Ra ngoài' === s['Trạng thái'] ? 'Hắn lúc này không ở nhà (Đi làm/đi lại/làm việc bên ngoài), hoạt động tâm lý phải đặt ở hoàn cảnh bên ngoài, tuyệt đối không được viết thành ở nhà, trong phòng, ngủ nướng/ngủ thêm lát nữa v.v.' : 'Ngủ' === s['Trạng thái'] ? `Hắn lúc này đang ngủ ở ${s['Vị trí']}, hoạt động tâm lý là dòng suy nghĩ trước khi ngủ/nửa tỉnh nửa mê` : `Hắn lúc này đang ở ${s['Vị trí']} trong nhà, hoạt động tâm lý phải phù hợp với vị trí này và trạng thái ở nhà`;
    o.push(`  ▷ Tô Văn · Neo hoạt động tâm lý: ${e} (Suy nghĩ nội tâm hiện tại phải nhất quán với vị trí ở dòng trên, không được tự mâu thuẫn; Nếu suy nghĩ nội tâm lượt trước của hắn không còn phù hợp với hoàn cảnh này, lượt này bắt buộc phải viết lại trường đó)`);
  }
  for (const t of ['Tần Lộ', 'Tô Mộng']) {
    const n = he(t, e['Trạng thái Tô Văn'][`Giá trị nghi ngờ ${t}`]);
    n && o.push(n);
  }
  e['Hệ thống']['Dư âm ngắt quãng đến tầng'] >= 0 && t < e['Hệ thống']['Dư âm ngắt quãng đến tầng'] && o.push('  🌫 Dư âm ngắt quãng【Ràng buộc cứng】: Hắn vừa mới cắt ngang nơi này, sự chú ý vẫn chưa dời đi, người cũng chưa đi xa —— Trong thời gian dư âm, bất kể cô ấy đang ở giai đoạn mấy, chịu ảnh hưởng của ý niệm gì, cấm mọi hành vi và chủ đề thân mật/mập mờ/vượt rào: Thu hết vào ánh mắt, hơi thở và mạch ngầm tâm lý; Các cô ấy sẽ chủ động kéo giãn khoảng cách, bẻ chủ đề về chuyện nhà cửa, sự thăm dò vượt rào của {{user}} cũng sẽ bị các cô ấy căng thẳng đè lại theo kiểu "Không phải lúc này" (Đây không phải là từ chối hắn, mà là sợ bị nhìn thấy). Sau khi dư âm qua đi sẽ khôi phục chừng mực bình thường');
  const c = e['Hệ thống']['Sự kiện đã tiêm vào'], u = !!c['Nội dung'] && c['Tầng'] >= t, f = u ? c['Nội dung'] : e['Hệ thống']['Sự kiện đạo cụ chờ gửi'];
  if (f) {
    u && console.info(`[Sự kiện] Roll lại cùng tầng, phát lại sự kiện đã tiêu thụ (Tầng ${c['Tầng']})`), o.push(''), o.push('【Sự kiện cốt truyện lượt này (Dùng một lần, hãy hòa nhập tự nhiên vào diễn dịch, đừng lặp lại lời nhắc này)】');
    for (const e of f.split('|').filter(Boolean)) o.push(`  · ${e}`);
  }
  let l = !1;
  for (const t of r) {
    const n = e[`Trạng thái ${t}`], r = Object.entries(n['Danh sách ý niệm']).filter(([, e]) => 'Đang bồi dưỡng' === e['Trạng thái']), s = n['Danh sách thói quen'], c = n['Danh sách tập tính khắc sâu'];
    if (r.length > 0 && (l = !0), o.push(''), r.length > 0 || s.length > 0 || c.length > 0) {
      if (o.push(`【${t} hiện tại chịu ảnh hưởng của các ý niệm/thói quen sau, hãy thể hiện tự nhiên trong diễn dịch】`), c.length > 0) {
        o.push('  Tập tính khắc sâu (Đã khắc vào bản năng của cô ấy, trọng số biểu hiện cao hơn thói quen bình thường, gần như mỗi lượt đều nên để lại dấu vết):');
        for (const e of c) o.push(`  ★ 「${e['Nội dung']}」`);
      }
      if (r.length > 0) {
        o.push('  Ý niệm (Tầng suy nghĩ):');
        for (const [e, t] of r) o.push(`  · 「${t['Nội dung']}」(${e})`);
      }
      if (s.length > 0) {
        o.push('  Thói quen (Tầng hành vi):');
        for (const e of s) o.push(`  · 「${e['Nội dung']}」`);
      }
      o.push('  ▷ Giới hạn nguồn gốc tâm lý: Tâm lý hướng tới sự mập mờ/dục vọng vượt quá đường cơ sở của giai đoạn của cô ấy, chỉ có thể đến từ các ý niệm và thói quen được liệt kê ở trên —— Không liệt kê = Không tồn tại, đừng tự phát thêm vào hoặc phóng đại');
    } else if (n['Giai đoạn hiện tại'] <= 1) {
      const e = 'Tần Lộ' === t ? 'Một người mẹ bình thường' : 'Một người chị bình thường';
      o.push(`【${t}·Hiện tại không có ý niệm ảnh hưởng】Cô ấy lúc này không có bất kỳ ý niệm/thói quen nào đang phát huy tác dụng, chỉ là ${e}: Nội tâm xoay quanh việc nhà/việc học/người nhà/chuyện vặt đời thường, đừng tự phát tạo ra bất kỳ miêu tả nào về sự mập mờ, sức căng tình dục, ý thức cơ thể hoặc "dục vọng bị kìm nén"`);
    } else o.push(`【${t}·Hiện tại không có ý niệm ảnh hưởng】Cô ấy lúc này không có ý niệm/thói quen bổ sung nào đang phát huy tác dụng, đường cơ sở tâm lý lấy ràng buộc giai đoạn bên dưới làm chuẩn, đừng tự phát thêm thắt miêu tả mập mờ/dục vọng ngoài phạm vi này`);
    o.push(`  ▷ Ràng buộc giai đoạn (Giai đoạn ${n['Giai đoạn hiện tại']}「${n['Tiêu đề giai đoạn']}」): ${ge[n['Giai đoạn hiện tại']] ?? ge[1]}`), o.push('  ▷ Đối phó vượt rào【Ràng buộc cứng】: Giới hạn chấp nhận là ranh giới vật lý của lối ra hành vi —— Bất kể {{user}} dùng cách nào để thúc đẩy (Hơi men, hình phạt trò chơi, viện cớ mát xa, giả vờ ngủ, "chỉ một chút thôi"), hành vi vượt quá giới hạn sẽ không thực sự xảy ra trong lượt này, cơ thể cô ấy sẽ dừng lại trước cả ý thức. Phản ứng của cô ấy khi bị đẩy đến ranh giới phải nảy sinh từ thiết lập nhân vật, tình cảm và tình huống hiện tại (Cứng đờ, kinh ngạc, tìm cớ đứng dậy, lảng sang chuyện khác, lo lắng có phải hắn áp lực quá lớn không... Hình thức do bạn diễn dịch, đừng trở mặt theo kiểu rập khuôn); Sự từ chối không làm tổn hại đến tình yêu của cô ấy dành cho hắn, cũng sẽ không thổi bùng dục vọng của cô ấy');
  }
  const i = [];
  for (const t of ['Tần Lộ', 'Tô Mộng']) {
    const n = `Trạng thái ${t}`;
    for (const [t, o] of Object.entries(e[n]['Danh sách ý niệm'])) 'Đang phán định' === o['Trạng thái'] && i.push(`  ${t}：「${o['Nội dung']}」（Ghi vào /${n}/Danh sách ý niệm/${t}/Loại）`);
  }
  i.length > 0 && (o.push(''), o.push('━━━ Nhiệm vụ phán định A: Phán định loại ý niệm mới ━━━'), o.push(...i), o.push('Đối với mỗi mục ở trên, hãy replace Loại = 1 trong 10 loại lớn theo đường dẫn trong ngoặc (Quy tắc xem "Định dạng đầu ra biến số"). Đừng thay cô ấy chấp nhận hoặc từ chối những ý niệm này trong chính văn.')), l && (o.push(''), o.push('━━━ Nhiệm vụ phán định B: Độ liên quan của ý niệm đang bồi dưỡng ━━━'), o.push('Phán định độ liên quan giữa cốt truyện lượt này và các ý niệm trong danh sách "Tầng suy nghĩ" ở trên: replace /Hệ thống/Ý niệm liên quan lượt này = { "<ID ý niệm>": 2 hoặc 1 } (2=Liên quan cao; 1=Liên quan nhẹ; Không liên quan thì không đưa vào).'));
  const a = Object.entries(e['Hệ thống']['Danh sách hình ảnh']).filter(([, e]) => 'Chờ tóm tắt' === e['Trạng thái']);
  if (a.length > 0) {
    o.push(''), o.push('━━━ Nhiệm vụ phán định C: Lưu trữ hình ảnh ━━━');
    for (const [e] of a) o.push(`  replace /Hệ thống/Danh sách hình ảnh/${e}/Tóm tắt = Dưới 50 chữ, tóm tắt cảnh riêng tư/không thể cho ai thấy nhất trong đoạn cốt truyện vừa được ghi lại`);
    o.push('Chỉ viết tóm tắt, đừng sửa đổi các trường khác của hình ảnh, đừng nhắc đến việc lưu trữ này trong chính văn.');
  }
  return o.push('══════════════════════════'), o.join('\n');
}

$(() => {
  (async () => {
    console.info('[Tần Lộ Bản Làm Lại] Khởi động cổng chính logic trò chơi');
    try {
      const t = new Promise((e, t) => setTimeout(() => t(new Error('Chờ khởi tạo Mvu quá giờ (>10s)')), 1e4));
      await Promise.race([waitGlobalInitialized('Mvu'), t]), e(M), console.info('[Tần Lộ Bản Làm Lại] Mvu đã sẵn sàng, Schema đã được đăng ký');
    } catch (e) {
      console.error('[Tần Lộ Bản Làm Lại] Khởi tạo Mvu thất bại:', e);
      const t = window.parent ?? window;
      return void t.toastr?.error?.(`Tải script logic trò chơi thất bại: ${e?.message ?? String(e)}\nVui lòng nhấn F12 để xem console`, 'Tần Lộ Bản Làm Lại', { timeOut: 0, extendedTimeOut: 0 });
    }
    try {
      const e = window.parent ?? window;
      e.sessionStorage?.setItem?.('Tần Lộ Bản Làm Lại_Script_Heartbeat', String(Date.now())), e.sessionStorage?.removeItem?.('Tần Lộ Bản Làm Lại_Toast_Load_Fail_Shown'), setInterval(() => {
        try {
          e.sessionStorage?.setItem?.('Tần Lộ Bản Làm Lại_Script_Heartbeat', String(Date.now()));
        } catch {}
      }, 5e3);
    } catch {}
    eventClearEvent(tavern_events.MESSAGE_RECEIVED), eventClearEvent(tavern_events.CHAT_CHANGED), eventClearEvent(tavern_events.CHAT_COMPLETION_PROMPT_READY), eventClearEvent(Mvu.events.VARIABLE_UPDATE_ENDED), eventClearEvent(Mvu.events.COMMAND_PARSED), function () {
      let e = SillyTavern.getCurrentChatId();
      eventOn(tavern_events.CHAT_CHANGED, t => {
        e !== t && (e = t, window.location.reload());
      });
    }(), eventOn(tavern_events.CHAT_COMPLETION_PROMPT_READY, e => {
      if (e?.dryRun) console.info('[Tần Lộ Bản Làm Lại] dryRun=true, bỏ qua tiêm vào');
      else {
        re = !0;
        try {
          const t = ue(), n = Mvu.getMvuData({ type: 'message', message_id: -1 }), o = _.get(n, 'stat_data');
          if (!o || _.isEmpty(o)) return void console.warn('[Tần Lộ Bản Làm Lại] PROMPT_READY: Thiếu stat_data, bỏ qua việc chụp và tiêm ảnh chụp nhanh lượt này (Giữ lại ảnh chụp nhanh cũ)');
          const r = M.parse(o);
          if (!r['Hệ thống']['Kết cục xấu'] && !me(r, t) && Q(t))
            for (const e of be(r)) {
              const n = `Trạng thái ${e}`;
              'Tâm phòng buông lỏng' !== r[n]['Cảm xúc hiện tại'] && (r[n]['Cảm xúc hiện tại'] = 'Tâm phòng buông lỏng', console.info(`[Tâm phòng buông lỏng] Tầng ${t} Ghi đè cảm xúc ${e} → Tâm phòng buông lỏng`));
            }
          le(r);
          const s = (ce + ']\n' + pe(r, t)).replace(/\{\{user\}\}/g, function () {
            try {
              const e = globalThis.substitudeMacros;
              if ('function' == typeof e) {
                const t = e('{{user}}');
                if (t && '{{user}}' !== t) return t;
              }
            } catch {}
            return SillyTavern?.name1 || 'Con trai';
          }()), c = e.chat ?? [];
          for (let e = c.length - 1; e >= 0; e--) 'system' === c[e].role && (c[e].content ?? '').includes(ce) && c.splice(e, 1);
          const u = c[c.length - 1];
          u && 'assistant' === u.role ? (c.splice(c.length - 1, 0, { role: 'system', content: s }), console.info('[Tần Lộ Bản Làm Lại] Ảnh chụp nhanh trạng thái: Chèn vào trước prefill')) : (c.push({ role: 'system', content: s }), console.info('[Tần Lộ Bản Làm Lại] Ảnh chụp nhanh trạng thái: push vào cuối'));
        } catch (e) {
          console.error('[Tần Lộ Bản Làm Lại] Xử lý PROMPT_READY thất bại:', e);
        }
      }
    }), eventOn(Mvu.events.VARIABLE_UPDATE_ENDED, (e, t) => {
      try {
        const t = _.get(e, 'stat_data');
        if (!t || _.isEmpty(t)) return void console.warn('[Tần Lộ Bản Làm Lại] VARIABLE_UPDATE_ENDED: Thiếu stat_data, bỏ qua xử lý');
        if (!re) {
          if (se) {
            const n = M.parse(t);
            _e(n), _.set(e, 'stat_data', n), console.info('[Tần Lộ Bản Làm Lại] Xử lý lại biến số ngoài chu kỳ tạo: Các trường do script quản lý đã được khôi phục theo ảnh chụp nhanh (Engine chưa tiến lên)');
          }
          return;
        }
        if (!se) return;
        const n = M.parse(t), o = ue(), r = fe();
        _e(n), 'Bà nội trợ dịu dàng hiền thục' === n['Trạng thái Tô Mộng']['Mô tả khí chất'] && (n['Trạng thái Tô Mộng']['Mô tả khí chất'] = 'Nữ sinh viên hoạt bát vui vẻ', console.info('[Di chuyển] Mô tả khí chất Tô Mộng được sửa từ mặc định bị rò rỉ thành "Nữ sinh viên hoạt bát vui vẻ"'));
        {
          const e = n['Trạng thái Tô Mộng']['Chi tiết trang phục'];
          'Áo khoác len màu be' === e['Áo'] && 'Váy dài xám đậm' === e['Quần váy'] && 'Vợ hiền đảm đang' === e['Phong cách tổng thể'] && (n['Trạng thái Tô Mộng']['Chi tiết trang phục'] = { 'Đầu': 'Dây buộc tóc đen', 'Áo': 'Áo sơ mi linen trắng', 'Quần váy': 'Quần jean xanh nhạt', 'Nội y': { 'Trên': 'Áo lót ren trắng', 'Dưới': 'Quần lót cotton trắng' }, 'Tất': 'Tất ngắn trắng', 'Giày': 'Giày vải', 'Áo khoác': 'Không', 'Phụ kiện': 'Không', 'Trang sức đặc biệt': 'Không', 'Phong cách tổng thể': 'Trẻ trung năng động', 'Độ hở hang': 'Bình thường', 'Độ gọn gàng': 'Gọn gàng' }, n['Trạng thái Tô Mộng']['Chi tiết trang điểm'] = { 'Kem nền': 'Mặt mộc', 'Trang điểm mắt': 'Không', 'Trang điểm môi': 'Không', 'Má hồng': 'Không', 'Trang điểm đặc biệt': 'Không', 'Hương thơm': 'Không', 'Phong cách tổng thể': 'Tươi mát tự nhiên', 'Độ đậm nhạt': 'Mặt mộc' }, console.info('[Di chuyển] Trang phục/trang điểm Tô Mộng được sửa từ mặc định bị rò rỉ (Giống Tần Lộ) thành trang phục ban đầu trẻ trung năng động'));
        }
        {
          const e = n['Hệ thống']['Sự kiện đã tiêm vào'];
          e['Nội dung'] && e['Tầng'] === o || (n['Hệ thống']['Sự kiện đạo cụ chờ gửi'] ? (e['Tầng'] = o, e['Nội dung'] = n['Hệ thống']['Sự kiện đạo cụ chờ gửi'], n['Hệ thống']['Sự kiện đạo cụ chờ gửi'] = '') : (e['Tầng'] = -1, e['Nội dung'] = ''));
        }
        if (n['Hệ thống']['Kết cục xấu']) return _.set(e, 'stat_data', n), void (re = !1);
        if (me(n, o)) {
          const t = n['Hệ thống']['Góc nhìn Tô Văn'];
          return t['Số tầng còn lại'] > 0 && o !== t['Tầng xử lý lần trước'] && (t['Số tầng còn lại'] -= 1, t['Tầng xử lý lần trước'] = o, n['Hệ thống']['Dư âm ngắt quãng đến tầng'] >= o && (n['Hệ thống']['Dư âm ngắt quãng đến tầng'] += 1), console.info(`[Góc nhìn Tô Văn] Màn ${t['Tổng số tầng'] - t['Số tầng còn lại']}/${t['Tổng số tầng']} hoàn thành, còn lại ${t['Số tầng còn lại']}`)), _.set(e, 'stat_data', n), void (re = !1);
        }
        n['Hệ thống']['Dư âm ngắt quãng đến tầng'] >= 0 && o <= n['Hệ thống']['Dư âm ngắt quãng đến tầng'] ? (n['Trạng thái Tô Văn']['Trạng thái hiện tại'] = 'Ở nhà', console.info(`[Sinh hoạt Tô Văn] Đang trong dư âm ngắt quãng (Đến tầng ${n['Hệ thống']['Dư âm ngắt quãng đến tầng']}), con trỏ tạm dừng, Tô Văn lưu lại @${n['Trạng thái Tô Văn']['Vị trí hiện tại']}`)) : (n['Hệ thống']['Dư âm ngắt quãng đến tầng'] >= 0 && (n['Hệ thống']['Dư âm ngắt quãng đến tầng'] = -1, console.info('[Sinh hoạt Tô Văn] Dư âm ngắt quãng kết thúc, sinh hoạt khôi phục luân chuyển')), function (e, t, n) {
          const o = e['Hệ thống'];
          if (t === o['Tầng xử lý lần trước']) console.info(`[Sinh hoạt Tô Văn] Tầng ${t} giống với lần trước, bỏ qua việc tiến con trỏ`);
          else {
            const e = k(n, o['Con trỏ sinh hoạt Tô Văn']);
            null !== e ? (o['Con trỏ sinh hoạt Tô Văn'] = e, console.info(`[Sinh hoạt Tô Văn] Phát hiện từ khóa nhảy vọt, con trỏ nhảy đến ${e}`)) : o['Con trỏ sinh hoạt Tô Văn'] += 1, o['Tầng xử lý lần trước'] = t;
          }
          const { 'Trạng thái': r, 'Vị trí': s } = Y(o['Con trỏ sinh hoạt Tô Văn']);
          e['Trạng thái Tô Văn']['Trạng thái hiện tại'] = r, e['Trạng thái Tô Văn']['Vị trí hiện tại'] = s, console.info(`[Sinh hoạt Tô Văn] Con trỏ=${o['Con trỏ sinh hoạt Tô Văn']} → Tô Văn ${r}@${s}` + (W(o['Con trỏ sinh hoạt Tô Văn']) ? ' [Phòng tăng tốc]' : ''));
        }(n, o, r));
        for (const e of ['Trạng thái Tần Lộ', 'Trạng thái Tô Mộng']) {
          const t = n[e];
          for (const [r, s] of Object.entries(t['Danh sách ý niệm'])) 'Đang phán định' === s['Trạng thái'] && 'Chờ phán định' !== s['Loại'] && te(n, e, r, s['Loại'], o);
          const r = A(t['Độ sa đọa']);
          t['Giai đoạn hiện tại'] > r && (t['Giai đoạn hiện tại'] = r, t['Tiêu đề giai đoạn'] = I(r), console.info(`[Tần Lộ Bản Làm Lại] ${e} Giai đoạn vượt trước bị kéo về → ${r}「${I(r)}」`));
        }
        const s = n['Hệ thống']['Ý niệm liên quan lượt này'] ?? {};
        for (const e of ['Trạng thái Tần Lộ', 'Trạng thái Tô Mộng']) ne(n, e, o, s);
        n['Hệ thống']['Ý niệm liên quan lượt này'] = {};
        {
          const e = n['Hệ thống']['Tô Mộng dẫn cảnh'];
          if (!e['Đã kích hoạt'] && e['Số tầng còn lại'] > 0 && (e['Số tầng còn lại'] -= 1, 0 === e['Số tầng còn lại'])) {
            e['Đã kích hoạt'] = !0, e['Số tầng còn lại'] = -1, n['Hệ thống']['Khóa có mặt'] = !1;
            const t = 'Tô Mộng: Cô ấy vô tình bắt gặp dáng vẻ lúc này của mẹ (Đẩy cửa/nhà bếp/hành lang —— chọn tự nhiên theo bối cảnh hiện tại), chân thành khen ngợi sự thay đổi của mẹ. Lượt này hãy để Tô Mộng xuất hiện tự nhiên và để lại sự hiện diện rõ nét (Nhớ đặt /Hệ thống/Nhân vật có mặt/Tô Mộng thành true), cách xuất hiện và đối thoại hoàn toàn diễn dịch theo ngữ cảnh';
            n['Hệ thống']['Sự kiện đạo cụ chờ gửi'] = n['Hệ thống']['Sự kiện đạo cụ chờ gửi'] ? `${n['Hệ thống']['Sự kiện đạo cụ chờ gửi']}|${t}` : t, console.info('[Móc ẩn] Kích hoạt Tô Mộng dẫn cảnh');
          }
        }
        for (const [e, t] of Object.entries(n['Hệ thống']['Danh sách hình ảnh'])) 'Chờ tóm tắt' === t['Trạng thái'] && t['Tóm tắt'] && (t['Trạng thái'] = 'Đã sẵn sàng', console.info(`[Ghi hình] ${e} Tóm tắt lưu trữ hoàn tất: ${t['Tóm tắt']}`));
        !function (e, t) {
          if (e['Hệ thống']['Kết cục xấu']) return;
          let n = !1;
          const o = be(e);
          for (const r of ['Tần Lộ', 'Tô Mộng']) {
            const s = `Trạng thái ${r}`, c = `Giá trị nghi ngờ ${r}`, u = `Đóng băng nghi ngờ ${r}`, f = e['Trạng thái Tô Văn'][u];
            if (f['Có đóng băng không']) {
              if (!(t >= f['Tầng kết thúc đóng băng'])) continue;
              f['Có đóng băng không'] = !1, console.info(`[Nghi ngờ] Đóng băng đối với ${r} đã hết hạn và được giải trừ`);
            }
            const l = e[s];
            l['Độ sa đọa đã kết toán nghi ngờ'] < 0 && (l['Độ sa đọa đã kết toán nghi ngờ'] = l['Độ sa đọa']);
            let i = 0;
            if (l['Độ sa đọa'] > l['Độ sa đọa đã kết toán nghi ngờ']) {
              const e = l['Độ sa đọa'] - l['Độ sa đọa đã kết toán nghi ngờ'], t = Math.min(Math.round(.5 * e), 2);
              i += t, l['Độ sa đọa đã kết toán nghi ngờ'] += Math.min(2 * t, e);
            } else l['Độ sa đọa'] < l['Độ sa đọa đã kết toán nghi ngờ'] && (l['Độ sa đọa đã kết toán nghi ngờ'] = l['Độ sa đọa']);
            const a = P(e, s), d = a.full && o.includes(r);
            d && (i += a.route ? V[a.route]['Nghi ngờ mỗi tầng'] : 1);
            const m = e['Trạng thái Tô Văn'][c], h = N(e, s);
            let b;
            if (b = i > 0 ? Math.min(100, m + i) : m > h ? Math.max(h, m - .5) : m, b !== m && (e['Trạng thái Tô Văn'][c] = b, console.info(`[Nghi ngờ] Tô Văn đối với ${r} ${m}→${b} (Tăng ${i}${d ? ` Gồm đầy sao ${a.route ?? '·Gỡ lỗi'}` : ''}, Giới hạn dưới ${h})`)), b >= 100) return e['Hệ thống']['Kết cục xấu'] = `Nghi ngờ bùng nổ·${r}`, void console.warn(`[Kết cục xấu] Sự nghi ngờ của Tô Văn đối với ${r} bùng nổ, khóa file save`);
            if (n) continue;
            if (e['Hệ thống']['Hồi chiêu ngắt quãng đến tầng'] >= 0 && t < e['Hệ thống']['Hồi chiêu ngắt quãng đến tầng']) continue;
            if (!o.includes(r)) continue;
            let g = 0;
            for (let t = 10; t <= 90; t += 10) b >= t && !e['Hệ thống']['Mức độ ngắt quãng đã kích hoạt'][`${r}:${t}`] && (g = t);
            if (g > 0) {
              for (let t = 10; t <= g; t += 10) e['Hệ thống']['Mức độ ngắt quãng đã kích hoạt'][`${r}:${t}`] = !0;
              e['Hệ thống']['Hồi chiêu ngắt quãng đến tầng'] = t + 12, n = !0;
              const o = `【Tô Văn cắt ngang · Nghi ngờ ${g}】Lượt này hãy để Tô Văn chấm dứt cảnh hiện tại của ${r}. Hướng đi: ${ze[g]}. Chỉ định hướng không định chi tiết —— Lý do/cái cớ cụ thể để cắt ngang phải được tạo ra từ ngữ cảnh hiện tại và sinh hoạt gia đình (Đừng phát minh ra đạo cụ hoặc tình tiết từ hư không), lời thoại, thời cơ của hắn và phản ứng của cô ấy do bạn diễn dịch theo ngữ cảnh và giai đoạn hiện tại; Hắn không có bằng chứng thực tế, lần cắt ngang này không vạch trần bất kỳ sự thật nào`;
              e['Hệ thống']['Sự kiện đạo cụ chờ gửi'] = e['Hệ thống']['Sự kiện đạo cụ chờ gửi'] ? `${e['Hệ thống']['Sự kiện đạo cụ chờ gửi']}|${o}` : o, e['Hệ thống']['Góc nhìn Tô Văn'] = { 'Chờ xem': !0, 'Số tầng còn lại': 0, 'Tổng số tầng': 3, 'Mục tiêu': r, 'Mức độ': g, 'Tầng xử lý lần trước': -1 }, e['Trạng thái Tô Văn']['Trạng thái hiện tại'] = 'Ở nhà', e['Trạng thái Tô Văn']['Vị trí hiện tại'] = e['Thế giới']['Địa điểm'], e['Hệ thống']['Dư âm ngắt quãng đến tầng'] = t + 4, console.info(`[Cắt ngang] Sự nghi ngờ của Tô Văn đối với ${r} đạt mức ${g} kích hoạt cắt ngang (Hồi chiêu đến tầng ${t + 12}), sự kiện đã được tiêm vào (Tô Văn bắt buộc có mặt @${e['Thế giới']['Địa điểm']}, dư âm đến tầng ${t + 4}), Góc nhìn Tô Văn chờ xem`);
            }
          }
        }(n, o), function (e, t) {
          if (e['Hệ thống']['Kết cục xấu']) return;
          if ('Ở nhà' !== e['Trạng thái Tô Văn']['Trạng thái hiện tại']) return;
          if (e['Hệ thống']['Dư âm ngắt quãng đến tầng'] >= 0 && t <= e['Hệ thống']['Dư âm ngắt quãng đến tầng']) return;
          const n = be(e);
          for (const o of ['Tần Lộ', 'Tô Mộng']) {
            if (!n.includes(o)) continue;
            const r = `Trạng thái ${o}`, s = e[r], c = e['Trạng thái Tô Văn'][`Đóng băng nghi ngờ ${o}`];
            if (c['Có đóng băng không'] && t < c['Tầng kết thúc đóng băng']) continue;
            if (s['Tầng chú ý trang phục lần trước'] >= 0 && t - s['Tầng chú ý trang phục lần trước'] < 10) continue;
            if (0 === C(e, r).length) continue;
            const u = x(e, r), f = Math.min(.3, .1 + .05 * u);
            if (Math.random() >= f) continue;
            s['Tầng chú ý trang phục lần trước'] = t;
            const l = `Giá trị nghi ngờ ${o}`, i = e['Trạng thái Tô Văn'][l], a = Math.random() < (i < 30 ? .7 : .3);
            let d;
            if (a) {
              const t = N(e, r);
              e['Trạng thái Tô Văn'][l] = Math.max(t, i - 2), d = `【Tô Văn chú ý · Ấm áp】Tô Văn đã chú ý đến sự thay đổi trang phục gần đây của ${o}, nhưng lại nghĩ theo hướng tốt —— Trong nhà có chút sinh khí là chuyện tốt. Lượt này hãy miêu tả nhẹ nhàng một nét về sự hưởng thụ không phòng bị của hắn (Một câu cảm thán/một ánh mắt dịu dàng, cụ thể tạo ra từ ngữ cảnh), hắn không nhận ra bất kỳ điều gì bất thường`;
            } else e['Trạng thái Tô Văn'][l] = Math.min(99, i + (i < 30 ? 1 : 2)), d = `【Tô Văn chú ý · Nghi ngờ】Ánh mắt của Tô Văn dừng lại trên trang phục của ${o} một chút, nghĩ sâu thêm một tầng. Lượt này hãy miêu tả nhẹ nhàng một nét về khoảnh khắc này (Hắn không nói gì, hoặc hỏi một câu như có như không, cụ thể tạo ra từ ngữ cảnh), không lật bài ngửa không đối đầu`;
            e['Hệ thống']['Sự kiện đạo cụ chờ gửi'] = e['Hệ thống']['Sự kiện đạo cụ chờ gửi'] ? `${e['Hệ thống']['Sự kiện đạo cụ chờ gửi']}|${d}` : d, console.info(`[Chú ý trang phục] ${o} Kích hoạt (Rủi ro ${u}, p=${Math.round(100 * f)}%, ${a ? 'Hiểu lầm' : 'Nghi ngờ'}) Nghi ngờ ${i}→${e['Trạng thái Tô Văn'][l]}`);
          }
        }(n, o), n['Hệ thống']['Kết cục xấu'] || function (e) {
          for (const t of ['Tần Lộ', 'Tô Mộng']) {
            const n = e[`Trạng thái ${t}`];
            if (n['Độ sa đọa đã kết toán tiền tệ'] < 0) n['Độ sa đọa đã kết toán tiền tệ'] = n['Độ sa đọa'];
            else if (n['Độ sa đọa'] > n['Độ sa đọa đã kết toán tiền tệ']) {
              const o = n['Độ sa đọa'] - n['Độ sa đọa đã kết toán tiền tệ'], r = Math.round(20 * o);
              e['Hệ thống']['Tiền tệ'] += r, n['Độ sa đọa đã kết toán tiền tệ'] = n['Độ sa đọa'], console.info(`[Kinh tế] ${t} Độ sa đọa +${o} → Tiền tệ +${r} (Tổng ${e['Hệ thống']['Tiền tệ']})`);
            } else n['Độ sa đọa'] < n['Độ sa đọa đã kết toán tiền tệ'] && (n['Độ sa đọa đã kết toán tiền tệ'] = n['Độ sa đọa']);
            if (n['Giai đoạn đã thưởng'] < 0) n['Giai đoạn đã thưởng'] = n['Giai đoạn hiện tại'];
            else if (n['Giai đoạn hiện tại'] > n['Giai đoạn đã thưởng']) {
              let o = 0;
              for (let e = n['Giai đoạn đã thưởng'] + 1; e <= n['Giai đoạn hiện tại']; e++) o += de[e] ?? 0;
              n['Giai đoạn đã thưởng'] = n['Giai đoạn hiện tại'], o > 0 && (e['Hệ thống']['Tiền tệ'] += o, console.info(`[Kinh tế] ${t} Đột phá giai đoạn đến ${n['Giai đoạn hiện tại']} → Phần thưởng +${o} (Tổng ${e['Hệ thống']['Tiền tệ']})`));
            }
          }
        }(n), _.set(e, 'stat_data', n), re = !1;
      } catch (e) {
        console.error('[Tần Lộ Bản Làm Lại] Xử lý VARIABLE_UPDATE_ENDED thất bại:', e), re = !1;
      }
    }), eventOn(tavern_events.MESSAGE_RECEIVED, async () => {
      try {
        ue();
        const e = Mvu.getMvuData({ type: 'message', message_id: -1 }), t = _.get(e, 'stat_data');
        if (!t || _.isEmpty(t)) return void console.warn('[Tần Lộ Bản Làm Lại] MESSAGE_RECEIVED: Thiếu stat_data, bỏ qua làm mới ảnh chụp nhanh (Giữ lại ảnh chụp nhanh cũ)');
        le(M.parse(t)), console.info('[Tần Lộ Bản Làm Lại] Ảnh chụp nhanh MESSAGE_RECEIVED đã được làm mới');
      } catch (e) {
        console.error('[Tần Lộ Bản Làm Lại] Xử lý MESSAGE_RECEIVED thất bại:', e);
      }
    }), console.info('[Tần Lộ Bản Làm Lại] Đăng ký lắng nghe sự kiện hoàn tất');
  })();
});
//# sourceMappingURL=index.js.map
