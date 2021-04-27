import Card from './Card';

function CardList() {
return (
  <div className="row">
    <div className="col-sm-4">
      <Card
        featureImage="https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/form-native-controls.png?sfvrsn=41ae690_0"
        title="How To Make Interactive ReactJS Form"
        description="Let's write some interactive form with React"
        link="https://sebhastian.com/interactive-react-form"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
        title="Babelify your JavaScript code"
        description="Babel make JavaScript code browser-compatible."
        link="https://sebhastian.com/babel-guide"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png"
        title="JavaScript Basics Before You Learn React"
        description="Learn the prerequisites of learning React fast"
        link="https://sebhastian.com/js-before-react"
      />
    </div>
  </div>
);
}

export default CardList; 