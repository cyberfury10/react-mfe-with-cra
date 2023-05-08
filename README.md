
This repo showcases the micro frontend setup with CRA and React application with custom webpack using module federation plugin

- **cra-with-craco:** This application is build using the create-react-app

- **react-app-with-webpack:** This is a react application built with custom webpack

**Instructions to run:** 
- clone the repo
- navigate to **cra-with-craco** run `npm install` and `npm start`
- navigate to **react-app-with-webpack** run `npm install` and `npm start`

**Micro frontend Capability:**

- As, **cra-with-craco** is built with ***create-react-app*** we do not have direct access to the underlying webpack

- ***create-react-app***'s webpack config can be overridden with external libraries, such as ***craco*** or ***react-rewired***

- We have used ***craco*** here, it allows us to override CRA's webpack configuration and introduce the Module Federation plugin without breaking the integrity of ***create-react-app*** features. ***craco***  npm link - https://www.npmjs.com/package/@craco/craco

- For **react-app-with-webpack** no external libraries is needed as it built using the custom webpack and module federation plugin can be directly added

  
  
**cra-with-craco: (module federation plugin)**  

```
      new ModuleFederationPlugin({
          name: "cra",
          filename: "cra.js",
          remotes: {
            'react_webpack_app': "react_webpack_app@http://localhost:4001/react-webpack-app.js",
          },
          exposes: {
            "./component": "./src/expose/component.js",
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
              eager: true,
            },
          },
        }),
```  

**react-app-with-webpack: (module federation plugin)** 

```
      new ModuleFederationPlugin({
        name: 'react_webpack_app',
        filename: 'react-webpack-app.js',
        remotes: {
          cra: "cra@http://localhost:3000/cra.js",
        },
        exposes: {
          "./component": "./src/expose/component.js",
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
            eager: true,
          },
        },
      }),
```
Here are the key things to note from the config:

**name:** Name of the application
**filename:** File name of the exposed bundle
**exposes:** The actual components that are exposed from the application
**remotes:** Remote references in the format <name>@[host]/<filename>.
**shared:** The shared dependencies between the applications, including the React and ReactDOM libraries.
[here is the blog post explaining the above detailly](https://dev.to/bitovi/how-to-build-a-micro-frontend-with-webpacks-module-federation-plugin-n41) 

**Styles:**

During the micro-frontend component sharing it's important to keep in note that styles may not be included by default. This is because the exposed components exist in their own bundle. To ensure that the styles are also included, we should import the relevant style files  `index.scss`  in shared component file

**src/expose/component.js**
```
import Button from './sample-components/button';
import DropDown from './sample-components/drop-down';
import List from './sample-components/list';
import Table from './sample-components/table';
import TextBox from './sample-components/textbox';

// Note here, global style file is imported
import '../index.css'

export {
    Button,
    DropDown,
    List,
    Table,
    TextBox
}
```

This will ensure that the styles are properly applied when the components are used in the other application.

**Bidirectional component sharing:**
- Inorder to demonstrate the capabilities of  module federation plugin , Made the **react-app-with-webpack** and **cra-with-craco**  share components birectionally through  **module federation plugin**

**cra-with-craco: (screenshot)**
<img width="1792" alt="Screenshot 2023-05-08 at 15 13 28" src="https://user-images.githubusercontent.com/45261873/236792013-b8f55d87-b115-4270-9ecb-572355e11b7c.png">

**react-app-with-webpack: (screenshot)**
<img width="1791" alt="Screenshot 2023-05-08 at 15 13 17" src="https://user-images.githubusercontent.com/45261873/236792033-ca9b253b-06b8-4817-87db-943ebb985d52.png">

**Redux:**
In the module federated micro frontend, exposed bundle has to be configured with its own store using store providers

*Note - sample application doesn't has redux implementations*

```
import React from 'react';
import store from 'store/store';
import { Provider } from 'react-redux';

const StoreWrapper = (props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default FileUpload;
```
