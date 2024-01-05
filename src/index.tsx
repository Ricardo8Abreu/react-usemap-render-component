import React, { ReactElement } from "react"

type Props = ReactElement["props"]

type UseMap = <T extends object, Y extends Props>(props: UseMapProps<T, Y>) => ReactElement[] | null

type UseMapProps<T extends object, Y> = Y & {
  key?: keyof T
  data: T[]
  Component: Component<Y & T>
}

type Component<Y> = (params: Y) => JSX.Element

const useMap: UseMap = ({ data, Component, key, ...props }) => {

  return (
    !data
      ? null
      : data.map((item, i) => {
        let relativeKey: React.Key = i

        if (key && key in item) {
          relativeKey = `${item[key]}`
        }

        return (
          // @ts-ignore
          <Component key={relativeKey} i={i} {...item} {...props} />
        )
      })

  )
}

export default useMap
