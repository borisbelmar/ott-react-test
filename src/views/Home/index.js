import React from 'react';
import controller from './controller';
import DefaultLayout from '../../layouts/DefaultLayout';
import CategoryList from '../../fragments/CategoryList';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    async componentDidMount() {
        this.setState({categories: await controller.getCategories()});
    }

    render() {
        return(
            <DefaultLayout>
                <div className="Home mediastream-theme">
                    <CategoryList categories={this.state.categories}/>
                </div>
            </DefaultLayout>
        ) 
    }
}