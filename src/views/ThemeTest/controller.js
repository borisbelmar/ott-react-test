import axios from 'axios';

const controller = {
    async getSeries() {
        try {
            let res = await axios.get('/sampleData/series.json');
            return res.data;
        } catch(error) {
            return null;
        }
    },    
    async getThemes() {
        try {
            let res = await axios.get('/sampleData/themes.json');
            return res.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    }
}

export default controller; 