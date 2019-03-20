import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8, 
      }
    constructor(props) {
        super(props)
        this.state = {
            chamber:null,
            spinningTheChamber:false
           
        }
      }

      handleTriggerClick = () => {
        this.setState({
            spinningTheChamber: true
          })
        let timeout = setTimeout(function(){
            this.setState({
            spinningTheChamber: false,
            chamber:Math.ceil(Math.random() * 8)
              })
            
        }.bind(this), 2000);
      }

      componentWillUnmount() {
        clearInterval(this.timeout)
      }

    render() {
         this.state.bulletInChamber = this.props.bulletInChamber

        if(this.state.chamber === null)
        {
            return (<div>
                <button onClick={() => this.handleTriggerClick()}>
             Pull the trigger!
           </button>
          </div>
          )
        }
        else if(this.state.spinningTheChamber === true){
           return (
           <div><p>spinning the chamber and pulling the trigger! .... </p></div>
           )
        }
        else if(this.state.chamber === this.state.bulletInChamber)
        {
            return (
                <div><p>Bang</p></div>

            )
        }
        else{
            return (
                <div><p>You're safe! Bullet in {this.state.bulletInChamber} and you pulled {this.state.chamber}</p>
                 <button onClick={() => this.handleTriggerClick()}>
                Pull the trigger!
              </button>
                </div>
               

            )
        }
    
  }
}

export default RouletteGun