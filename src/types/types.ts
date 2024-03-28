import { FC, ReactNode, ReactElement } from "react"

type NewProps = {
  index: number
  children: ReactNode

}

type Component<Props> = FC<Props>
type UseMapProps<Props> = FC<Props>["arguments"]
type UseMapReturn<Props> = ReactElement<Props>[]

type DataNoObject = string | number

interface DataObject {
  id: string
}

type UseMapTypeData = object | DataNoObject
type UseMapPropsPropagation<Props, Data> = Omit<Props, keyof Data | keyof NewProps>

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

type UseMap = <Data extends UseMapTypeData, Props>(props: UseMapParams<Data, Props>) => UseMapReturn<NewProps & Data & Props>

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
