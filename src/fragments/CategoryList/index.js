import React from 'react';
import './style.scss';
import CategoryItem from '../../components/CategoryItem';

export default function CategoryList(props) {
    return (
        <section className="section container">
            <div className="section-title">
                <h2>Categorías</h2>
            </div>
            <div className="CategoryList">
                {props.categories.map( category => {
                    return (
                        <CategoryItem key={category.id} category={category} />
                    )
                })}
            </div>
        </section>
    )
}