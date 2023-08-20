# react-usemap-render-component

## Description

An npm package for rendering ReactJS components in a cleaner and more beautiful way, allowing elements to be passed to the components from the hook’s props.
<!-- Un paquete npm para renderizar componentes de ReactJS de una forma más bonita y limpia, permitiendo pasar elementos a los componentes desde las props del hook. -->

## Installation

To install this package, run the following command in the terminal:
<!-- Para instalar este paquete, ejecuta el siguiente comando en la terminal: -->

npm install react-usemap-render-component
  or <!-- o -->
yarn add react-usemap-render-component


## Usage

To use this package in your project, you must first import it:
<!-- Para usar este paquete en tu proyecto, primero debes importarlo: -->
Then, you can use the useMap hook to render your ReactJS components. Here is an example of how to use the hook:
 <!-- Luego, puedes usar el hook useMap para renderizar tus componentes de ReactJS. Aquí hay un ejemplo de cómo usar el hook: -->

```javascript

import React from 'react';
import useMap from 'react-usemap-render-component';

// Data
const data = [
  { id: 1, name: 'Item 1' }, 
  { id: 2, name: 'Item 2' }
]

// Component to render, receives props easily
const Component = ({ id, name, color }) => {
  return (
    <div style={{ color }}>{name}</div>
  )
} 

const MyApp = () => {
  const itemsComponent = useMap({ data, Component, color: 'red' })

  // Rendering 
  return <div>{itemsComponent}</div>
};

