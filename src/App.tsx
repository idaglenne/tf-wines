import React from 'react'
import './App.css'
import { getWines } from './services/wine.service'

class App extends React.Component<{}, { wines: any[] }> {
  constructor (props: any) {
    super(props)
    this.state = { wines: [] }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getWines().then(w => this.setState({ wines: w }))
  }

  render (): JSX.Element {
    return (
      <div className="App">
        <ul>
          {this.state.wines.map((w: any) => (
            <li key="{w.productNameBold}">{w.productNameBold}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
