## Get Started - 
- ui-builder is an npm package that can generate UI components by passing a JSON data.
- ui-builder package suppports low-level components and some of the high-level components as well that can be used in react-native project.
- ui-builder supports nested components as well.

## Supported Components - 
- Button
- Text Input
- Icon
- Checkbox
- Image
- Modal
- Header
- Checkbox
- Themes
- Divider
- Card
- Carousel
- Navigation
- Video

## Highlights- 

Button:
```
- Button Component supports some common shapes with default dimensions such as circle, rectangle, square.
- Button Component supports icons inside a button.
```
Modal:
```
- You can place modal anywhere on the screen by passing marginTop/marginBottom.
- Modal component supports input/text/button/icon as a sub-component.
```
Theme:
```
- Ui-builder have "Light and Dark" theme supported, with a default behavior.
```
Header :
```
- You can customize the header by giving sub-components in the left/right/center of an header.
```
Checkbox :
```
- You can customize checkbox with a different set of icons and can place it anywhere on the screen.
```
Icon :
```
- You can move icons anywhere in the screen by passing selfAlign and margin.
- Basic props for the icon are: name, size, iconType. You can customize the icon by passing more props in JSON structure.
```
Card:
```
Cards supports a wide variety of low-level components including images, text, button and checkbox.
```
Carousel:
```
- You can customize carousel by including cards and by supporting pagination.
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
- JSON must contain the intended component "type" and "screenName".
- Customize a component by passing styles in "properties" Json. 

## A complete example
```
import UiBuilder from 'react-native-ui-builder';
import React from 'react';

const source = {
  theme: 'lightTheme',
  screenName: 'Login Facebook'
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

# How would i give shape to a button
```
{
        type: 'button',
        properties: {
            title: 'FACEBOOK',
            showCircle: true,
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
[check here](https://docs.google.com/document/d/1Mjs-Dz0n9lGIHL8POHZEfoc6rXsOI5EsQcOazOcGj4M/edit?usp=sharing)
