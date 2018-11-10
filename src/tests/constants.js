const welcomeComponent = `export const Welcome = (props) => {
  return (
    <div>
      <div>
        <p>dawwadwad</p>
        <div>
          <span>awdwad</span>
        </div>
      </div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
};

export default Welcome;
`;

const customComponent = `export const Welcome = (props) => {
  return (
    <div>
      <div>
        <p>dawwadwad</p>
        <TestComponent>
          <span>awdwad</span>
        </TestComponent>
      </div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
};

export default Welcome;
`;

module.exports = {
  welcomeComponent,
  customComponent,
};
