const imgURL =
"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/about.gif";

export default function AboutPage(props) {
    const {match, location, history} = props
    console.log({match, location, history})
return (
  <div>
    <h1>About</h1>
    <img src={imgURL} alt="the office gif" className="page-img" />
  </div>
);
}