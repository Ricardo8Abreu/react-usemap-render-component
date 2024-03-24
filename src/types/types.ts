import { FC, JSX } from "react"

type NewProps = "children" | "index"
type Component<Props> = FC<Props>
type UseMapProps<Props> = FC<Props>["arguments"]

type DataNoObject = string | number

interface DataObject {
  id: string
}

type UseMapTypeData = object | DataNoObject
type UseMapPropsPropagation<Props, Data> = Omit<Props, keyof Data | NewProps>

type KeyConfigObject<Data> = "index" | keyof Data
type KeyConfigNotObject = "item"

type KeyConfig<Data> = Data extends object ? KeyConfigObject<Data> : KeyConfigNotObject

type UseMapParams<Data, Props> = {
  data: Data[]
  Component: Component<Props> & Component<UseMapProps<Props>>
  config?: {
    key?: KeyConfig<Data>
  },
} & UseMapPropsPropagation<Props, Data>

type UseMap = <Data extends UseMapTypeData, Props>(props: UseMapParams<Data, Props>) => (JSX.Element | undefined)[] | null

export {
  UseMap,
  NewProps,
  Component,
  KeyConfig,
  DataObject,
  UseMapProps,
  DataNoObject,
  UseMapParams,
  UseMapTypeData,
  KeyConfigObject,
  KeyConfigNotObject,
  UseMapPropsPropagation
}
