import Form from 'react';
const React = require('react');
const Default = require('./layout/default');

function New() {
    return (
        <Default>
            <div>
                <h2>New Recipe</h2>
                <Form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="name" />

                    <label htmlFor="name">Image:</label>
                    <input type="text" name="image" id="image" />
                    
                    <label htmlFor="">Ingredients:</label>
                    <input type="text" placeholder="name"/>
                    <input type="checkbox" name="name" id="measurement" />

                    <select>
                        <label htmlFor="category">Category:</label>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="dessert">Dessert</option>
                    </select>
                </Form>
            </div>
        </Default>    
    )
}

export default New;