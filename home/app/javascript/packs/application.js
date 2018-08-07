import preact, { Component, render, h } from 'preact';
import whenReady from 'when-dom-ready';

const DOMAIN = 'rdls.org';

const SERVERS = {
  RailsApi: `https://rails-api.${DOMAIN}/api/status`,
  DjangoApi: `https://django-api.${DOMAIN}/accounts/auth/`,
  FourLevelSubDomainApi: `https://4thlevel.rails-api.${DOMAIN}/api/status`,
}

const SERVER_NAMES = Object.keys(SERVERS);


const Logout = ({ path }) => (
  <form id="logout-form" action={path} method="post">
    <input
      type="hidden"
      name="authenticity_token"
      value={document.querySelector('meta[name="csrf-token"]').content}
    />
    <input type="hidden" name="_method" value="delete" />
    <input type="submit" value="Logout" />
  </form>
)


const UserStatus = ({ user_uuid, login_path, logout_path }) => (
  <div class="flex">
    {user_uuid && <h4>Logged in as {user_uuid}</h4>}
    {user_uuid ? <Logout path={logout_path} /> : <a class="button" href={login_path}>Login</a>}
  </div>
)

const FetchPending = ({ serverName, error }) => (
  <tr>
    <td>{serverName}</td>
    <td colspan={2} class="loading-bar" />
  </tr>
);

const ServerError = ({ serverName, error }) => (
  <tr>
    <td>{serverName}</td>
    <td>⚠</td>
    <td>{error}</td>
  </tr>
);

const ServerStatus = ({ status: { serverName, user_uuid, error, pending } }) => {
  if (pending) return <FetchPending serverName={serverName} />;
  if (error) return <ServerError {...{serverName, error}} />;
  return (
    <tr>
      <td>{serverName}</td>
      <td>{user_uuid ? '👍' : '👎'}</td>
      <td>{user_uuid}</td>
    </tr>
  );
}

export default class App extends Component {

  state = {
    user_uuid: this.props.user_uuid, serverStatus: [],
  };

  updateServerStatus = () => {
    this.setState({
      serverStatus: SERVER_NAMES.map(serverName => ({ serverName, pending: true }))
    });
    Promise.all(SERVER_NAMES.map(serverName => (
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
    setInterval(this.updateServerStatus, 1000 * 30); // update every 30 seconds
  }

  render({ login_path, logout_path }, { serverStatus, user_uuid  }) {
    console.table(serverStatus)
    return (
      <div>
        <UserStatus {...{login_path, logout_path, user_uuid} } />
        <hr />
        <table>
          <thead>
            <tr><th>Server</th><th>Logged in?</th><th>User UUID</th></tr>
          </thead>
          <tbody>
            {serverStatus.map(ss => <ServerStatus status={ss} />)}
          </tbody>
        </table>
        <button onClick={this.updateServerStatus}>Refresh</button>
      </div>
    );
  }
}

whenReady(() => {
  const contentDiv = document.getElementById('content')
  const bootstrap = JSON.parse(contentDiv.querySelector('script#bootstrap').innerHTML)
  render(<App {...bootstrap} />, contentDiv)
})
