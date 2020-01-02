class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  };
  // change code below this line
  const Camper = (props) => {
    return(
      <div>
        <h2>I love to camp!</h2>
        <h4>says</h4>
        <p>{props.name}</p>
      </div>
    )
  }
  
  Camper.defaultProps = {name:"CamperBot"};
  Camper.propTypes = {name:PropTypes.string.isRequired};