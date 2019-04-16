import React from 'react'
import ReactDom from 'react-dom'
import styles from './example.sass'

class App extends React.Component {
    render() {
        return (
        <div className={styles.hello}>
            <h1>Hello World</h1>
        </div>)
    }
}

ReactDom.render(<App />, document.getElementById('root'))
