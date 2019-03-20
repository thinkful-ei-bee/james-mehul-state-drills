import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
       
      }
   
    state = {
      currentSection: null,
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

      renderButtons () {
         return (
          this.props.sections.map((section, index) => (
          <li><button key={index}>
            {section.name}
          </button>
          </li>
        )) 
      }

    render() {


            return (
               <ul>
                 {buttons}
               </ul>
               

            )
        
  }
}

export default Accordion