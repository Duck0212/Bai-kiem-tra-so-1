const SchoolSystem = {
  danhSach: [],
  soLuongHocSinh: 0,

  khoiTao(data = []) {
    for (let item of data) {
      this.danhSach.push(item);
    }
    this.soLuongHocSinh = this.danhSach.length;
  },

  themHocSinh(hocSinh = []) {
    for (let hs of hocSinh) {
      const namHienTai = new Date().getFullYear();
      const stt = String(this.soLuongHocSinh + 1).padStart(3, "0");
      const maMoi = `ma${namHienTai}${stt}`;
      const hocSinhMoi = {
        maHS: maMoi,
        ...hs,
        diemTB: Number(hs.diemTB || 0),
      };
      this.danhSach.push(hocSinhMoi);
      this.soLuongHocSinh++;
    }
  },

  timHocSinh(maHS) {
    const hocSinh = this.danhSach.find((found) => found.maHS === maHS);
    return hocSinh || null;
  },
  capNhatThongTin(maHS, duLieuMoi = {}) {
    if (!maHS) return false;
    const duLieuCapNhat = { ...duLieuMoi };
    delete duLieuCapNhat.maHS;
    let daCapNhat = false;
    this.danhSach = this.danhSach.map((hocSinh) => {
      if (hocSinh.maHS === maHS) {
        daCapNhat = true;
        return { ...hocSinh, ...duLieuCapNhat };
      }
      return hocSinh;
    });
    if (daCapNhat)
      console.log(
        `Đã cập nhật thành công thông tin của học sinh có mã ${maHS}`
      );
    else console.log("Cập nhật thông tin không thành công!");
    return daCapNhat;
  },

  xoaHocSinh(maHS) {
    const soLuongBanDau = this.danhSach.length;
    this.danhSach = this.danhSach.filter((hocSinh) => hocSinh.maHS !== maHS);
    let daXoa = this.danhSach.length < soLuongBanDau;
    if (daXoa) {
      console.log(`Đã xóa học sinh có mã ${maHS} thành công!`);
    } else console.log(`Không tìm thấy học sinh có mã ${maHS}`);
    return daXoa;
  },

  layDanhSachTheoLop(tenLop) {
    const danhSachLop = this.danhSach.filter(
      (hocSinh) => hocSinh.lopHoc === tenLop
    );
    if (danhSachLop.length === 0) {
      console.log(`Lớp ${tenLop} không tồn tại hoặc chưa có học sinh nào!`);
      return null;
    } else {
      console.log(`Danh sách học sinh của lớp ${tenLop}:`);
      return danhSachLop;
    }
  },

  thongKeHocLuc() {
    const kq = {
      xuatSac: this.danhSach.filter((diem) => diem.diemTB >= 9),
      gioi: this.danhSach.filter((diem) => diem.diemTB < 9 && diem.diemTB >= 8),
      kha: this.danhSach.filter(
        (diem) => diem.diemTB < 8 && diem.diemTB >= 6.5
      ),
      trungBinh: this.danhSach.filter(
        (diem) => diem.diemTB < 6.5 && diem.diemTB >= 5
      ),
      kem: this.danhSach.filter((diem) => diem.diemTB < 5),
    };
    return kq;
  },

  sapXepTheoDiem(kieuSapXep) {
    const danhSachSapXep = [...this.danhSach];
    danhSachSapXep.sort((a, b) => {
      if (kieuSapXep === "tang") {
        return a.diemTB - b.diemTB;
      } else {
        if (kieuSapXep === "giam") {
          return b.diemTB - a.diemTB;
        } else {
          console.log("Kiểu sắp xếp không hợp lệ!");
          return 0;
        }
      }
    });
    return danhSachSapXep;
  },
};
