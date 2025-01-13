import { UseMapTypeData, KeyConfig, KeyConfigObject, KeyConfigNotObject, DataNoObject } from "../types/types"

type ParseTypeItemParams = {
  key: KeyConfig<UseMapTypeData> | "default"
  item: UseMapTypeData,
}

type ParseTypeItem = ({ item, key }: ParseTypeItemParams) => {
  object: { newKey: KeyConfigObject<object> | "default", newItem: object }
  noObject: { newKey: KeyConfigNotObject | "default", newItem: DataNoObject }
}

const parseTypeItem: ParseTypeItem = ({ item, key }) => {
  return {
    object: {
      newKey: key as KeyConfig<object> | "default",
      newItem: item as object
    },
    noObject: {
      newKey: key as KeyConfigNotObject | "default",
      newItem: item as DataNoObject
    }
  }
}

export default parseTypeItem
