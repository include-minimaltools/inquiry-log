export class InquiryService {
    static async getInquiry(inquiryId) {
        return this.http.get(`/api/inquiry/${inquiryId}`);
    }
    static async getInquiries() {
        return this.http.get('/api/inquiry');
    }
    static async createInquiry(inquiry) {
        return this.http.post('/api/inquiry', inquiry);
    }
    static async updateInquiry(inquiry) {
        return this.http.put(`/api/inquiry/${inquiry.id}`, inquiry);
    }
    static async deleteInquiry(inquiryId) {
        return this.http.delete(`/api/inquiry/${inquiryId}`);
    }
    static async login({ email, password }) {
        const result = await fetch(`/api/auth/login?email=${email}&password=${password}`, { method: 'GET'});

        if(result.status !== 200) 
            return null;

        const data = await result.json();
        return data;
    }
}
