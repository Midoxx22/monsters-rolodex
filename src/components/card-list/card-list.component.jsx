import React from 'react';
import './cardlist-list.styles.css'
import {CardComponent} from '../card-component/card.component';

export const CardList = props => (
<div className="card-list">
        {
        props.monsters.map(monster => (<CardComponent id={monster.id} monster={monster} />))
        }
    </div>
);