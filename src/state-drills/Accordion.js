import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [] 
      }
   
    state = {
      currentSection: null,
    }

      renderButtons () {
         return this.props.sections.map((section, index) => (
          <li><button key={index} onClick={() => this.handleButtonClick(index)}>
            {section.title}
          </button>
          <p>{this.renderContent(index)}</p>
          </li>
        ))
      }

      handleButtonClick(index) {
          console.log("here");
        this.setState({ currentSection: index })
      }

      renderContent(index) {
       if(index === this.state.currentSection){
        const currentTab = this.props.sections[this.state.currentSection]
        return (
          <p className = "content">
            {currentTab.content}
          </p>
        )
       }
       else{
           return
       }
      }

    render() {
            return (
               <ul>
                 {!!this.props.sections.length && this.renderButtons()}
               </ul>
            )
  }
}

export default Accordion