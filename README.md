## Get Started - 
- ui-builder is an npm package that can generate UI components by passing a JSON data.
- ui-builder package suppports low-level components and some of the high-level components as well that can be used in react-native project.
- ui-builder supports nested components as well.

## Supported Components - 
- Button
- Text Input
- Icon
- Image
- Modal
- Header
- Theme

## Highlights- 
Input:
```
- Input component is for displaying text input.
```
Button:
```
- Button component is for displaying a button that can be made as per passed JSON data. It supports common shapes as well.
- Button component supports icon as well, you can include icon inside a button.
```
Modal:
```
- Modal component is for displaying a modal, you can place modal anywhere on the screen by passing marginTop/marginBottom.
- Modal component supports input/text/button/icon as a sub-component.
```
Theme:
```
- Light and Dark theme are supported, by applying a light theme, you will see a change in components style.
```
Header :
```
- Header component is for displaying a header on the top of the App window.
- You can display components in the left/right/center of the header. It supports text/input/icon as a sub-component.
```
Image :
```
- Image component is for displaying an image.
```
Checkbox Component :
```
- Checkboxes are used for a list of options where the user have an option to select one or more items.
- You can customize checkbox with different set of icons and can place it anywhere on the screen.
```
Icon Component :
```
- Icons are visual indicators that can be used to describe action or intent. You can move icons anywhere in the screen by passing selfAlign and margin.
- Basic props for the icon are: name, size, iconType. You can customize by passing more props in JSON structure.
```

## Steps for Installation [Android steps]-
- Install using 'npm i react-native-ui-builder'
- Components can be used by giving UiBuilder tag with a JSON data
- Run with react-native run-android to get updated changes.
- Include following in your react-native project:

```
<UiBuilder source={source} />
```
- where source containing a JSON data for building UI components.

## JSON Structure-
- JSON must contain the intended component "type".
- Customize a component by passing styles in "properties" Json. 

## A complete example
```
import UiBuilder from 'react-native-ui-builder';
import React from 'react';

const source = {
  theme: 'lightTheme',
  data: [
    {
      type: 'input',
      properties: {
          label: 'Mobile Number (10 digits)',
          placeholderTextColor: 'grey',
          style: { backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, width: "90%", left: 20, marginTop: 40 },
      }
    },
      {
        type: 'button',
        properties: {
            title: 'FACEBOOK',
            titleStyle: { color: 'blue', fontSize: 20 },
            buttonStyle: { backgroundColor: 'white', width: "90%", left: 20, borderWidth: 3, marginTop: 20 },
            icon: {
              name: 'facebook',
              color: 'blue',
              size: 20
          }
        }
    }
  ]
}

export default class MyReactApp extends React.Component {

  render() {
    return (
      <>
        <UiBuilder source={source} />
      </>
    );
  }
}

```

## Frequently Asked Questions- 

# How would i pass icon data inside a button
```
{
        type: 'button',
        properties: {
            title: 'FACEBOOK',
            titleStyle: { color: 'blue', fontSize: 20 },
            buttonStyle: { backgroundColor: 'white', width: "90%", left: 20, borderWidth: 3, marginTop: 20 },
            icon: {
              name: 'facebook',
              color: 'blue',
              size: 20
            }
        }
}

```

# How to move an icon in the rightmost corner
You can use flex-end and marginRight for moving an icon at the rightmost-corner.
```
{
      type: 'icon',
      properties: {
        name: 'battery',
        size: 20,
        iconType: 'font-awesome'
        containerStyle: {
          alignSelf: 'flex-end',
          marginRight: 5,
        },
      },
    },
```

# How to show multiple components at the center of a header
```
{
  centerComponent: {
    childrens: [
      {
        type: 'icon',
        properties: {
          name: 'plus-circle',
          color: 'white',
          size: 60,
        },
      },
      {
        type: 'text',
        properties: {
          title: 'User',
          style: {
            color: 'white',
            fontWeight: 'bold',
          },
        },
      },
    ]
  }
}
```

## How to change a color of a title on click of a checkbox
```
{
      type: 'checkbox',
      properties: {
        title: 'Ui Builder',
        titleStyle: {
          uncheckedColor: 'black',
          checkedColor: 'pink',
        },
        checkboxStyle: {
          color: 'red',
          size: 25,
        }
      }
}
```

## Note: For more information, check onto the attached documentation.