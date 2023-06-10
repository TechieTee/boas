import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{margin:'200px 600px', textAlign:'center'}}>
      <h1>Oops!</h1>
      <p>you missed your way</p>
      <p>Sorry, Please go back <Link to='https://boas.netlify.app/'>home.</Link></p>
     
    </div>
  );
}