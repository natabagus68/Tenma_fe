const axios = ({ url, method, data, params }) => {
    return new Promise((res, rej) => {
        switch (url) {
            case 'me': return res({
                data: {
                    message: 'success',
                    data: {
                        id: 1,
                        company_code: 'CMP',
                        email: 'admin@admin.com',
                    },
                    token: 'asdasda87s65d65sa5fd87s98dasdfsdfasd'
                }
            });
        }
    });
};

export const mockAxiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) =>
    async (_url, { url, method, data, params }) => {
        if (_url) url = _url;
        try {
            const result = await axios({ url: baseUrl + url, method, data, params });
            return { data: result.data };
        } catch (axiosError) {
            let err = axiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    };
