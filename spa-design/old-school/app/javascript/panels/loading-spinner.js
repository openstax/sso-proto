import { React, observer, observable, action } from '../vendor';
import Loading from '../components/loading';

@observer
export default class LoadingSpinner extends React.Component {

  @observable isVisible = false;

  componentDidMount() {
    document.addEventListener("turbolinks:before-visit", this.show)
    document.addEventListener("turbolinks:render", this.hide)
  }

  @action.bound show() { this.isVisible = true; }
  @action.bound hide() { this.isVisible = false; }

  render() {
    if (this.isVisible) { return <Loading />; }
    return null;
  }
}
