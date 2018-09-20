import { React, observer, observable, action } from '../vendor';
import { Button } from 'react-bootstrap';
import User from '../model/user';


@observer
class ProfileLink extends React.Component {

  @action.bound onVisit(e) {
    e.preventDefault()
    Turbolinks.visit('/profile')
  }

  render() {
    return <Button onClick={this.onVisit} href="/profile">My Profile</Button>
  }
}

@observer
class LoggedInNavbar extends React.Component {

  @observable crsf;

  componentDidMount() {
    this.csrf = document.querySelector('[name=csrf-token]').content
  }

  render() {
    return (
      <React.Fragment>
        <div className="align-self-center mx-1">Welcome, {User.full_name}</div>
        <ProfileLink />
        <form id="logout-form" action={`${User.accounts_url}/signout`}>
          <input type="hidden" name="_method" value="delete" />
          <Button type="submit" className="ml-1" variant="primary">Logout</Button>
        </form>
      </React.Fragment>
    );
  }

}


@observer
export default class Navbar extends React.Component {

  render() {
    if (User.isCheckPending) { return null; }
    if (User.isLoggedIn) {
      return <LoggedInNavbar />
    }
    return (
      <React.Fragment>
        <Button href={User.sign_in_url} variant="primary">Login</Button>
      </React.Fragment>
    );
  }

}
