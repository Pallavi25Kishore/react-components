//creating and rendering a React component
/*const GroceryList = () => <ul><li>Cucumbers</li><li>Kale</li></ul>;
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
<li>{props.item}</li>
);
const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);
ReactDOM.render(<GroceryList items={['kale', 'cucumbers']}/>, document.getElementById('app'));








