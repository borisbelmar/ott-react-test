import React from 'react';
import './style.scss';
import CategoryCard from '../../components/CategoryCard';

export default function CategoryList(props) {
    return (
        <div className="CategoryList">
            {props.categories.map( category => {
                return (
                    <CategoryCard key={category.id} category={category} />
                )
            })}
        </div>
    )
}