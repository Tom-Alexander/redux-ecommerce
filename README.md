# redux-ecommerce

## Example

```
  import {redux, provideContext} from 'react-ecommerce';
  import React, {Component} from 'react';

  @provideContext('products', 'categories')
  export default App extends Component {
    render() {
      return (
        const products = this.props.products.data.items;
          <ul>
            {products.map((product) => <li>{product.title}</li>)}
          </ul>
      );
    }
  }
```

## Dependencies

You will need to satisfy the following peer dependencies:

```
  "react": "*",
  "redux": "*",
  "redux-actions": "*",
  "redux-promise": "*"
```
