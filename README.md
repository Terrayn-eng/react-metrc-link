# react-metrc-link

## Prepublish Install 

Clone the package locally and install packages

``` npm install ```

Use storybook to run 
``` npm run storybook```

Use MetrcLink.stories.tsx file to dynamically add props

## Entry point MetrcLink.tsx

### Required props are callback, states, and backendUrl. 

Callback is a function the will take in the user key and state from the npm package and send it back to your app.

example:
const handleCallback = (resp) =>{
  console.log(resp.state, resp.user_key)
}

States is an array of state initials you have provided vendor keys for in the backend.

example:
states:['CA','CO']

BackendUrl is a string of the backend you want to send the user_key and state to.

example:
backendUrl:'http://127.0.0.1:5000/user_key'

### Optional props are for styling the button. You cannot style the modal content. 

Label is to change button text.

The Raleway font is provided in the assets folder and linked in the metrc-link.css. 

The rest are labeled after their typical css names.

example of all options:
callback: handleCallback,
states:['CO','OR','CA','AK'],
backendUrl:'http://127.0.0.1:5000/user_key',
label: 'Link with Metrc',
backgroundColor: '#68c86b',
color: '#fff',
fontFamily:'Raleway',
fontWeight:400,
border:'none',
borderRadius:'3em',
lineHeight:1,
letterSpacing:'0.2px',
fontSize: '16px',
padding: '12px 74px',
margin: '0px',