# Configure your React Project to use Reactstrap

```
yarn add bootstrap@4.0.0
yarn add reactstrap@5.0.0
yarn add react-popper@0.9.2
```

open index.js file in the src folder and add the following line into the imports:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

importing Bootstrap first and then the index.css later.
So if we add our own customization CSS classes,
that can override the default Bootstrap classes if required.
So that's the reason why we import Bootstrap CSS first and then index.css later.

# State

Each component can store its own local information in its "state"

- Private and fully controlled by the component
- Can be passed as props to children
- Never directly modify state

# Props

JSX attributes are passed into a component as a single object

- Available in the component as "props"
- Can pass in multiple attributes
- Cannot modify props within the component

# Typescript

leading pipe in typescript
