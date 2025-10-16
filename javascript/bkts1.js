const SchoolSystem = {
  danhSach: [],
  soLuongHocSinh: 0,

  khoiTao(data = []) {
    data = this.danhSach;
    this.soLuongHocSinh = this.danhSach.length || 0;
  },

  themHocSinh(hoTen, lopHoc, diemTB, hanhKiem) {
    const namHienTai = new Date().getFullYear();
    const stt = String(this.soLuongHocSinh + 1).padStart(3, "0");
    const maMoi = `ma${namHienTai}{stt}`;
    const hocSinh = {
      maHS: maMoi,
      hoTen: hoTen,
      lopHoc: lopHoc,
      diemTB: diemTB,
      hanhKiem: hanhKiem,
    };
    this.danhSach.push(hocSinh);
    this.soLuongHocSinh.length++;
  },

  timHocSinh(maHS) {
    const hocSinh = this.danhSach.find((found) => found.maHS === maHS);
    if (hocSinh) return hocSinh;
    else return null;
  },
  capNhatThongTin(hocSinh) {
    const hocSinh = this.timHocSinh(maHS);
    if (!hocSinh) return false;
  },
};
