import { React, PropTypes, observer, observable, action } from '../vendor';
import { Modal, Button } from 'react-bootstrap';
import $ from 'domtastic';
import User from '../model/user';

@observer
export default class Highligting extends React.Component {

  static propTypes = {
    highlightingSelector: PropTypes.string.isRequired,
  }

  @observable showingLogin = false;

  componentDidMount() {
    document.addEventListener('mouseup', this.onSelection);
  }

  // n.b. not @computed since that will cache and we don't want that since
  // the root element is dynamic and outside our control
  get root() {
    return document.querySelector(this.props.highlightingSelector);
  }

  @action.bound onSelection(ev) {
    const selection = window.getSelection()
    // "collapsed" means it's just a click, no text is selected
    if (selection.isCollapsed) {
      this.showingLogin = false;
      return
    }

    const inBook = $.contains(this.root, ev.target)
    if (inBook && !User.isLoggedIn) {
      this.showingLogin = true;
    }

  }

  @action.bound handleHide() {
    this.showingLogin = false;
  }

  render() {
    if (!this.showingLogin) { return null; }
    return (
      <Modal
        show={true}
        onHide={this.handleHide}
        centered
        backdrop={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login to highlight!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            With an OpenStax account you can highligt and take notes
            on this book!
          </p>
          <p>
            Please signup or login to a account
          </p>

        </Modal.Body>

        <Modal.Footer className="justify-content-around">
          <Button href={User.sign_in_url} variant="secondary">Login</Button>
          <Button href={User.sign_up_url} variant="secondary">Sign up</Button>
        </Modal.Footer>
      </Modal>
    )

  }
}
