export class Api {
  async login(username, password) {
    console.log("LOGIN", username, password); // Chỉ in ra username -> lấy mật khẩu sai
    await new Promise((done) => setTimeout(done, 1 * 1000)); // Delay 3s
    // Ở đây sẽ gọi Api
    if (username === "admin@gmail.com") {
      if (password === "admin") {
        return {
          success: true,
          user: {
            token: "abcdef",
            id: 1,
            username: "admin@gmail.com",
            name: "Admin",
          },
        };
      }
      return {
        success: false,
        error: {
          code: "INVALID_PASSWORD",
          message: "Sai mật khẩu",
        },
      };
    }
    return {
      success: false,
      error: {
        code: "INVALID_USERNAME",
        message: "Tài khoản không tồn tại",
      },
    };
  }

  async logout() {
    return;
  }

  async getMe() {}
}
