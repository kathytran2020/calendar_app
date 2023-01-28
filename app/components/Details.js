const exports = require("webpack");

class Detail extends React.PureComponent {
    render() {
      const { selectedDate } = this.props;
      const remaind = differenceInDays(lastDayOfYear(selectedDate), selectedDate);
      const year = new Date(selectedDate).getFullYear();
      return (
        <section className="detail">
          <h3 className="date-string">
            {format(this.props.selectedDate, "MMM，Do")}
          </h3>
          <p className="remaind">
            {remaind} days from the end of {year}
          </p>
        </section>
      );
    }
  }

  export default Detail