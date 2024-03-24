import React, { Key } from "react"

import { UseMap } from "./types/types"

import parseTypeItem from "./utils/parseTypeItem"
import handleKeyObject from "./utils/handleKeyObject"

const useMap: UseMap = ({ data, Component, config, ...props }) => {
  const { key = "default" } = { ...config }

  return (
    !data
      ? null
      : data.map((item, index) => {
        let relativeKey: Key = index

        // if item is an object ***********************************
        if (typeof item === "object") {
          const { newKey, newItem } = parseTypeItem({ item, key }).object

          relativeKey = handleKeyObject({ item: newItem, key: newKey, index })

          return (
            <Component
              key={relativeKey}
              index={index}

              {...item}
              {...props}
            />
          )
        }

        // if item is not an object ***********************************
        const { newKey, newItem } = parseTypeItem({ item, key }).noObject

        if (newKey === "item") {
          relativeKey = newItem
        }

        return (
          <Component
            key={relativeKey}
            index={index}

            {...props}
          >
            {item}
          </Component>
        )
      })

  )
}

export default useMap
