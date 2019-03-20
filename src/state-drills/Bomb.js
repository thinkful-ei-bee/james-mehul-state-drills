import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
      }

    componentDidMount() {
     this.interval = setInterval(() => {
        this.setState({
            count: this.state.count+1
          })
      }, 1000)
    }

    render() {
        if(this.state.count < 8 && this.state.count % 2 === 0){
            return (<div>
                <p> tick</p>
            </div>
            )
        }
        else if(this.state.count < 8 && this.state.count % 2 !== 0){
            return (<div>
                <p> tock</p>
            </div>
            )
        }
        else{
            clearInterval(this.interval)
            return (<div>
                <p> BOOM!!!</p>
            </div>
            )

        }
  }
}

export default Bomb