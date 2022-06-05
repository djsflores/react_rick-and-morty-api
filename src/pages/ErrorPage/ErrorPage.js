import './errorPage.css'

const ErrorPage = () => {
  return ( 
    <div className="background-img">
		<div className="space"></div>
			<div className="wrapper">
				<div className="img-wrapper">
					<span>404</span>
				</div>
				<p>The page you are trying to search has been <br/> moved to another universe.</p>
				<button type="button">GET ME HOME</button>
			</div>
		</div>
  );
}

export default ErrorPage;