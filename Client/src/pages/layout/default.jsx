const React = require('react');

function Default(html) {
    return (
        <html>
            <head>
                <title>{html.title || 'Default'}</title>
                <link rel="stylesheet" href="/main.css" />
            </head>
            <body>
                <div className="main">
                    <header>
                        <h1><a className='title' href="/recipes">Foodie</a></h1>
                    </header>
                </div>
            </body>
        </html>
    )
}

module.exports = Default;