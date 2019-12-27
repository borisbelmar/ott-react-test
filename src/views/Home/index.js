import React from 'react';
import { getCategories, getSeries, getThemes } from './controller';
import { ThemeContext } from '../../context/ThemeContext';

import DefaultLayout from '../../layouts/DefaultLayout';
import CategoryList from '../../fragments/CategoryList';
import MediaList from '../../fragments/MediaList';
import ThemePicker from '../../fragments/ThemePicker';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            series: [],
            themes: []
        }
    }

    async componentDidMount() {
        this.setState({
            categories: await getCategories(),
            series: await getSeries(),
            themes: await getThemes()
        });
    }

    render() {
        return(
            <DefaultLayout>
                <div className="Home">
                    <div className="container">
                        <ThemePicker 
                            selected={this.context.selectedTheme} 
                            themes={this.state.themes} 
                            receivedData={this.context.onReceivedData} 
                        />
                    </div>
                    <MediaList 
                        title="Recomendado" 
                        medias={this.state.series} 
                        noPlay
                        variation="minimal"
                    />
                    <MediaList 
                        title="Contenidos interesantes" 
                        medias={this.state.series}
                    />
                    <CategoryList 
                        categories={this.state.categories}
                    />
                </div>
            </DefaultLayout>
        ) 
    }
}

Home.contextType = ThemeContext;

export default Home;