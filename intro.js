class RobotItems extends React.Component {

    render() {

      const topics = ["React", "JSX", "Javascript", "Programing"];
      return (
        <div>
          <h3> Topics I am interested in</h3>
          <ul>
          //topics loop/map with arrow function goes here
          { topics.map((topic) => <li> {topic} </li> ) }
          </ul>
        </div>
      );
    }
}
