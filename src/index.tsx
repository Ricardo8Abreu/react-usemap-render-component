import React, { FC, Key } from "react"

type UseMapProps<Props> = FC<Props>["arguments"]

type NewProps = "children" | "index"
type UseMapTypeData = object | string | number
type UseMapPropsPropagation<Props, Data> = Omit<Props, keyof Data | NewProps>

export type Component<Props> = FC<Props>

type KeyConfig<Data> = Data extends object ? KeyConfigObject<Data> : "item"
type KeyConfigObject<Data> = "index" | "default" | keyof Data

type UseMapParams<Data, Props> = {
  data: Data[]
  Component: Component<Props> & Component<UseMapProps<Props>>
  config?: {
    key?: KeyConfig<Data>
  },
} & UseMapPropsPropagation<Props, Data>

type UseMap = <Data extends UseMapTypeData, Props>(props: UseMapParams<Data, Props>) => (JSX.Element | undefined)[] | null

type HandleKeyObject = <Data extends object>({ item, key, index }: { item: Data, key: KeyConfig<object>, index: number }) => string | number

const handleKeyObject: HandleKeyObject = ({ item, key, index }) => {
  if (!item) return index

  if (key === "index") {
    return index
  }

  if (key === "default" && "id" in item) {
    return `${item["id"]}`
  }

  if (key !== "default" && key in item) {
    return `${item[key]}`

  }

  return index

}

const useMap: UseMap = ({ data, Component, config, ...props }) => {

  const { key = "default" } = { ...config }

  return (
    !data
      ? null
      : data.map((item, index) => {
        let relativeKey: Key = index

        // if item is not an object ***********************************
        if (typeof item !== "object") {

          if (key === "item") {
            relativeKey = item
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
        }

        // if item is an object ***********************************
        if (key != "item") {

          relativeKey = handleKeyObject({ item, key, index })

        }
        return (
          <Component
            key={relativeKey}
            index={index}

            {...item}
            {...props}
          />
        )

      })
  )
}

export default useMap
