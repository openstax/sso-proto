import preact, { Component, render, h } from 'preact';
import whenReady from 'when-dom-ready';


const UserStatus = ({ user_uuid, login_path, logout_path }) => (
  <div>
    {user_uuid && <h4>Logged in as {user_uuid}</h4>}
    <a class="button" href={user_uuid ? logout_path : login_path}>
      {user_uuid ? "Logout" : "Login"}
    </a>
  </div>
)


const DOMAIN = 'rdls.org';

const SERVERS = {
  RailsApi: `https://rails-api.${DOMAIN}/api/status`,
  LocalServer: `http://localhost:2899/api/status`,
}


const ServerError = ({ serverName, error }) => (
  <tr>
    <td>{serverName}</td>
    <td class="error">⚠</td>
    <td>{error}</td>
  </tr>
);

const ServerStatus = ({ serverName, user_uuid, logged_in }) => {
  return (
    <tr>
      <td>{serverName}</td>
      <td class={logged_in ? 'success' : 'warning'}>{logged_in ? '👍' : '👎'}</td>
      <td>{user_uuid}</td>
    </tr>
  );
}

export default class App extends Component {

  state = {
    user_uuid: this.props.user_uuid, serverStatus: [],
  };

  updateServerStatus() {
    Promise.all(Object.keys(SERVERS).map(serverName => (
      fetch(SERVERS[serverName], {
        credentials: 'include',
      })
        .then(reply => reply.json())
        .then(json => ({ serverName, ...json }))
        .catch(err => ({ serverName, error: err.message }))
    ))).then(status => {
      this.setState({ serverStatus: status })
    })
  }

  componentDidMount() {
    this.updateServerStatus();
  }

  render({ login_path, logout_path }, { serverStatus, user_uuid  }) {
    console.table(serverStatus)
    return (
      <div>
        <UserStatus {...{login_path, logout_path, user_uuid} } />
        <table>
          {serverStatus.map(ss => ss.error ? <ServerError {...ss} /> : <ServerStatus {...ss} />)}
        </table>
      </div>
    );
  }
}

whenReady(() => {
  const contentDiv = document.getElementById('content')
  const bootstrap = JSON.parse(contentDiv.querySelector('script#bootstrap').innerHTML)
  render(<App {...bootstrap} />, contentDiv)
})
