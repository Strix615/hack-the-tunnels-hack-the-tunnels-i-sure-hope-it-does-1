import { Page } from "../../components";
import { Link } from "react-router-dom";

function Error404(){
    return (
        <Page>
          <div className="Error404-page">
            <h1 className="Error404-page__title">Error404</h1>
            <p>"Error404, page not found"</p>
            <img src="https://media.giphy.com/media/3o7aCTPPm4OHfRLSH6/giphy.gif"/>
            </div>
        </Page>
      );
}

export default Error404