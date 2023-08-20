import React from "react"

interface UseMapProps {
  data: any[]
  Component: React.FC<any> | null | false

}

const useMap = ({ data, Component, ...props }: UseMapProps & Record<string, any>) => {
  return (
     <>
      {data && data.map((item, i) => {
        const key = item.id || i
        return (
          Component &&
          <Component key={key} i={i} element={item} {...item} {...props} />
        )
      })}
    </>
  )
}

export default useMap
