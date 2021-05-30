import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { add_Reminder, remove_Reminder, clear_Reminder } from '../Actions';
import logo from './reminder.png';

class App extends Component {

  state = {
    text: '',
    date: new Date()
  }

  render_Reminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div>{reminder.text}</div>
                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                <div className="closeIcon btn btn-danger"
                  onClick={() => this.props.remove_Reminder(reminder.id)}>x
                  </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="app">
        <img src={logo} />
        <div className="reminder-title">
          <h2>What Shold U Do ?</h2>
        </div>

        <input
          className="form-control"
          type="text"
          placeholder="Enter What U Think ...?"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />

        <DatePicker
          className="form-control"
          placeholderText="Enter Date"
          value={this.state.date}
          selected={this.state.date}
          onChange={(date) => { this.setState({ date }) }}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />

        {this.render_Reminders()}

        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            this.props.add_Reminder(this.state.text, this.state.date)
            this.setState({ text: '', date: '' })
          }}
        >
          Add Reminder
        </button>

        <button
          className="clearReminder btn btn-danger btn-block"
          onClick={() => this.props.clear_Reminder()}
        >
          Clear Reminders
        </button>

      </div>
    )
  }
}

export default connect(
  state => { return { reminders: state } }, { add_Reminder, remove_Reminder, clear_Reminder }
)(App);