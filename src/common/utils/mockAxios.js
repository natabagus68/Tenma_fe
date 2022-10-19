import authMe from './../fake/authMe.json';
import employees from './../fake/employees.json';
import divisions from './../fake/divisions.json';
import positions from './../fake/positions.json';

const axios = ({ url, method, data, params }) => {
    return new Promise((res, rej) => {
        switch (url) {
            case 'me': return res({
                data: authMe
            });
            case 'employees': return res({
                data: employees
            });
            case 'employees/1': return res({
                data: {
                    ...employees,
                    data: employees.data.find(item => item.id == 1)
                }
            });
            case 'divisions': return res({
                data: divisions
            });
            case 'positions': return res({
                data: positions
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
