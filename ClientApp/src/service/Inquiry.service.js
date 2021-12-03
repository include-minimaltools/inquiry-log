import { userData } from "../helper";

export class InquiryService {

  static async changeStatus({ status, inquiryId }) {
    const { id } = userData();

    const result = await fetch(`/api/inquiry/UpdateStatus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Status: status,
        Updated_By: id,
        Id: inquiryId,
      }),
    });

    if (result.status !== 200) return null;

    const data = await result.json();
    return data;
  }

  static async getInquiriesByUser() {
    const { id } = userData();
    const result = await fetch(`/api/inquiry/getbyuser?id=${id}`, { method: "GET" });

    if (result.status !== 200) return null;

    const data = await result.json();

    return data;
  }

  static async getInquiriesPending() {
    const result = await fetch(`/api/inquiry/getpending`, { method: "GET" });

    if (result.status !== 200) return null;

    const data = await result.json();

    return data;
  }

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
  
  static async getUsers(){
    const result = await fetch(`/api/user/getall`, { method: "GET" });

    if (result.status !== 200) return null;

    const data = await result.json();
    return data;
  }

  static async getRole(){
    const result = await fetch(`/api/role/getall`, { method: "GET" });

    if (result.status !== 200) return null;

    const data = await result.json();
    return data;
  }

  static async getPermission(){
    const result = await fetch(`/api/permission/getall`, { method: "GET" });

    if (result.status !== 200) return null;

    const data = await result.json();
    return data;
  }
}
