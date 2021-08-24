import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

function fits(name, filter) {
  return name.toLowerCase().includes(filter.toLowerCase());
}

function ContactList({ state }) {
  return (
    <ul>
      {state.contacts
        .filter((contact) => fits(contact.name, state.filter))
        .map((contact) => {
          return (
            <li>
              {contact.name} {contact.number}
            </li>
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {};

export default ContactList;
