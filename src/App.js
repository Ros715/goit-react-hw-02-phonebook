import React from "react";
import ContactForm from "./components/ContactForm.js";
import Filter from "./components/Filter.js";
import ContactList from "./components/ContactList.js";
import "./App.css";

const state0 = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = state0;
  }
  onAddContact = (name, number) => {
    console.log("add", name, number);
  };

  onChangeFilter = (filter) => {
    console.log("filter", filter);
    this.setState({ filter: filter }); //.filter = filter;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onAddContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.onChangeFilter} />
        <ContactList state={this.state} />
      </div>
    );
  }
}

/*
function onAddContact(name, number) {
  console.log("add", name, number);
}

function onChangeFilter(filter) {
  console.log("filter", filter);
  state.setState({ filter: filter }); //.filter = filter;
}

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={onChangeFilter} />
      <ContactList state={state} />
    </div>
  );
}
*/

export default App;
