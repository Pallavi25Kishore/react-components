/*//creating and rendering a React component
const GroceryList = () => <ul><li>Cucumbers</li><li>Kale</li></ul>;
ReactDOM.render(<GroceryList />, document.getElementById('app'));

//creating and rendering nested React components
const Cucumbers = () => <li>Cucumbers</li>;
const Kale = () => <li>Kale</li>;
const GroceryList = () => (<ul>
  <Cucumbers />
  <Kale />
</ul>);
ReactDOM.render(<GroceryList />, document.getElementById('app'));*/

//component properties aka props
const GroceryListItem = (props) => (
  <ul>
<li>{props.item[0]}</li>
<li>{props.item[1]}</li>
</ul>
);
const GroceryList = () => (<div>
  <GroceryListItem item={['Cucumbers', 'Kale']} />
</div>);
ReactDOM.render(<GroceryList />, document.getElementById('app'));





