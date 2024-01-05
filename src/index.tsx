import React from "react"

type Props = JSX.Element["props"]

type UseMap = <T extends object, Y extends Props>(props: UseMapProps<T, Y>) => JSX.Element[] | null

type UseMapProps<T extends object, Y extends Props> = Omit<Y, keyof T> & {
  key?: keyof T
  data: T[]
  Component: Component<Y>

}

type Component<Y extends Props> = (__0: Y) => JSX.Element

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
