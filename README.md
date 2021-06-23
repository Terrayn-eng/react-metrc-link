# react-metrc-link

## Prepublish Install 

Clone the package locally and install packages

``` npm install ```

Use storybook to run 
``` npm run storybook```

Use MetrcLink.stories.tsx file to dynamically add props

## Entry point MetrcLink.tsx

Required prop is states. Which is an array of state initial you have provided vendor keys for in the backend package.

example:
states:['CA','CO']

Optional props are for styling the button. You cannot style the modal content. 

Label is to change button text.

The Raleway font is provided in the assets folder and linked in the metrc-link.css. 

The rest are labeled after their typical css names.

example:
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
margin: '0px'