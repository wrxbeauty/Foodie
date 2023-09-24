const React = require('react');
const Default = require('./layout/default')


function Edit({recipe}) {
    return (
        <Default>
            <h2>Making Changes</h2>
            <form>
                <label for="name"></label>
                <input type="text"
                    name="name"
                    id="name"
                    required
                    defaultValue={recipe.name} />
                
                <label for="image">Image</label>
                <input type="tex"
                    name="image"
                    id="image"
                    defaultValue={recipe.name} />
                
                <input type="submit"></input>
            </form>
        </Default>
    )
}

export default Edit;
