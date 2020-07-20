import React from 'react';
import AppHeader from '../app-header'
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

import styled from 'styled-components';
import nextId from "react-id-generator";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: nextId() },
                {label: 'That is so good', important: false, id: nextId() },
                {label: 'I need a break...', important: false, id: nextId() },
                123123, '12312', {}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)

    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
        console.log(newItem.id)
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={ this.deleteItem} />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
    
}
