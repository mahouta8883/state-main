
import './App.css';
import me from './me.jpg'
import React from'react'


    class App extends React.Component {
      state = {
        Person: {
          fullName: "jacem mestiri",
          bio: "student",
          imgSrc: me,
          profession: "fullstack developer"
        },
        show: true
      };
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
    
      handleShowPerson = () => {
        this.setState({
          ...this.state,
          show: !this.state.show
        });
      };
    const [state, setstate] = useState(initialState)
    
      render() {
        return (
          <>
            {this.state.show && (
              <>
                <h1>{this.state.Person.fullName}</h1>
                <h1>{this.state.Person.bio}</h1>
                <img src={this.state.Person.imgSrc} alt="jacem"></img>
                <h1>{this.state.Person.profession}</h1>
                <br></br>
              </>
            )}
    
            <button onClick={this.handleShowPerson}>click here</button>
          </>
  );
    }
    }
export default App ;
