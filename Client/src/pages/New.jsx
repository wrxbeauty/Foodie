import Form from 'react'

function New() {
    return (
        <div>
            New Recipe
            <Form>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="name" />
                
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
    )
}

export default New;