var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.Location.value;
    if(location.length>0){
      this.refs.Location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
          <form onSubmit={this.onFormSubmit}>
              <input type="search" ref="Location" placeholder='Input city name'/>
              <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
