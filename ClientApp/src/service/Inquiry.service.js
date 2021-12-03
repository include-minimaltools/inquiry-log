import { userData } from "../helper";

export class InquiryService {
  static async getInquiries() {
    const result = await fetch(`/api/inquiry/getall`, { method: "GET" });

    if (result.status !== 200) return null;

    const data = await result.json();

    return data;
  }

  static async login({ email, password }) {
    const result = await fetch(
      `/api/auth/login?email=${email}&password=${password}`,
      { method: "GET" }
    );

    if (result.status !== 200) return null;

    const data = await result.json();
    return data;
  }

  static async getCourseByUser() {
    const { id } = userData();
    const result = await fetch(`/api/course/getbyuser?id=${id}`, {
      method: "GET",
    });

    if (result.status !== 200) return null;

    const data = await result.json();
    return data;
  }

  static async getGroupByCourse({ id }) {
    const result = await fetch(`/api/group/getbycourse?id=${id}`, {
      method: "GET",
    });

    if (result.status !== 200) return null;

    const data = await result.json();
    return data;
  }

  static async getInquiryTypes() {
    const result = await fetch(`/api/inquiry/gettypes`, { method: "GET" });

    if (result.status !== 200) return null;

    const data = await result.json();
    return data;
  }

  static async getInquiry({ id }) {
    const result = await fetch(`/api/inquiry/get?id=${id}`, { method: "GET" });

    if (result.status !== 200) return null;

    const data = await result.json();
    return data;
  }

  static async insertOrUpdateInquiry({ inquiry }) {
    const result = await fetch(`/api/inquiry/insertorupdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiry),
    });

    if (result.status !== 200) return null;

    const data = await result.json();
    return data;
  }
}
