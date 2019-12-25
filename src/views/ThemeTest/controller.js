import axios from 'axios';

export async function getSeries() {
    try {
        let res = await axios.get('/sampleData/series.json');
        return res.data;
    } catch(error) {
        return null;
    }
}

export async function getThemes() {
    try {
        let res = await axios.get('/sampleData/themes.json');
        return res.data;
    } catch(err) {
        console.log(err);
        return null;
    }
}