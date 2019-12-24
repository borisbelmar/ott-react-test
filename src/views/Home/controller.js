import axios from 'axios';

const controller = {
    async getCategories() {
        try {
            let res = await axios.get('/sampleData/categories.json');
            return res.data;
        } catch(error) {
            return null;
        }
    }
}

export default controller; 