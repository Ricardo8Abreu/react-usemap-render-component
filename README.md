# react-usemap-render-component

## Description

An npm package for rendering ReactJS components in a cleaner and more beautiful way, allowing elements to be passed to the components from the hook’s props.

## Installation

To install this package, run the following command in the terminal:


```bash

npm install react-usemap-render-component
```

or

```bash
yarn add react-usemap-render-component
```

## Community
https://t.me/ricardo8Abreu_code_lab_community

## Usage

To use this package in your project, you must first import it:

Then, you can use the useMap hook to render your ReactJS components. Here is an example of how to use the hook:

```typescript
import React from 'react';
import useMap from 'react-usemap-render-component';

// Data
interface Data { 
  id: number
  name: string 
}

interface MyComponentProps extends Data {
  color: string 
}

const data: Data[] = [
  { id: 1, name: 'Item 1' }, 
  { id: 2, name: 'Item 2' }
]

// Component to render, easily receives props
const MyComponent = ({ id, name, color }:MyComponentProps) => {
  return (
    <div style={{ color }}>{name}</div>
  )
} 

const MyApp = () => {
  const itemsComponent = useMap({ data, Component: MyComponent, color: 'red' })

  // Rendering 
  return <div>{itemsComponent}</div>
};
```

Now, here is an example of how to use the `useMap` hook with an array that is not of objects:

```typescript

// Data
type Data = string

interface MyComponentProps {
  color: string 
  children: string
}

const data: Data[] = ['Item 1', 'Item 2']

// To get the string Item is through "children"
const MyComponent = ({ children, color }:MyComponentProps) => {
  return (
    <div style={{ color }}>{children}</div>
  )
} 

const MyApp = () => {
  const itemsComponent = useMap({ data, Component: MyComponent, color: 'red' })

  // Rendering 
  return <div>{itemsComponent}</div>
};
```

## Configuration
  `config`: Optional object that can contain the following values:

  - `key`: Allows changing the prop key of the component to render. The values can be:
    by default it has "default"

  - `"default"`: If the data is an object and has an `id` property, `id` will be used otherwise it takes the index as key.

  - `"item"`: If the data is not an object, like array of strings, you can use the string element itself as a key.

  - `"object fields"`: example "id" | "name" | "slug"

  - `"index"`: index of the array


### Examples

```typescript
// When the data is an object **************************
interface Data { 
  id: number,
  name: string
}

const data: Data[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
]

// Here, if the data is an object and has an `id` property, `id` will be used as a key.
// If you specify another value in `key` that exists in the object, that value will be used as a key.
const items = useMap({ data, Component: MyComponent, color: 'red', config: { key: "id" } })

// When the data is not an object ***********************************
type Data = string
const data: Data[] = ['Item 1', 'Item 2']

// Here, if the data is not an object, you can use the element itself as a key by specifying `"item"` in `key`.
// If you do not specify `key` or use `"default"`, the index of the element in the array will be used as a key.
const items = useMap({ data, Component: MyComponent, color: 'red', config: { key: "item" } })

```

### Props that are passed by default to the component
-`"index"` value of the array, can be received in the component to render

-`"children"` child of component
