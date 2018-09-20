import { observable, computed, action } from 'mobx';

export class User {

  @observable id;
  @observable last_name = 'bob';
  @observable school_type;
  @observable self_reported_role;
  @observable self_reported_school;
  @observable support_identifier;
  @observable uuid = '';
  @observable faculty_status;
  @observable first_name;
  @observable full_name;

  @observable isCheckPending = true;

  get accounts_url(){ return 'https://accounts.rdls.org'; }
  get sign_in_url() {
    return `${this.accounts_url}/signin?r=${window.location.href}`;
  }
  get sign_up_url() {
    return `${this.accounts_url}/signup?r=${window.location.href}`;
  }

  @computed get isLoggedIn() {
    return Boolean(this.uuid);
  }

  @action logout() {
    this.uuid = this.full_name = null;
  }



  @action update() {
    this.isCheckPending = true
    fetch(
      'https://accounts.rdls.org/api/user', {
        credentials: 'include',
        mode: 'cors',
      }
    )
      .then(resp => resp.json())
      .then(action(json => {
        Object.assign(this, json)
        this.isCheckPending = false
      }))
  }

  static initialize() {
    document.addEventListener("turbolinks:load", parseCookies)
    parseCookies()
  }

}

const currentUser = new User();

const parseCookies = () => {
  const foundCookie = document.cookie.match('(^|;)\\s*ox-prod\\s*=\\s*([^;]+)');
  if (!currentUser.isLoggedIn && foundCookie) {
    // fetch user info
    currentUser.update();
  } else if (currentUser.isLoggedIn && !foundCookie) {
    currentUser.logout();
  } else if (!foundCookie) {
    currentUser.isCheckPending = false;
  }
}

export default currentUser;
